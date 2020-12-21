package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Mematchmethod;
import com.mdsap.samplehr.repository.MematchmethodRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Mematchmethod}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MematchmethodResource {

    private final Logger log = LoggerFactory.getLogger(MematchmethodResource.class);

    private static final String ENTITY_NAME = "mematchmethod";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MematchmethodRepository mematchmethodRepository;

    public MematchmethodResource(MematchmethodRepository mematchmethodRepository) {
        this.mematchmethodRepository = mematchmethodRepository;
    }

    /**
     * {@code POST  /mematchmethods} : Create a new mematchmethod.
     *
     * @param mematchmethod the mematchmethod to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mematchmethod, or with status {@code 400 (Bad Request)} if the mematchmethod has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/mematchmethods")
    public ResponseEntity<Mematchmethod> createMematchmethod(@Valid @RequestBody Mematchmethod mematchmethod) throws URISyntaxException {
        log.debug("REST request to save Mematchmethod : {}", mematchmethod);
        if (mematchmethod.getId() != null) {
            throw new BadRequestAlertException("A new mematchmethod cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Mematchmethod result = mematchmethodRepository.save(mematchmethod);
        return ResponseEntity.created(new URI("/api/mematchmethods/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /mematchmethods} : Updates an existing mematchmethod.
     *
     * @param mematchmethod the mematchmethod to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mematchmethod,
     * or with status {@code 400 (Bad Request)} if the mematchmethod is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mematchmethod couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/mematchmethods")
    public ResponseEntity<Mematchmethod> updateMematchmethod(@Valid @RequestBody Mematchmethod mematchmethod) throws URISyntaxException {
        log.debug("REST request to update Mematchmethod : {}", mematchmethod);
        if (mematchmethod.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Mematchmethod result = mematchmethodRepository.save(mematchmethod);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mematchmethod.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /mematchmethods} : get all the mematchmethods.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mematchmethods in body.
     */
    @GetMapping("/mematchmethods")
    public List<Mematchmethod> getAllMematchmethods() {
        log.debug("REST request to get all Mematchmethods");
        return mematchmethodRepository.findAll();
    }

    /**
     * {@code GET  /mematchmethods/:id} : get the "id" mematchmethod.
     *
     * @param id the id of the mematchmethod to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mematchmethod, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/mematchmethods/{id}")
    public ResponseEntity<Mematchmethod> getMematchmethod(@PathVariable Long id) {
        log.debug("REST request to get Mematchmethod : {}", id);
        Optional<Mematchmethod> mematchmethod = mematchmethodRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(mematchmethod);
    }

    /**
     * {@code DELETE  /mematchmethods/:id} : delete the "id" mematchmethod.
     *
     * @param id the id of the mematchmethod to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/mematchmethods/{id}")
    public ResponseEntity<Void> deleteMematchmethod(@PathVariable Long id) {
        log.debug("REST request to delete Mematchmethod : {}", id);
        mematchmethodRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
