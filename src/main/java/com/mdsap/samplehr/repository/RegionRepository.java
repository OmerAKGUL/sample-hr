package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.Region;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.List;
/**
 * Spring Data  repository for the Region entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {
	

	List<Region> findByRegionNameContaining(String regionName);
 	
}
