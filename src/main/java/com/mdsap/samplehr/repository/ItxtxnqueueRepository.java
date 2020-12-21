package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxtxnqueue;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxtxnqueue entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxtxnqueueRepository extends JpaRepository<Itxtxnqueue, Long> {
}
