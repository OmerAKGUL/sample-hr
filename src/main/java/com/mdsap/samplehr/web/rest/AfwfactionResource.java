package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afwfaction;
import com.mdsap.samplehr.repository.AfwfactionRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afwfaction}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfwfactionResource {

    private final Logger log = LoggerFactory.getLogger(AfwfactionResource.class);

    private static final String ENTITY_NAME = "afwfaction";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfwfactionRepository afwfactionRepository;

    public AfwfactionResource(AfwfactionRepository afwfactionRepository) {
        this.afwfactionRepository = afwfactionRepository;
    }

    /**
     * {@code POST  /afwfactions} : Create a new afwfaction.
     *
     * @param afwfaction the afwfaction to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afwfaction, or with status {@code 400 (Bad Request)} if the afwfaction has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afwfactions")
    public ResponseEntity<Afwfaction> createAfwfaction(@Valid @RequestBody Afwfaction afwfaction) throws URISyntaxException {
        log.debug("REST request to save Afwfaction : {}", afwfaction);
        if (afwfaction.getId() != null) {
            throw new BadRequestAlertException("A new afwfaction cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afwfaction result = afwfactionRepository.save(afwfaction);
        return ResponseEntity.created(new URI("/api/afwfactions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afwfactions} : Updates an existing afwfaction.
     *
     * @param afwfaction the afwfaction to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afwfaction,
     * or with status {@code 400 (Bad Request)} if the afwfaction is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afwfaction couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afwfactions")
    public ResponseEntity<Afwfaction> updateAfwfaction(@Valid @RequestBody Afwfaction afwfaction) throws URISyntaxException {
        log.debug("REST request to update Afwfaction : {}", afwfaction);
        if (afwfaction.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afwfaction result = afwfactionRepository.save(afwfaction);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afwfaction.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afwfactions} : get all the afwfactions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afwfactions in body.
     */
    @GetMapping("/afwfactions")
    public List<Afwfaction> getAllAfwfactions() {
        log.debug("REST request to get all Afwfactions");
        return afwfactionRepository.findAll();
    }

    /**
     * {@code GET  /afwfactions/:id} : get the "id" afwfaction.
     *
     * @param id the id of the afwfaction to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afwfaction, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afwfactions/{id}")
    public ResponseEntity<Afwfaction> getAfwfaction(@PathVariable Long id) {
        log.debug("REST request to get Afwfaction : {}", id);
        Optional<Afwfaction> afwfaction = afwfactionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afwfaction);
    }

    /**
     * {@code DELETE  /afwfactions/:id} : delete the "id" afwfaction.
     *
     * @param id the id of the afwfaction to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afwfactions/{id}")
    public ResponseEntity<Void> deleteAfwfaction(@PathVariable Long id) {
        log.debug("REST request to delete Afwfaction : {}", id);
        afwfactionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
