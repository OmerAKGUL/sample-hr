package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afmenuchild;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afmenuchild entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfmenuchildRepository extends JpaRepository<Afmenuchild, Long> {
}
