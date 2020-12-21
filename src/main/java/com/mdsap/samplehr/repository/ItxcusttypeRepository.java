package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcusttype;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcusttype entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcusttypeRepository extends JpaRepository<Itxcusttype, Long> {
}
