package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afparamval;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afparamval entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfparamvalRepository extends JpaRepository<Afparamval, Long> {
}
