package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxorgbranch;
import com.mdsap.samplehr.repository.ItxorgbranchRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxorgbranch}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxorgbranchResource {

    private final Logger log = LoggerFactory.getLogger(ItxorgbranchResource.class);

    private static final String ENTITY_NAME = "itxorgbranch";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxorgbranchRepository itxorgbranchRepository;

    public ItxorgbranchResource(ItxorgbranchRepository itxorgbranchRepository) {
        this.itxorgbranchRepository = itxorgbranchRepository;
    }

    /**
     * {@code POST  /itxorgbranches} : Create a new itxorgbranch.
     *
     * @param itxorgbranch the itxorgbranch to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxorgbranch, or with status {@code 400 (Bad Request)} if the itxorgbranch has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxorgbranches")
    public ResponseEntity<Itxorgbranch> createItxorgbranch(@Valid @RequestBody Itxorgbranch itxorgbranch) throws URISyntaxException {
        log.debug("REST request to save Itxorgbranch : {}", itxorgbranch);
        if (itxorgbranch.getId() != null) {
            throw new BadRequestAlertException("A new itxorgbranch cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxorgbranch result = itxorgbranchRepository.save(itxorgbranch);
        return ResponseEntity.created(new URI("/api/itxorgbranches/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxorgbranches} : Updates an existing itxorgbranch.
     *
     * @param itxorgbranch the itxorgbranch to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxorgbranch,
     * or with status {@code 400 (Bad Request)} if the itxorgbranch is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxorgbranch couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxorgbranches")
    public ResponseEntity<Itxorgbranch> updateItxorgbranch(@Valid @RequestBody Itxorgbranch itxorgbranch) throws URISyntaxException {
        log.debug("REST request to update Itxorgbranch : {}", itxorgbranch);
        if (itxorgbranch.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxorgbranch result = itxorgbranchRepository.save(itxorgbranch);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxorgbranch.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxorgbranches} : get all the itxorgbranches.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxorgbranches in body.
     */
    @GetMapping("/itxorgbranches")
    public List<Itxorgbranch> getAllItxorgbranches() {
        log.debug("REST request to get all Itxorgbranches");
        return itxorgbranchRepository.findAll();
    }

    /**
     * {@code GET  /itxorgbranches/:id} : get the "id" itxorgbranch.
     *
     * @param id the id of the itxorgbranch to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxorgbranch, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxorgbranches/{id}")
    public ResponseEntity<Itxorgbranch> getItxorgbranch(@PathVariable Long id) {
        log.debug("REST request to get Itxorgbranch : {}", id);
        Optional<Itxorgbranch> itxorgbranch = itxorgbranchRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxorgbranch);
    }

    /**
     * {@code DELETE  /itxorgbranches/:id} : delete the "id" itxorgbranch.
     *
     * @param id the id of the itxorgbranch to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxorgbranches/{id}")
    public ResponseEntity<Void> deleteItxorgbranch(@PathVariable Long id) {
        log.debug("REST request to delete Itxorgbranch : {}", id);
        itxorgbranchRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
