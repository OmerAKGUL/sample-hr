package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxorgbranch;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxorgbranch entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxorgbranchRepository extends JpaRepository<Itxorgbranch, Long> {
}
