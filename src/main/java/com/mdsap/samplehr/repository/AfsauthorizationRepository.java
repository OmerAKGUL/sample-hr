package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsauthorization;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsauthorization entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsauthorizationRepository extends JpaRepository<Afsauthorization, Long> {
}
