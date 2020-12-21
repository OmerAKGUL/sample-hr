package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Memtdconfig;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Memtdconfig entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MemtdconfigRepository extends JpaRepository<Memtdconfig, Long> {
}
