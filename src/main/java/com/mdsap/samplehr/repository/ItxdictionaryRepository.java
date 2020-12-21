package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxdictionary;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxdictionary entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxdictionaryRepository extends JpaRepository<Itxdictionary, Long> {
}
