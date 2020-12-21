package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Wlmwltype;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Wlmwltype entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WlmwltypeRepository extends JpaRepository<Wlmwltype, Long> {
}
