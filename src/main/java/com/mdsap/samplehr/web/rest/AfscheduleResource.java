package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afschedule;
import com.mdsap.samplehr.repository.AfscheduleRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afschedule}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfscheduleResource {

    private final Logger log = LoggerFactory.getLogger(AfscheduleResource.class);

    private static final String ENTITY_NAME = "afschedule";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfscheduleRepository afscheduleRepository;

    public AfscheduleResource(AfscheduleRepository afscheduleRepository) {
        this.afscheduleRepository = afscheduleRepository;
    }

    /**
     * {@code POST  /afschedules} : Create a new afschedule.
     *
     * @param afschedule the afschedule to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afschedule, or with status {@code 400 (Bad Request)} if the afschedule has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afschedules")
    public ResponseEntity<Afschedule> createAfschedule(@Valid @RequestBody Afschedule afschedule) throws URISyntaxException {
        log.debug("REST request to save Afschedule : {}", afschedule);
        if (afschedule.getId() != null) {
            throw new BadRequestAlertException("A new afschedule cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afschedule result = afscheduleRepository.save(afschedule);
        return ResponseEntity.created(new URI("/api/afschedules/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afschedules} : Updates an existing afschedule.
     *
     * @param afschedule the afschedule to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afschedule,
     * or with status {@code 400 (Bad Request)} if the afschedule is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afschedule couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afschedules")
    public ResponseEntity<Afschedule> updateAfschedule(@Valid @RequestBody Afschedule afschedule) throws URISyntaxException {
        log.debug("REST request to update Afschedule : {}", afschedule);
        if (afschedule.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afschedule result = afscheduleRepository.save(afschedule);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afschedule.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afschedules} : get all the afschedules.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afschedules in body.
     */
    @GetMapping("/afschedules")
    public List<Afschedule> getAllAfschedules() {
        log.debug("REST request to get all Afschedules");
        return afscheduleRepository.findAll();
    }

    /**
     * {@code GET  /afschedules/:id} : get the "id" afschedule.
     *
     * @param id the id of the afschedule to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afschedule, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afschedules/{id}")
    public ResponseEntity<Afschedule> getAfschedule(@PathVariable Long id) {
        log.debug("REST request to get Afschedule : {}", id);
        Optional<Afschedule> afschedule = afscheduleRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afschedule);
    }

    /**
     * {@code DELETE  /afschedules/:id} : delete the "id" afschedule.
     *
     * @param id the id of the afschedule to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afschedules/{id}")
    public ResponseEntity<Void> deleteAfschedule(@PathVariable Long id) {
        log.debug("REST request to delete Afschedule : {}", id);
        afscheduleRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
