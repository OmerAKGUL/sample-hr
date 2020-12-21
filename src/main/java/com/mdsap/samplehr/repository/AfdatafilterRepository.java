package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afdatafilter;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afdatafilter entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfdatafilterRepository extends JpaRepository<Afdatafilter, Long> {
}
