package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Memethodparam;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Memethodparam entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MemethodparamRepository extends JpaRepository<Memethodparam, Long> {
}
