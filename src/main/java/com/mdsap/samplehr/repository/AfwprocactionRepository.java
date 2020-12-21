package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afwprocaction;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afwprocaction entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfwprocactionRepository extends JpaRepository<Afwprocaction, Long> {
}
