package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afwprocess;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afwprocess entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfwprocessRepository extends JpaRepository<Afwprocess, Long> {
}
