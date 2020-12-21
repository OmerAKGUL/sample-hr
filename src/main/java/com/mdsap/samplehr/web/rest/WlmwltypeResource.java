package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Wlmwltype;
import com.mdsap.samplehr.repository.WlmwltypeRepository;
import com.mdsap.samplehr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mdsap.samplehr.domain.Wlmwltype}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class WlmwltypeResource {

    private final Logger log = LoggerFactory.getLogger(WlmwltypeResource.class);

    private static final String ENTITY_NAME = "wlmwltype";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final WlmwltypeRepository wlmwltypeRepository;

    public WlmwltypeResource(WlmwltypeRepository wlmwltypeRepository) {
        this.wlmwltypeRepository = wlmwltypeRepository;
    }

    /**
     * {@code POST  /wlmwltypes} : Create a new wlmwltype.
     *
     * @param wlmwltype the wlmwltype to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wlmwltype, or with status {@code 400 (Bad Request)} if the wlmwltype has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/wlmwltypes")
    public ResponseEntity<Wlmwltype> createWlmwltype(@Valid @RequestBody Wlmwltype wlmwltype) throws URISyntaxException {
        log.debug("REST request to save Wlmwltype : {}", wlmwltype);
        if (wlmwltype.getId() != null) {
            throw new BadRequestAlertException("A new wlmwltype cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Wlmwltype result = wlmwltypeRepository.save(wlmwltype);
        return ResponseEntity.created(new URI("/api/wlmwltypes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /wlmwltypes} : Updates an existing wlmwltype.
     *
     * @param wlmwltype the wlmwltype to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated wlmwltype,
     * or with status {@code 400 (Bad Request)} if the wlmwltype is not valid,
     * or with status {@code 500 (Internal Server Error)} if the wlmwltype couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/wlmwltypes")
    public ResponseEntity<Wlmwltype> updateWlmwltype(@Valid @RequestBody Wlmwltype wlmwltype) throws URISyntaxException {
        log.debug("REST request to update Wlmwltype : {}", wlmwltype);
        if (wlmwltype.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Wlmwltype result = wlmwltypeRepository.save(wlmwltype);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, wlmwltype.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /wlmwltypes} : get all the wlmwltypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of wlmwltypes in body.
     */
    @GetMapping("/wlmwltypes")
    public List<Wlmwltype> getAllWlmwltypes() {
        log.debug("REST request to get all Wlmwltypes");
        return wlmwltypeRepository.findAll();
    }

    /**
     * {@code GET  /wlmwltypes/:id} : get the "id" wlmwltype.
     *
     * @param id the id of the wlmwltype to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the wlmwltype, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/wlmwltypes/{id}")
    public ResponseEntity<Wlmwltype> getWlmwltype(@PathVariable Long id) {
        log.debug("REST request to get Wlmwltype : {}", id);
        Optional<Wlmwltype> wlmwltype = wlmwltypeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(wlmwltype);
    }

    /**
     * {@code DELETE  /wlmwltypes/:id} : delete the "id" wlmwltype.
     *
     * @param id the id of the wlmwltype to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/wlmwltypes/{id}")
    public ResponseEntity<Void> deleteWlmwltype(@PathVariable Long id) {
        log.debug("REST request to delete Wlmwltype : {}", id);
        wlmwltypeRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
