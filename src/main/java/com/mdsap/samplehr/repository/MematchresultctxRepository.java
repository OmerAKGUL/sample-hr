package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Mematchresultctx;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Mematchresultctx entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MematchresultctxRepository extends JpaRepository<Mematchresultctx, Long> {
}
