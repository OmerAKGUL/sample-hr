package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Wlmwldata;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Wlmwldata entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WlmwldataRepository extends JpaRepository<Wlmwldata, Long> {
}
