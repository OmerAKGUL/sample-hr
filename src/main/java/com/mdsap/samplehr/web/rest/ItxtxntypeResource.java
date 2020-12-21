package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxtxntype;
import com.mdsap.samplehr.repository.ItxtxntypeRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxtxntype}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxtxntypeResource {

    private final Logger log = LoggerFactory.getLogger(ItxtxntypeResource.class);

    private static final String ENTITY_NAME = "itxtxntype";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxtxntypeRepository itxtxntypeRepository;

    public ItxtxntypeResource(ItxtxntypeRepository itxtxntypeRepository) {
        this.itxtxntypeRepository = itxtxntypeRepository;
    }

    /**
     * {@code POST  /itxtxntypes} : Create a new itxtxntype.
     *
     * @param itxtxntype the itxtxntype to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxtxntype, or with status {@code 400 (Bad Request)} if the itxtxntype has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxtxntypes")
    public ResponseEntity<Itxtxntype> createItxtxntype(@RequestBody Itxtxntype itxtxntype) throws URISyntaxException {
        log.debug("REST request to save Itxtxntype : {}", itxtxntype);
        if (itxtxntype.getId() != null) {
            throw new BadRequestAlertException("A new itxtxntype cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxtxntype result = itxtxntypeRepository.save(itxtxntype);
        return ResponseEntity.created(new URI("/api/itxtxntypes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxtxntypes} : Updates an existing itxtxntype.
     *
     * @param itxtxntype the itxtxntype to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxtxntype,
     * or with status {@code 400 (Bad Request)} if the itxtxntype is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxtxntype couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxtxntypes")
    public ResponseEntity<Itxtxntype> updateItxtxntype(@RequestBody Itxtxntype itxtxntype) throws URISyntaxException {
        log.debug("REST request to update Itxtxntype : {}", itxtxntype);
        if (itxtxntype.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxtxntype result = itxtxntypeRepository.save(itxtxntype);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxtxntype.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxtxntypes} : get all the itxtxntypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxtxntypes in body.
     */
    @GetMapping("/itxtxntypes")
    public List<Itxtxntype> getAllItxtxntypes() {
        log.debug("REST request to get all Itxtxntypes");
        return itxtxntypeRepository.findAll();
    }

    /**
     * {@code GET  /itxtxntypes/:id} : get the "id" itxtxntype.
     *
     * @param id the id of the itxtxntype to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxtxntype, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxtxntypes/{id}")
    public ResponseEntity<Itxtxntype> getItxtxntype(@PathVariable Long id) {
        log.debug("REST request to get Itxtxntype : {}", id);
        Optional<Itxtxntype> itxtxntype = itxtxntypeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxtxntype);
    }

    /**
     * {@code DELETE  /itxtxntypes/:id} : delete the "id" itxtxntype.
     *
     * @param id the id of the itxtxntype to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxtxntypes/{id}")
    public ResponseEntity<Void> deleteItxtxntype(@PathVariable Long id) {
        log.debug("REST request to delete Itxtxntype : {}", id);
        itxtxntypeRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
