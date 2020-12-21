package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Itxcustaddress;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Itxcustaddress entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ItxcustaddressRepository extends JpaRepository<Itxcustaddress, Long> {
}
