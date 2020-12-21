package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Meinvestproc;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Meinvestproc entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MeinvestprocRepository extends JpaRepository<Meinvestproc, Long> {
}
