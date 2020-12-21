package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Iwlimportqueue;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Iwlimportqueue entity.
 */
@SuppressWarnings("unused")
@Repository
public interface IwlimportqueueRepository extends JpaRepository<Iwlimportqueue, Long> {
}
