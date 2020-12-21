package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Memtdwlcriteria;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Memtdwlcriteria entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MemtdwlcriteriaRepository extends JpaRepository<Memtdwlcriteria, Long> {
}
