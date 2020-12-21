package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afwfstate;
import com.mdsap.samplehr.repository.AfwfstateRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afwfstate}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfwfstateResource {

    private final Logger log = LoggerFactory.getLogger(AfwfstateResource.class);

    private static final String ENTITY_NAME = "afwfstate";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfwfstateRepository afwfstateRepository;

    public AfwfstateResource(AfwfstateRepository afwfstateRepository) {
        this.afwfstateRepository = afwfstateRepository;
    }

    /**
     * {@code POST  /afwfstates} : Create a new afwfstate.
     *
     * @param afwfstate the afwfstate to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afwfstate, or with status {@code 400 (Bad Request)} if the afwfstate has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afwfstates")
    public ResponseEntity<Afwfstate> createAfwfstate(@Valid @RequestBody Afwfstate afwfstate) throws URISyntaxException {
        log.debug("REST request to save Afwfstate : {}", afwfstate);
        if (afwfstate.getId() != null) {
            throw new BadRequestAlertException("A new afwfstate cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afwfstate result = afwfstateRepository.save(afwfstate);
        return ResponseEntity.created(new URI("/api/afwfstates/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afwfstates} : Updates an existing afwfstate.
     *
     * @param afwfstate the afwfstate to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afwfstate,
     * or with status {@code 400 (Bad Request)} if the afwfstate is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afwfstate couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afwfstates")
    public ResponseEntity<Afwfstate> updateAfwfstate(@Valid @RequestBody Afwfstate afwfstate) throws URISyntaxException {
        log.debug("REST request to update Afwfstate : {}", afwfstate);
        if (afwfstate.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afwfstate result = afwfstateRepository.save(afwfstate);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afwfstate.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afwfstates} : get all the afwfstates.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afwfstates in body.
     */
    @GetMapping("/afwfstates")
    public List<Afwfstate> getAllAfwfstates() {
        log.debug("REST request to get all Afwfstates");
        return afwfstateRepository.findAll();
    }

    /**
     * {@code GET  /afwfstates/:id} : get the "id" afwfstate.
     *
     * @param id the id of the afwfstate to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afwfstate, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afwfstates/{id}")
    public ResponseEntity<Afwfstate> getAfwfstate(@PathVariable Long id) {
        log.debug("REST request to get Afwfstate : {}", id);
        Optional<Afwfstate> afwfstate = afwfstateRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afwfstate);
    }

    /**
     * {@code DELETE  /afwfstates/:id} : delete the "id" afwfstate.
     *
     * @param id the id of the afwfstate to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afwfstates/{id}")
    public ResponseEntity<Void> deleteAfwfstate(@PathVariable Long id) {
        log.debug("REST request to delete Afwfstate : {}", id);
        afwfstateRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
