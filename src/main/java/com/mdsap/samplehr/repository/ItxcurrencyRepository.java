package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcurrency;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcurrency entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcurrencyRepository extends JpaRepository<Itxcurrency, Long> {
}
