package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afetljobtype;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afetljobtype entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfetljobtypeRepository extends JpaRepository<Afetljobtype, Long> {
}
