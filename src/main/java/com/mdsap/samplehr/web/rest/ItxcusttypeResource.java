package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcusttype;
import com.mdsap.samplehr.repository.ItxcusttypeRepository;
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

/**
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcusttype}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcusttypeResource {

    private final Logger log = LoggerFactory.getLogger(ItxcusttypeResource.class);

    private static final String ENTITY_NAME = "itxcusttype";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcusttypeRepository itxcusttypeRepository;

    public ItxcusttypeResource(ItxcusttypeRepository itxcusttypeRepository) {
        this.itxcusttypeRepository = itxcusttypeRepository;
    }

    /**
     * {@code POST  /itxcusttypes} : Create a new itxcusttype.
     *
     * @param itxcusttype the itxcusttype to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcusttype, or with status {@code 400 (Bad Request)} if the itxcusttype has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcusttypes")
    public ResponseEntity<Itxcusttype> createItxcusttype(@RequestBody Itxcusttype itxcusttype) throws URISyntaxException {
        log.debug("REST request to save Itxcusttype : {}", itxcusttype);
        if (itxcusttype.getId() != null) {
            throw new BadRequestAlertException("A new itxcusttype cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcusttype result = itxcusttypeRepository.save(itxcusttype);
        return ResponseEntity.created(new URI("/api/itxcusttypes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcusttypes} : Updates an existing itxcusttype.
     *
     * @param itxcusttype the itxcusttype to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcusttype,
     * or with status {@code 400 (Bad Request)} if the itxcusttype is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcusttype couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcusttypes")
    public ResponseEntity<Itxcusttype> updateItxcusttype(@RequestBody Itxcusttype itxcusttype) throws URISyntaxException {
        log.debug("REST request to update Itxcusttype : {}", itxcusttype);
        if (itxcusttype.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcusttype result = itxcusttypeRepository.save(itxcusttype);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcusttype.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcusttypes} : get all the itxcusttypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcusttypes in body.
     */
    @GetMapping("/itxcusttypes")
    public List<Itxcusttype> getAllItxcusttypes() {
        log.debug("REST request to get all Itxcusttypes");
        return itxcusttypeRepository.findAll();
    }

    /**
     * {@code GET  /itxcusttypes/:id} : get the "id" itxcusttype.
     *
     * @param id the id of the itxcusttype to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcusttype, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcusttypes/{id}")
    public ResponseEntity<Itxcusttype> getItxcusttype(@PathVariable Long id) {
        log.debug("REST request to get Itxcusttype : {}", id);
        Optional<Itxcusttype> itxcusttype = itxcusttypeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcusttype);
    }

    /**
     * {@code DELETE  /itxcusttypes/:id} : delete the "id" itxcusttype.
     *
     * @param id the id of the itxcusttype to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcusttypes/{id}")
    public ResponseEntity<Void> deleteItxcusttype(@PathVariable Long id) {
        log.debug("REST request to delete Itxcusttype : {}", id);
        itxcusttypeRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
