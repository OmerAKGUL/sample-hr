package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxtxnqueue;
import com.mdsap.samplehr.repository.ItxtxnqueueRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxtxnqueue}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxtxnqueueResource {

    private final Logger log = LoggerFactory.getLogger(ItxtxnqueueResource.class);

    private static final String ENTITY_NAME = "itxtxnqueue";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxtxnqueueRepository itxtxnqueueRepository;

    public ItxtxnqueueResource(ItxtxnqueueRepository itxtxnqueueRepository) {
        this.itxtxnqueueRepository = itxtxnqueueRepository;
    }

    /**
     * {@code POST  /itxtxnqueues} : Create a new itxtxnqueue.
     *
     * @param itxtxnqueue the itxtxnqueue to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxtxnqueue, or with status {@code 400 (Bad Request)} if the itxtxnqueue has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxtxnqueues")
    public ResponseEntity<Itxtxnqueue> createItxtxnqueue(@RequestBody Itxtxnqueue itxtxnqueue) throws URISyntaxException {
        log.debug("REST request to save Itxtxnqueue : {}", itxtxnqueue);
        if (itxtxnqueue.getId() != null) {
            throw new BadRequestAlertException("A new itxtxnqueue cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxtxnqueue result = itxtxnqueueRepository.save(itxtxnqueue);
        return ResponseEntity.created(new URI("/api/itxtxnqueues/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxtxnqueues} : Updates an existing itxtxnqueue.
     *
     * @param itxtxnqueue the itxtxnqueue to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxtxnqueue,
     * or with status {@code 400 (Bad Request)} if the itxtxnqueue is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxtxnqueue couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxtxnqueues")
    public ResponseEntity<Itxtxnqueue> updateItxtxnqueue(@RequestBody Itxtxnqueue itxtxnqueue) throws URISyntaxException {
        log.debug("REST request to update Itxtxnqueue : {}", itxtxnqueue);
        if (itxtxnqueue.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxtxnqueue result = itxtxnqueueRepository.save(itxtxnqueue);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxtxnqueue.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxtxnqueues} : get all the itxtxnqueues.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxtxnqueues in body.
     */
    @GetMapping("/itxtxnqueues")
    public List<Itxtxnqueue> getAllItxtxnqueues() {
        log.debug("REST request to get all Itxtxnqueues");
        return itxtxnqueueRepository.findAll();
    }

    /**
     * {@code GET  /itxtxnqueues/:id} : get the "id" itxtxnqueue.
     *
     * @param id the id of the itxtxnqueue to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxtxnqueue, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxtxnqueues/{id}")
    public ResponseEntity<Itxtxnqueue> getItxtxnqueue(@PathVariable Long id) {
        log.debug("REST request to get Itxtxnqueue : {}", id);
        Optional<Itxtxnqueue> itxtxnqueue = itxtxnqueueRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxtxnqueue);
    }

    /**
     * {@code DELETE  /itxtxnqueues/:id} : delete the "id" itxtxnqueue.
     *
     * @param id the id of the itxtxnqueue to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxtxnqueues/{id}")
    public ResponseEntity<Void> deleteItxtxnqueue(@PathVariable Long id) {
        log.debug("REST request to delete Itxtxnqueue : {}", id);
        itxtxnqueueRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
