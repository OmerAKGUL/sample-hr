package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsystem;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsystem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsystemRepository extends JpaRepository<Afsystem, Long> {
}
