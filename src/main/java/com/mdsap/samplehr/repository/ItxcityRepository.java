package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcity;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcityRepository extends JpaRepository<Itxcity, Long> {
}
