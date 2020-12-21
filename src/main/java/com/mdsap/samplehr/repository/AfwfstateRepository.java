package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afwfstate;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afwfstate entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfwfstateRepository extends JpaRepository<Afwfstate, Long> {
}
