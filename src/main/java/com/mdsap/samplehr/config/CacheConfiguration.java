package com.mdsap.samplehr.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import io.github.jhipster.config.cache.PrefixedKeyGenerator;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {
    private GitProperties gitProperties;
    private BuildProperties buildProperties;
    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.mdsap.samplehr.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.mdsap.samplehr.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.mdsap.samplehr.domain.User.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Authority.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.User.class.getName() + ".authorities");
            createCache(cm, com.mdsap.samplehr.domain.Region.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Country.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Location.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Department.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Department.class.getName() + ".employees");
            createCache(cm, com.mdsap.samplehr.domain.Task.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Task.class.getName() + ".jobs");
            createCache(cm, com.mdsap.samplehr.domain.Employee.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Employee.class.getName() + ".jobs");
            createCache(cm, com.mdsap.samplehr.domain.Job.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Job.class.getName() + ".tasks");
            createCache(cm, com.mdsap.samplehr.domain.JobHistory.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Wlmwltype.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Wlmwldata.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afdatafilter.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afetljobtype.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afform.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afformdatafilter.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afmenuchild.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afmenuitem.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afmsg.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afparamval.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsauthentication.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsauthorization.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsrole.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsroleuser.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afschedule.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsysmodule.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afsystem.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afwfaction.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afwfstate.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afwprocaction.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afwprocess.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Afworkflow.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxaccounttype.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxaccounttinfo.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcity.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcountry.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcurrency.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcustaddress.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcustadressinfo.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcustinfo.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxcusttype.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxdictionary.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxorgbranch.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxorganization.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxtxnqueue.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Itxtxntype.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Iwlimportqueue.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Meconfig.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Meinvestproc.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Meinvestprofile.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Mematchmethod.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Mematchresult.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Mematchresultctx.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Memethodparam.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Memtdconfig.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Memtdwlcriteria.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Wlmwldatalog.class.getName());
            createCache(cm, com.mdsap.samplehr.domain.Jhiuser.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache == null) {
            cm.createCache(cacheName, jcacheConfiguration);
        }
    }

    @Autowired(required = false)
    public void setGitProperties(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @Autowired(required = false)
    public void setBuildProperties(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return new PrefixedKeyGenerator(this.gitProperties, this.buildProperties);
    }
}
