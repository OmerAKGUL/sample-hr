package com.mdsap.samplehr.security.customSecurity;

import com.mdsap.samplehr.domain.User;
import com.mdsap.samplehr.security.AuthoritiesConstants;
import com.mdsap.samplehr.service.UserService;
import com.mdsap.samplehr.service.dto.UserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.directory.Attributes;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import java.util.Collections;
import java.util.Optional;
import java.util.Properties;

@Component
public class CustomAuthenticationLDAP {

    @Autowired
    private UserService userService;

    private final Logger log = LoggerFactory.getLogger(CustomAuthenticationLDAP.class);

    public Boolean findAuthenticationLDAP(String username,String password)   {

        try {
             return checkLdap(username,password);

        }
        catch (Exception e) {

            log.error("Ldap Authentication Error! "+e.toString());
            return false;
        }


    }




    private boolean checkLdap(String username, String password) {


        String user="uid="+username+",dc=example,dc=com";
        try {

            Properties props = new Properties();
            props.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            props.put(Context.PROVIDER_URL, "ldap://ldap.forumsys.com:389");
            props.put(Context.SECURITY_PRINCIPAL, user);
            props.put(Context.SECURITY_CREDENTIALS, password);

            InitialDirContext context = new InitialDirContext(props);

            Optional<User> User= userService.getUserWithAuthoritiesByLogin(username);

            if(User.isPresent()) return true;

             return   addNewUSer(getUserAttributes(username,context));


        } catch (Exception e) {
            log.error("Ldap Authentication Error! "+e.toString());
            return false;
        }


    }

    private Boolean addNewUSer(UserDTO User) {


        try {
            if(User == null) return false;

            userService.createUser(User);
            return  true;
        } catch (Exception ex) {
            log.error("Add New User Error! "+ex.toString());

        }
        return false;
    }

    private UserDTO getUserAttributes(String username, InitialDirContext ctx) {
        try {


            UserDTO User = new UserDTO();

            SearchControls constraints = new SearchControls();
            constraints.setSearchScope(SearchControls.SUBTREE_SCOPE);

            String[] attrIDs = { "mail" ,"cn"};
            constraints.setReturningAttributes(attrIDs);
            NamingEnumeration answer = ctx.search("DC=example,DC=com", "uid=" + username, constraints);
            if (answer.hasMore()) {
                Attributes attrs = ((SearchResult) answer.next()).getAttributes();

                User.setLogin(username);
                User.setEmail(attrs.get("mail").get().toString());
                User.setFirstName(attrs.get("cn").get().toString());
                User.setLastName(attrs.get("cn").get().toString());
                User.setActivated(true);
                User.setAuthorities(Collections.singleton(AuthoritiesConstants.USER));

                return User;

            } else {
                log.error("LDAP Get User Attributes : invalid User");
                throw new Exception("Invalid User");

            }

        } catch (Exception ex) {
            log.error("LDAP Get User Attributes Error! "+ex.toString());

        }

        return null;
    }



}
