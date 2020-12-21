package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Mematchresult;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Mematchresult entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MematchresultRepository extends JpaRepository<Mematchresult, Long> {
}
