package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Iwlimportqueue;
import com.mdsap.samplehr.repository.IwlimportqueueRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Iwlimportqueue}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class IwlimportqueueResource {

    private final Logger log = LoggerFactory.getLogger(IwlimportqueueResource.class);

    private static final String ENTITY_NAME = "iwlimportqueue";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final IwlimportqueueRepository iwlimportqueueRepository;

    public IwlimportqueueResource(IwlimportqueueRepository iwlimportqueueRepository) {
        this.iwlimportqueueRepository = iwlimportqueueRepository;
    }

    /**
     * {@code POST  /iwlimportqueues} : Create a new iwlimportqueue.
     *
     * @param iwlimportqueue the iwlimportqueue to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new iwlimportqueue, or with status {@code 400 (Bad Request)} if the iwlimportqueue has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/iwlimportqueues")
    public ResponseEntity<Iwlimportqueue> createIwlimportqueue(@RequestBody Iwlimportqueue iwlimportqueue) throws URISyntaxException {
        log.debug("REST request to save Iwlimportqueue : {}", iwlimportqueue);
        if (iwlimportqueue.getId() != null) {
            throw new BadRequestAlertException("A new iwlimportqueue cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Iwlimportqueue result = iwlimportqueueRepository.save(iwlimportqueue);
        return ResponseEntity.created(new URI("/api/iwlimportqueues/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /iwlimportqueues} : Updates an existing iwlimportqueue.
     *
     * @param iwlimportqueue the iwlimportqueue to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated iwlimportqueue,
     * or with status {@code 400 (Bad Request)} if the iwlimportqueue is not valid,
     * or with status {@code 500 (Internal Server Error)} if the iwlimportqueue couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/iwlimportqueues")
    public ResponseEntity<Iwlimportqueue> updateIwlimportqueue(@RequestBody Iwlimportqueue iwlimportqueue) throws URISyntaxException {
        log.debug("REST request to update Iwlimportqueue : {}", iwlimportqueue);
        if (iwlimportqueue.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Iwlimportqueue result = iwlimportqueueRepository.save(iwlimportqueue);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, iwlimportqueue.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /iwlimportqueues} : get all the iwlimportqueues.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of iwlimportqueues in body.
     */
    @GetMapping("/iwlimportqueues")
    public List<Iwlimportqueue> getAllIwlimportqueues() {
        log.debug("REST request to get all Iwlimportqueues");
        return iwlimportqueueRepository.findAll();
    }

    /**
     * {@code GET  /iwlimportqueues/:id} : get the "id" iwlimportqueue.
     *
     * @param id the id of the iwlimportqueue to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the iwlimportqueue, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/iwlimportqueues/{id}")
    public ResponseEntity<Iwlimportqueue> getIwlimportqueue(@PathVariable Long id) {
        log.debug("REST request to get Iwlimportqueue : {}", id);
        Optional<Iwlimportqueue> iwlimportqueue = iwlimportqueueRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(iwlimportqueue);
    }

    /**
     * {@code DELETE  /iwlimportqueues/:id} : delete the "id" iwlimportqueue.
     *
     * @param id the id of the iwlimportqueue to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/iwlimportqueues/{id}")
    public ResponseEntity<Void> deleteIwlimportqueue(@PathVariable Long id) {
        log.debug("REST request to delete Iwlimportqueue : {}", id);
        iwlimportqueueRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
