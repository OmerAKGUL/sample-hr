package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afworkflow;
import com.mdsap.samplehr.repository.AfworkflowRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afworkflow}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfworkflowResource {

    private final Logger log = LoggerFactory.getLogger(AfworkflowResource.class);

    private static final String ENTITY_NAME = "afworkflow";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfworkflowRepository afworkflowRepository;

    public AfworkflowResource(AfworkflowRepository afworkflowRepository) {
        this.afworkflowRepository = afworkflowRepository;
    }

    /**
     * {@code POST  /afworkflows} : Create a new afworkflow.
     *
     * @param afworkflow the afworkflow to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afworkflow, or with status {@code 400 (Bad Request)} if the afworkflow has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afworkflows")
    public ResponseEntity<Afworkflow> createAfworkflow(@Valid @RequestBody Afworkflow afworkflow) throws URISyntaxException {
        log.debug("REST request to save Afworkflow : {}", afworkflow);
        if (afworkflow.getId() != null) {
            throw new BadRequestAlertException("A new afworkflow cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afworkflow result = afworkflowRepository.save(afworkflow);
        return ResponseEntity.created(new URI("/api/afworkflows/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afworkflows} : Updates an existing afworkflow.
     *
     * @param afworkflow the afworkflow to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afworkflow,
     * or with status {@code 400 (Bad Request)} if the afworkflow is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afworkflow couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afworkflows")
    public ResponseEntity<Afworkflow> updateAfworkflow(@Valid @RequestBody Afworkflow afworkflow) throws URISyntaxException {
        log.debug("REST request to update Afworkflow : {}", afworkflow);
        if (afworkflow.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afworkflow result = afworkflowRepository.save(afworkflow);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afworkflow.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afworkflows} : get all the afworkflows.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afworkflows in body.
     */
    @GetMapping("/afworkflows")
    public List<Afworkflow> getAllAfworkflows() {
        log.debug("REST request to get all Afworkflows");
        return afworkflowRepository.findAll();
    }

    /**
     * {@code GET  /afworkflows/:id} : get the "id" afworkflow.
     *
     * @param id the id of the afworkflow to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afworkflow, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afworkflows/{id}")
    public ResponseEntity<Afworkflow> getAfworkflow(@PathVariable Long id) {
        log.debug("REST request to get Afworkflow : {}", id);
        Optional<Afworkflow> afworkflow = afworkflowRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afworkflow);
    }

    /**
     * {@code DELETE  /afworkflows/:id} : delete the "id" afworkflow.
     *
     * @param id the id of the afworkflow to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afworkflows/{id}")
    public ResponseEntity<Void> deleteAfworkflow(@PathVariable Long id) {
        log.debug("REST request to delete Afworkflow : {}", id);
        afworkflowRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
