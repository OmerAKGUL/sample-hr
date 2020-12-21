package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxaccounttinfo;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxaccounttinfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxaccounttinfoRepository extends JpaRepository<Itxaccounttinfo, Long> {
}
