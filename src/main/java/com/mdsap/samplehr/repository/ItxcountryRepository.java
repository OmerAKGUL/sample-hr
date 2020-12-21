package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcountry;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcountry entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcountryRepository extends JpaRepository<Itxcountry, Long> {
}
