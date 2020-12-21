package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxtxntype;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxtxntype entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxtxntypeRepository extends JpaRepository<Itxtxntype, Long> {
}
