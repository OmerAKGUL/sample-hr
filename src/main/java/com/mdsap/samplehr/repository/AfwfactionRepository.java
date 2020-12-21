package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afwfaction;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afwfaction entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfwfactionRepository extends JpaRepository<Afwfaction, Long> {
}
