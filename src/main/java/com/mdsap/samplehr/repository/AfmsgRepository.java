package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afmsg;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afmsg entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfmsgRepository extends JpaRepository<Afmsg, Long> {
}
