package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Memethodparam;
import com.mdsap.samplehr.repository.MemethodparamRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Memethodparam}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MemethodparamResource {

    private final Logger log = LoggerFactory.getLogger(MemethodparamResource.class);

    private static final String ENTITY_NAME = "memethodparam";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MemethodparamRepository memethodparamRepository;

    public MemethodparamResource(MemethodparamRepository memethodparamRepository) {
        this.memethodparamRepository = memethodparamRepository;
    }

    /**
     * {@code POST  /memethodparams} : Create a new memethodparam.
     *
     * @param memethodparam the memethodparam to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new memethodparam, or with status {@code 400 (Bad Request)} if the memethodparam has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/memethodparams")
    public ResponseEntity<Memethodparam> createMemethodparam(@Valid @RequestBody Memethodparam memethodparam) throws URISyntaxException {
        log.debug("REST request to save Memethodparam : {}", memethodparam);
        if (memethodparam.getId() != null) {
            throw new BadRequestAlertException("A new memethodparam cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Memethodparam result = memethodparamRepository.save(memethodparam);
        return ResponseEntity.created(new URI("/api/memethodparams/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /memethodparams} : Updates an existing memethodparam.
     *
     * @param memethodparam the memethodparam to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated memethodparam,
     * or with status {@code 400 (Bad Request)} if the memethodparam is not valid,
     * or with status {@code 500 (Internal Server Error)} if the memethodparam couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/memethodparams")
    public ResponseEntity<Memethodparam> updateMemethodparam(@Valid @RequestBody Memethodparam memethodparam) throws URISyntaxException {
        log.debug("REST request to update Memethodparam : {}", memethodparam);
        if (memethodparam.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Memethodparam result = memethodparamRepository.save(memethodparam);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, memethodparam.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /memethodparams} : get all the memethodparams.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of memethodparams in body.
     */
    @GetMapping("/memethodparams")
    public List<Memethodparam> getAllMemethodparams() {
        log.debug("REST request to get all Memethodparams");
        return memethodparamRepository.findAll();
    }

    /**
     * {@code GET  /memethodparams/:id} : get the "id" memethodparam.
     *
     * @param id the id of the memethodparam to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the memethodparam, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/memethodparams/{id}")
    public ResponseEntity<Memethodparam> getMemethodparam(@PathVariable Long id) {
        log.debug("REST request to get Memethodparam : {}", id);
        Optional<Memethodparam> memethodparam = memethodparamRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(memethodparam);
    }

    /**
     * {@code DELETE  /memethodparams/:id} : delete the "id" memethodparam.
     *
     * @param id the id of the memethodparam to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/memethodparams/{id}")
    public ResponseEntity<Void> deleteMemethodparam(@PathVariable Long id) {
        log.debug("REST request to delete Memethodparam : {}", id);
        memethodparamRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
