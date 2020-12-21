package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcustadressinfo;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcustadressinfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcustadressinfoRepository extends JpaRepository<Itxcustadressinfo, Long> {
}
