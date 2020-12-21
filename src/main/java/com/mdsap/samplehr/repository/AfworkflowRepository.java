package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afworkflow;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afworkflow entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfworkflowRepository extends JpaRepository<Afworkflow, Long> {
}
