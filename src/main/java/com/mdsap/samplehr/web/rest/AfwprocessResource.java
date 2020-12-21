package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afwprocess;
import com.mdsap.samplehr.repository.AfwprocessRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afwprocess}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfwprocessResource {

    private final Logger log = LoggerFactory.getLogger(AfwprocessResource.class);

    private static final String ENTITY_NAME = "afwprocess";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfwprocessRepository afwprocessRepository;

    public AfwprocessResource(AfwprocessRepository afwprocessRepository) {
        this.afwprocessRepository = afwprocessRepository;
    }

    /**
     * {@code POST  /afwprocesses} : Create a new afwprocess.
     *
     * @param afwprocess the afwprocess to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afwprocess, or with status {@code 400 (Bad Request)} if the afwprocess has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afwprocesses")
    public ResponseEntity<Afwprocess> createAfwprocess(@Valid @RequestBody Afwprocess afwprocess) throws URISyntaxException {
        log.debug("REST request to save Afwprocess : {}", afwprocess);
        if (afwprocess.getId() != null) {
            throw new BadRequestAlertException("A new afwprocess cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afwprocess result = afwprocessRepository.save(afwprocess);
        return ResponseEntity.created(new URI("/api/afwprocesses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afwprocesses} : Updates an existing afwprocess.
     *
     * @param afwprocess the afwprocess to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afwprocess,
     * or with status {@code 400 (Bad Request)} if the afwprocess is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afwprocess couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afwprocesses")
    public ResponseEntity<Afwprocess> updateAfwprocess(@Valid @RequestBody Afwprocess afwprocess) throws URISyntaxException {
        log.debug("REST request to update Afwprocess : {}", afwprocess);
        if (afwprocess.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afwprocess result = afwprocessRepository.save(afwprocess);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afwprocess.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afwprocesses} : get all the afwprocesses.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afwprocesses in body.
     */
    @GetMapping("/afwprocesses")
    public List<Afwprocess> getAllAfwprocesses() {
        log.debug("REST request to get all Afwprocesses");
        return afwprocessRepository.findAll();
    }

    /**
     * {@code GET  /afwprocesses/:id} : get the "id" afwprocess.
     *
     * @param id the id of the afwprocess to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afwprocess, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afwprocesses/{id}")
    public ResponseEntity<Afwprocess> getAfwprocess(@PathVariable Long id) {
        log.debug("REST request to get Afwprocess : {}", id);
        Optional<Afwprocess> afwprocess = afwprocessRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afwprocess);
    }

    /**
     * {@code DELETE  /afwprocesses/:id} : delete the "id" afwprocess.
     *
     * @param id the id of the afwprocess to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afwprocesses/{id}")
    public ResponseEntity<Void> deleteAfwprocess(@PathVariable Long id) {
        log.debug("REST request to delete Afwprocess : {}", id);
        afwprocessRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
