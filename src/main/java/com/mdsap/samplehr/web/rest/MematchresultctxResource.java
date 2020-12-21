package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Mematchresultctx;
import com.mdsap.samplehr.repository.MematchresultctxRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Mematchresultctx}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MematchresultctxResource {

    private final Logger log = LoggerFactory.getLogger(MematchresultctxResource.class);

    private static final String ENTITY_NAME = "mematchresultctx";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MematchresultctxRepository mematchresultctxRepository;

    public MematchresultctxResource(MematchresultctxRepository mematchresultctxRepository) {
        this.mematchresultctxRepository = mematchresultctxRepository;
    }

    /**
     * {@code POST  /mematchresultctxes} : Create a new mematchresultctx.
     *
     * @param mematchresultctx the mematchresultctx to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mematchresultctx, or with status {@code 400 (Bad Request)} if the mematchresultctx has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/mematchresultctxes")
    public ResponseEntity<Mematchresultctx> createMematchresultctx(@Valid @RequestBody Mematchresultctx mematchresultctx) throws URISyntaxException {
        log.debug("REST request to save Mematchresultctx : {}", mematchresultctx);
        if (mematchresultctx.getId() != null) {
            throw new BadRequestAlertException("A new mematchresultctx cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Mematchresultctx result = mematchresultctxRepository.save(mematchresultctx);
        return ResponseEntity.created(new URI("/api/mematchresultctxes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /mematchresultctxes} : Updates an existing mematchresultctx.
     *
     * @param mematchresultctx the mematchresultctx to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mematchresultctx,
     * or with status {@code 400 (Bad Request)} if the mematchresultctx is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mematchresultctx couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/mematchresultctxes")
    public ResponseEntity<Mematchresultctx> updateMematchresultctx(@Valid @RequestBody Mematchresultctx mematchresultctx) throws URISyntaxException {
        log.debug("REST request to update Mematchresultctx : {}", mematchresultctx);
        if (mematchresultctx.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Mematchresultctx result = mematchresultctxRepository.save(mematchresultctx);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mematchresultctx.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /mematchresultctxes} : get all the mematchresultctxes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mematchresultctxes in body.
     */
    @GetMapping("/mematchresultctxes")
    public List<Mematchresultctx> getAllMematchresultctxes() {
        log.debug("REST request to get all Mematchresultctxes");
        return mematchresultctxRepository.findAll();
    }

    /**
     * {@code GET  /mematchresultctxes/:id} : get the "id" mematchresultctx.
     *
     * @param id the id of the mematchresultctx to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mematchresultctx, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/mematchresultctxes/{id}")
    public ResponseEntity<Mematchresultctx> getMematchresultctx(@PathVariable Long id) {
        log.debug("REST request to get Mematchresultctx : {}", id);
        Optional<Mematchresultctx> mematchresultctx = mematchresultctxRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(mematchresultctx);
    }

    /**
     * {@code DELETE  /mematchresultctxes/:id} : delete the "id" mematchresultctx.
     *
     * @param id the id of the mematchresultctx to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/mematchresultctxes/{id}")
    public ResponseEntity<Void> deleteMematchresultctx(@PathVariable Long id) {
        log.debug("REST request to delete Mematchresultctx : {}", id);
        mematchresultctxRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
