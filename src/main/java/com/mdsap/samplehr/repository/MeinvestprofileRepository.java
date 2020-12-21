package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Meinvestprofile;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Meinvestprofile entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MeinvestprofileRepository extends JpaRepository<Meinvestprofile, Long> {
}
