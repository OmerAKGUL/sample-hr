package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Mematchmethod;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Mematchmethod entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MematchmethodRepository extends JpaRepository<Mematchmethod, Long> {
}
