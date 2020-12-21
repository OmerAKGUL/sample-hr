package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Memtdconfig;
import com.mdsap.samplehr.repository.MemtdconfigRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Memtdconfig}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MemtdconfigResource {

    private final Logger log = LoggerFactory.getLogger(MemtdconfigResource.class);

    private static final String ENTITY_NAME = "memtdconfig";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MemtdconfigRepository memtdconfigRepository;

    public MemtdconfigResource(MemtdconfigRepository memtdconfigRepository) {
        this.memtdconfigRepository = memtdconfigRepository;
    }

    /**
     * {@code POST  /memtdconfigs} : Create a new memtdconfig.
     *
     * @param memtdconfig the memtdconfig to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new memtdconfig, or with status {@code 400 (Bad Request)} if the memtdconfig has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/memtdconfigs")
    public ResponseEntity<Memtdconfig> createMemtdconfig(@Valid @RequestBody Memtdconfig memtdconfig) throws URISyntaxException {
        log.debug("REST request to save Memtdconfig : {}", memtdconfig);
        if (memtdconfig.getId() != null) {
            throw new BadRequestAlertException("A new memtdconfig cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Memtdconfig result = memtdconfigRepository.save(memtdconfig);
        return ResponseEntity.created(new URI("/api/memtdconfigs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /memtdconfigs} : Updates an existing memtdconfig.
     *
     * @param memtdconfig the memtdconfig to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated memtdconfig,
     * or with status {@code 400 (Bad Request)} if the memtdconfig is not valid,
     * or with status {@code 500 (Internal Server Error)} if the memtdconfig couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/memtdconfigs")
    public ResponseEntity<Memtdconfig> updateMemtdconfig(@Valid @RequestBody Memtdconfig memtdconfig) throws URISyntaxException {
        log.debug("REST request to update Memtdconfig : {}", memtdconfig);
        if (memtdconfig.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Memtdconfig result = memtdconfigRepository.save(memtdconfig);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, memtdconfig.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /memtdconfigs} : get all the memtdconfigs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of memtdconfigs in body.
     */
    @GetMapping("/memtdconfigs")
    public List<Memtdconfig> getAllMemtdconfigs() {
        log.debug("REST request to get all Memtdconfigs");
        return memtdconfigRepository.findAll();
    }

    /**
     * {@code GET  /memtdconfigs/:id} : get the "id" memtdconfig.
     *
     * @param id the id of the memtdconfig to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the memtdconfig, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/memtdconfigs/{id}")
    public ResponseEntity<Memtdconfig> getMemtdconfig(@PathVariable Long id) {
        log.debug("REST request to get Memtdconfig : {}", id);
        Optional<Memtdconfig> memtdconfig = memtdconfigRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(memtdconfig);
    }

    /**
     * {@code DELETE  /memtdconfigs/:id} : delete the "id" memtdconfig.
     *
     * @param id the id of the memtdconfig to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/memtdconfigs/{id}")
    public ResponseEntity<Void> deleteMemtdconfig(@PathVariable Long id) {
        log.debug("REST request to delete Memtdconfig : {}", id);
        memtdconfigRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
