package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Wlmwldatalog;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Wlmwldatalog entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WlmwldatalogRepository extends JpaRepository<Wlmwldatalog, Long> {
}
