package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcustinfo;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcustinfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcustinfoRepository extends JpaRepository<Itxcustinfo, Long> {
}
