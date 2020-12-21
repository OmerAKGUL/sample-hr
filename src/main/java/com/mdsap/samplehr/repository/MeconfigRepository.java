package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Meconfig;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Meconfig entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MeconfigRepository extends JpaRepository<Meconfig, Long> {
}
