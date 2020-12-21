package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Jhiuser;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Jhiuser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JhiuserRepository extends JpaRepository<Jhiuser, Long> {
}
