package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Wlmwldata;
import com.mdsap.samplehr.domain.model.WLmwldataMatchResult;
import com.mdsap.samplehr.domain.model.WlmwldataFind;
import com.mdsap.samplehr.repository.WlmwldataRepository;
import com.mdsap.samplehr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mdsap.samplehr.domain.Wlmwldata}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class WlmwldataResource {

    private final Logger log = LoggerFactory.getLogger(WlmwldataResource.class);

    private static final String ENTITY_NAME = "wlmwldata";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final WlmwldataRepository wlmwldataRepository;

    public WlmwldataResource(WlmwldataRepository wlmwldataRepository) {
        this.wlmwldataRepository = wlmwldataRepository;
    }

    /**
     * {@code POST  /wlmwldata} : Create a new wlmwldata.
     *
     * @param wlmwldata the wlmwldata to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wlmwldata, or with status {@code 400 (Bad Request)} if the wlmwldata has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/wlmwldata")
    public ResponseEntity<Wlmwldata> createWlmwldata(@RequestBody Wlmwldata wlmwldata) throws URISyntaxException {
        log.debug("REST request to save Wlmwldata : {}", wlmwldata);
        if (wlmwldata.getId() != null) {
            throw new BadRequestAlertException("A new wlmwldata cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Wlmwldata result = wlmwldataRepository.save(wlmwldata);
        return ResponseEntity.created(new URI("/api/wlmwldata/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /wlmwldata} : Updates an existing wlmwldata.
     *
     * @param wlmwldata the wlmwldata to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated wlmwldata,
     * or with status {@code 400 (Bad Request)} if the wlmwldata is not valid,
     * or with status {@code 500 (Internal Server Error)} if the wlmwldata couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/wlmwldata")
    public ResponseEntity<Wlmwldata> updateWlmwldata(@RequestBody Wlmwldata wlmwldata) throws URISyntaxException {
        log.debug("REST request to update Wlmwldata : {}", wlmwldata);
        if (wlmwldata.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Wlmwldata result = wlmwldataRepository.save(wlmwldata);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, wlmwldata.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /wlmwldata} : get all the wlmwldata.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of wlmwldata in body.
     */
      @GetMapping("/wlmwldata")
    public ResponseEntity<List<Wlmwldata>> getAllWlmwldata(Pageable pageable) {
        log.debug("REST request to get a page of Wlmwldata");
        Page<Wlmwldata> page = wlmwldataRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /wlmwldata/:id} : get the "id" wlmwldata.
     *
     * @param id the id of the wlmwldata to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the wlmwldata, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/wlmwldata/{id}")
    public ResponseEntity<Wlmwldata> getWlmwldata(@PathVariable Long id) {
        log.debug("REST request to get Wlmwldata : {}", id);
        Optional<Wlmwldata> wlmwldata = wlmwldataRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(wlmwldata);
    }

    /**
     * {@code DELETE  /wlmwldata/:id} : delete the "id" wlmwldata.
     *
     * @param id the id of the wlmwldata to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/wlmwldata/{id}")
    public ResponseEntity<Void> deleteWlmwldata(@PathVariable Long id) {
        log.debug("REST request to delete Wlmwldata : {}", id);
        wlmwldataRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    /**
     * {@code POST  /wlmwldata} : Find  a wlmwldata.
     *
     * @param wlmwldatafind the wlmwldata to find.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wlmwldata, or with status {@code 400 (Bad Request)} if the wlmwldata has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/findwlmwldata")
    public ResponseEntity<WLmwldataMatchResult> findWlmwldata(@RequestBody WlmwldataFind wlmwldatafind) throws URISyntaxException {
        log.debug("REST request to save Wlmwldata : {}", wlmwldatafind);

        List<Wlmwldata> result= null;

        wlmwldatafind.update();


        if(wlmwldatafind.getNamedata()!=null && wlmwldatafind.getTinnumberdata()!=null && wlmwldatafind.getCountrydata()!=null)
            result = wlmwldataRepository.findOneByNamedataAndTinnumberdataAndCountrydata(wlmwldatafind.getNamedata(),wlmwldatafind.getTinnumberdata(),wlmwldatafind.getCountrydata());

        else if(wlmwldatafind.getNamedata()!=null && wlmwldatafind.getTinnumberdata()!=null)
            result = wlmwldataRepository.findOneByNamedataAndTinnumberdata(wlmwldatafind.getNamedata(),wlmwldatafind.getTinnumberdata());

        else if(wlmwldatafind.getNamedata()!=null && wlmwldatafind.getCountrydata()!=null)
            result = wlmwldataRepository.findOneByNamedataAndCountrydata(wlmwldatafind.getNamedata(),wlmwldatafind.getCountrydata());

        else if(wlmwldatafind.getTinnumberdata()!=null && wlmwldatafind.getCountrydata()!=null)
            result = wlmwldataRepository.findOneByTinnumberdataAndCountrydata(wlmwldatafind.getTinnumberdata(),wlmwldatafind.getCountrydata());

        else if(wlmwldatafind.getTinnumberdata()!=null)
            result = wlmwldataRepository.findOneByTinnumberdata(wlmwldatafind.getTinnumberdata());

        else if(wlmwldatafind.getNamedata()!=null)
            result = wlmwldataRepository.findOneByNamedata(wlmwldatafind.getNamedata());

        WLmwldataMatchResult matchResult = new WLmwldataMatchResult();
        matchResult.addMatchData(result);

        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(matchResult));
    }
}
