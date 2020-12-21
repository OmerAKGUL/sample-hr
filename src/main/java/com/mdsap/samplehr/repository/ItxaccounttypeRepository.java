package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxaccounttype;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxaccounttype entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxaccounttypeRepository extends JpaRepository<Itxaccounttype, Long> {
}
