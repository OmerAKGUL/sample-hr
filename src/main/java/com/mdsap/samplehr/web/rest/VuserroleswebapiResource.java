package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Vuserroleswebapi;
import com.mdsap.samplehr.repository.VuserroleswebapiRepository;
import com.mdsap.samplehr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import com.mdsap.samplehr.domain.Wlmwldatalog;
import com.mdsap.samplehr.repository.WlmwldatalogRepository;
import com.mdsap.samplehr.web.rest.errors.BadRequestAlertException;




/**
 * REST controller for managing {@link com.mdsap.jhipster.domain.Vuserroleswebapi}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class VuserroleswebapiResource {

    private final Logger log = LoggerFactory.getLogger(VuserroleswebapiResource.class);

    private static final String ENTITY_NAME = "vuserroleswebapi";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final VuserroleswebapiRepository vuserroleswebapiRepository;

    public VuserroleswebapiResource(VuserroleswebapiRepository vuserroleswebapiRepository) {
        this.vuserroleswebapiRepository = vuserroleswebapiRepository;
    }

    /**
     * {@code POST  /vuserroleswebapis} : Create a new vuserroleswebapi.
     *
     * @param vuserroleswebapi the vuserroleswebapi to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new vuserroleswebapi, or with status {@code 400 (Bad Request)} if the vuserroleswebapi has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/vuserroleswebapis")
    public ResponseEntity<Vuserroleswebapi> createVuserroleswebapi(@RequestBody Vuserroleswebapi vuserroleswebapi) throws URISyntaxException {
        log.debug("REST request to save Vuserroleswebapi : {}", vuserroleswebapi);
        if (vuserroleswebapi.getId() != null) {
            throw new BadRequestAlertException("A new vuserroleswebapi cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Vuserroleswebapi result = vuserroleswebapiRepository.save(vuserroleswebapi);
        return ResponseEntity.created(new URI("/api/vuserroleswebapis/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /vuserroleswebapis} : Updates an existing vuserroleswebapi.
     *
     * @param vuserroleswebapi the vuserroleswebapi to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated vuserroleswebapi,
     * or with status {@code 400 (Bad Request)} if the vuserroleswebapi is not valid,
     * or with status {@code 500 (Internal Server Error)} if the vuserroleswebapi couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/vuserroleswebapis")
    public ResponseEntity<Vuserroleswebapi> updateVuserroleswebapi(@RequestBody Vuserroleswebapi vuserroleswebapi) throws URISyntaxException {
        log.debug("REST request to update Vuserroleswebapi : {}", vuserroleswebapi);
        if (vuserroleswebapi.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Vuserroleswebapi result = vuserroleswebapiRepository.save(vuserroleswebapi);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, vuserroleswebapi.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /vuserroleswebapis} : get all the vuserroleswebapis.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of vuserroleswebapis in body.
     */
    @GetMapping("/vuserroleswebapis")
    public List<Vuserroleswebapi> getAllVuserroleswebapis() {
        log.debug("REST request to get all Vuserroleswebapis");
        return vuserroleswebapiRepository.findAll();
    }

    /**
     * {@code GET  /vuserroleswebapis/:id} : get the "id" vuserroleswebapi.
     *
     * @param id the id of the vuserroleswebapi to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the vuserroleswebapi, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/vuserroleswebapis/{id}")
    public ResponseEntity<Vuserroleswebapi> getVuserroleswebapi(@PathVariable Long id) {
        log.debug("REST request to get Vuserroleswebapi : {}", id);
        Optional<Vuserroleswebapi> vuserroleswebapi = vuserroleswebapiRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(vuserroleswebapi);
    }

    /**
     * {@code DELETE  /vuserroleswebapis/:id} : delete the "id" vuserroleswebapi.
     *
     * @param id the id of the vuserroleswebapi to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/vuserroleswebapis/{id}")
    public ResponseEntity<Void> deleteVuserroleswebapi(@PathVariable Long id) {
        log.debug("REST request to delete Vuserroleswebapi : {}", id);
        vuserroleswebapiRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
