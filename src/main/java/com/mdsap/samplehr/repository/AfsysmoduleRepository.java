package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afsysmodule;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afsysmodule entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfsysmoduleRepository extends JpaRepository<Afsysmodule, Long> {
}
