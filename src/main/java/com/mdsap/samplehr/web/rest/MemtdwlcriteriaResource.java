package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Memtdwlcriteria;
import com.mdsap.samplehr.repository.MemtdwlcriteriaRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Memtdwlcriteria}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MemtdwlcriteriaResource {

    private final Logger log = LoggerFactory.getLogger(MemtdwlcriteriaResource.class);

    private static final String ENTITY_NAME = "memtdwlcriteria";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MemtdwlcriteriaRepository memtdwlcriteriaRepository;

    public MemtdwlcriteriaResource(MemtdwlcriteriaRepository memtdwlcriteriaRepository) {
        this.memtdwlcriteriaRepository = memtdwlcriteriaRepository;
    }

    /**
     * {@code POST  /memtdwlcriteria} : Create a new memtdwlcriteria.
     *
     * @param memtdwlcriteria the memtdwlcriteria to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new memtdwlcriteria, or with status {@code 400 (Bad Request)} if the memtdwlcriteria has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/memtdwlcriteria")
    public ResponseEntity<Memtdwlcriteria> createMemtdwlcriteria(@Valid @RequestBody Memtdwlcriteria memtdwlcriteria) throws URISyntaxException {
        log.debug("REST request to save Memtdwlcriteria : {}", memtdwlcriteria);
        if (memtdwlcriteria.getId() != null) {
            throw new BadRequestAlertException("A new memtdwlcriteria cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Memtdwlcriteria result = memtdwlcriteriaRepository.save(memtdwlcriteria);
        return ResponseEntity.created(new URI("/api/memtdwlcriteria/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /memtdwlcriteria} : Updates an existing memtdwlcriteria.
     *
     * @param memtdwlcriteria the memtdwlcriteria to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated memtdwlcriteria,
     * or with status {@code 400 (Bad Request)} if the memtdwlcriteria is not valid,
     * or with status {@code 500 (Internal Server Error)} if the memtdwlcriteria couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/memtdwlcriteria")
    public ResponseEntity<Memtdwlcriteria> updateMemtdwlcriteria(@Valid @RequestBody Memtdwlcriteria memtdwlcriteria) throws URISyntaxException {
        log.debug("REST request to update Memtdwlcriteria : {}", memtdwlcriteria);
        if (memtdwlcriteria.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Memtdwlcriteria result = memtdwlcriteriaRepository.save(memtdwlcriteria);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, memtdwlcriteria.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /memtdwlcriteria} : get all the memtdwlcriteria.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of memtdwlcriteria in body.
     */
    @GetMapping("/memtdwlcriteria")
    public List<Memtdwlcriteria> getAllMemtdwlcriteria() {
        log.debug("REST request to get all Memtdwlcriteria");
        return memtdwlcriteriaRepository.findAll();
    }

    /**
     * {@code GET  /memtdwlcriteria/:id} : get the "id" memtdwlcriteria.
     *
     * @param id the id of the memtdwlcriteria to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the memtdwlcriteria, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/memtdwlcriteria/{id}")
    public ResponseEntity<Memtdwlcriteria> getMemtdwlcriteria(@PathVariable Long id) {
        log.debug("REST request to get Memtdwlcriteria : {}", id);
        Optional<Memtdwlcriteria> memtdwlcriteria = memtdwlcriteriaRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(memtdwlcriteria);
    }

    /**
     * {@code DELETE  /memtdwlcriteria/:id} : delete the "id" memtdwlcriteria.
     *
     * @param id the id of the memtdwlcriteria to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/memtdwlcriteria/{id}")
    public ResponseEntity<Void> deleteMemtdwlcriteria(@PathVariable Long id) {
        log.debug("REST request to delete Memtdwlcriteria : {}", id);
        memtdwlcriteriaRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
