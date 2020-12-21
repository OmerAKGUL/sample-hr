package com.mdsap.samplehr.security.customSecurity;

import com.mdsap.samplehr.domain.User;
import com.mdsap.samplehr.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomAuthenticationDB {


    @Autowired
    private UserService userService;

    private final Logger log = LoggerFactory.getLogger(CustomAuthenticationDB.class);

    public Boolean findAuthenticationDB(String username,String password)
    {
        Optional<User> user= userService.getUserWithAuthoritiesByLogin(username);

        if(!user.isPresent()) {
            log.error("User not found in DB !");
            return false;
        }
        Boolean passwordMach = new BCryptPasswordEncoder().matches(password,user.get().getPassword());

        if(!passwordMach) log.error("User password not mach with DB !");

       return passwordMach;

    }


}
