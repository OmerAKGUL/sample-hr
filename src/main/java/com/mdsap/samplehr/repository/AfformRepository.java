package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afform;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afform entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfformRepository extends JpaRepository<Afform, Long> {
}
