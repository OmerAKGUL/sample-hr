package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsrole;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsrole entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsroleRepository extends JpaRepository<Afsrole, Long> {
}
