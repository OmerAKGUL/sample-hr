package com.mdsap.samplehr.repository;

import com.mdsap.samplehr.domain.User;
import com.mdsap.samplehr.domain.Wlmwldata;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Wlmwldata entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WlmwldataRepository extends JpaRepository<Wlmwldata, Long> {


    List<Wlmwldata> findOneByNamedata(String namedata);
    List<Wlmwldata> findOneByTinnumberdata(String tinnumberdata);
    List<Wlmwldata> findOneByNamedataAndTinnumberdata(String namedata,String tinnumberdata);
    List<Wlmwldata> findOneByNamedataAndCountrydata(String namedata,String countrydata);
    List<Wlmwldata> findOneByNamedataAndTinnumberdataAndCountrydata(String namedata,String tinnumberdata,String countrydata);
    List<Wlmwldata> findOneByTinnumberdataAndCountrydata(String tinnumberdata,String countrydata);



}
