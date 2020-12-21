package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxorganization;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxorganization entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxorganizationRepository extends JpaRepository<Itxorganization, Long> {
}
