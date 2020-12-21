package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Mematchresult;
import com.mdsap.samplehr.repository.MematchresultRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Mematchresult}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MematchresultResource {

    private final Logger log = LoggerFactory.getLogger(MematchresultResource.class);

    private static final String ENTITY_NAME = "mematchresult";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MematchresultRepository mematchresultRepository;

    public MematchresultResource(MematchresultRepository mematchresultRepository) {
        this.mematchresultRepository = mematchresultRepository;
    }

    /**
     * {@code POST  /mematchresults} : Create a new mematchresult.
     *
     * @param mematchresult the mematchresult to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mematchresult, or with status {@code 400 (Bad Request)} if the mematchresult has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/mematchresults")
    public ResponseEntity<Mematchresult> createMematchresult(@Valid @RequestBody Mematchresult mematchresult) throws URISyntaxException {
        log.debug("REST request to save Mematchresult : {}", mematchresult);
        if (mematchresult.getId() != null) {
            throw new BadRequestAlertException("A new mematchresult cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Mematchresult result = mematchresultRepository.save(mematchresult);
        return ResponseEntity.created(new URI("/api/mematchresults/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /mematchresults} : Updates an existing mematchresult.
     *
     * @param mematchresult the mematchresult to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mematchresult,
     * or with status {@code 400 (Bad Request)} if the mematchresult is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mematchresult couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/mematchresults")
    public ResponseEntity<Mematchresult> updateMematchresult(@Valid @RequestBody Mematchresult mematchresult) throws URISyntaxException {
        log.debug("REST request to update Mematchresult : {}", mematchresult);
        if (mematchresult.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Mematchresult result = mematchresultRepository.save(mematchresult);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, mematchresult.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /mematchresults} : get all the mematchresults.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mematchresults in body.
     */
    @GetMapping("/mematchresults")
    public List<Mematchresult> getAllMematchresults() {
        log.debug("REST request to get all Mematchresults");
        return mematchresultRepository.findAll();
    }

    /**
     * {@code GET  /mematchresults/:id} : get the "id" mematchresult.
     *
     * @param id the id of the mematchresult to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mematchresult, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/mematchresults/{id}")
    public ResponseEntity<Mematchresult> getMematchresult(@PathVariable Long id) {
        log.debug("REST request to get Mematchresult : {}", id);
        Optional<Mematchresult> mematchresult = mematchresultRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(mematchresult);
    }

    /**
     * {@code DELETE  /mematchresults/:id} : delete the "id" mematchresult.
     *
     * @param id the id of the mematchresult to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/mematchresults/{id}")
    public ResponseEntity<Void> deleteMematchresult(@PathVariable Long id) {
        log.debug("REST request to delete Mematchresult : {}", id);
        mematchresultRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
