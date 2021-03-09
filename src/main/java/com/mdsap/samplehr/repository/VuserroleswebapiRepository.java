package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Vuserroleswebapi;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Vuserroleswebapi entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VuserroleswebapiRepository extends JpaRepository<Vuserroleswebapi, Long> {
}
