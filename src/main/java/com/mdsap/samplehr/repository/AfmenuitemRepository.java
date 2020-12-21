package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afmenuitem;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afmenuitem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfmenuitemRepository extends JpaRepository<Afmenuitem, Long> {
}
