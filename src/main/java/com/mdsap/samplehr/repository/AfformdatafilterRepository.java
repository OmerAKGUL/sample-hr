package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Afformdatafilter;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Afformdatafilter entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AfformdatafilterRepository extends JpaRepository<Afformdatafilter, Long> {
}
