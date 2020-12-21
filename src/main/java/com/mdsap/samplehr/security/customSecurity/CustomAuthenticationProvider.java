package com.mdsap.samplehr.security.customSecurity;

import java.util.*;

import com.mdsap.samplehr.domain.Authority;
import com.mdsap.samplehr.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import   org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    boolean shouldAuthenticateAgainstThirdPartySystem = true;

    @Autowired
    private   UserService userService;

    @Autowired
    private   CustomAuthenticationLDAP ldapServices;

    @Autowired
    private   CustomAuthenticationDB dbServices;


    private final Logger log = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String name = authentication.getName();
        String password = authentication.getCredentials().toString();

        if(!dbServices.findAuthenticationDB(name,password))
            if(!ldapServices.findAuthenticationLDAP(name,password))
                return null;

        log.info("Authentication is  successful for "+name );

        Optional<com.mdsap.samplehr.domain.User> user= userService.getUserWithAuthoritiesByLogin(name);

        final List<GrantedAuthority> grantedAuths = new ArrayList<>();
            Set<Authority> authorities =user.get().getAuthorities();

            for (Authority a:authorities) {
                grantedAuths.add(new SimpleGrantedAuthority(a.getName()));
            }

            final UserDetails principal = new User(name, "", grantedAuths);

            final Authentication auth = new UsernamePasswordAuthenticationToken(principal, "", grantedAuths);

            return auth;

    }

    @Override
    public boolean supports(Class<?> authentication) {

        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
