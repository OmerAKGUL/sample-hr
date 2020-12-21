package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsauthentication;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsauthentication entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsauthenticationRepository extends JpaRepository<Afsauthentication, Long> {
}
