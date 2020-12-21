package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsroleuser;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsroleuser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsroleuserRepository extends JpaRepository<Afsroleuser, Long> {
}
