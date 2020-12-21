package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afwprocaction;
import com.mdsap.samplehr.repository.AfwprocactionRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afwprocaction}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfwprocactionResource {

    private final Logger log = LoggerFactory.getLogger(AfwprocactionResource.class);

    private static final String ENTITY_NAME = "afwprocaction";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfwprocactionRepository afwprocactionRepository;

    public AfwprocactionResource(AfwprocactionRepository afwprocactionRepository) {
        this.afwprocactionRepository = afwprocactionRepository;
    }

    /**
     * {@code POST  /afwprocactions} : Create a new afwprocaction.
     *
     * @param afwprocaction the afwprocaction to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afwprocaction, or with status {@code 400 (Bad Request)} if the afwprocaction has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afwprocactions")
    public ResponseEntity<Afwprocaction> createAfwprocaction(@RequestBody Afwprocaction afwprocaction) throws URISyntaxException {
        log.debug("REST request to save Afwprocaction : {}", afwprocaction);
        if (afwprocaction.getId() != null) {
            throw new BadRequestAlertException("A new afwprocaction cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afwprocaction result = afwprocactionRepository.save(afwprocaction);
        return ResponseEntity.created(new URI("/api/afwprocactions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afwprocactions} : Updates an existing afwprocaction.
     *
     * @param afwprocaction the afwprocaction to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afwprocaction,
     * or with status {@code 400 (Bad Request)} if the afwprocaction is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afwprocaction couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afwprocactions")
    public ResponseEntity<Afwprocaction> updateAfwprocaction(@RequestBody Afwprocaction afwprocaction) throws URISyntaxException {
        log.debug("REST request to update Afwprocaction : {}", afwprocaction);
        if (afwprocaction.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afwprocaction result = afwprocactionRepository.save(afwprocaction);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afwprocaction.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afwprocactions} : get all the afwprocactions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afwprocactions in body.
     */
    @GetMapping("/afwprocactions")
    public List<Afwprocaction> getAllAfwprocactions() {
        log.debug("REST request to get all Afwprocactions");
        return afwprocactionRepository.findAll();
    }

    /**
     * {@code GET  /afwprocactions/:id} : get the "id" afwprocaction.
     *
     * @param id the id of the afwprocaction to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afwprocaction, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afwprocactions/{id}")
    public ResponseEntity<Afwprocaction> getAfwprocaction(@PathVariable Long id) {
        log.debug("REST request to get Afwprocaction : {}", id);
        Optional<Afwprocaction> afwprocaction = afwprocactionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afwprocaction);
    }

    /**
     * {@code DELETE  /afwprocactions/:id} : delete the "id" afwprocaction.
     *
     * @param id the id of the afwprocaction to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afwprocactions/{id}")
    public ResponseEntity<Void> deleteAfwprocaction(@PathVariable Long id) {
        log.debug("REST request to delete Afwprocaction : {}", id);
        afwprocactionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
