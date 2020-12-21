package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afschedule;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afschedule entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfscheduleRepository extends JpaRepository<Afschedule, Long> {
}
