package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsystem;
import com.mdsap.samplehr.repository.AfsystemRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsystem}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsystemResource {

    private final Logger log = LoggerFactory.getLogger(AfsystemResource.class);

    private static final String ENTITY_NAME = "afsystem";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsystemRepository afsystemRepository;

    public AfsystemResource(AfsystemRepository afsystemRepository) {
        this.afsystemRepository = afsystemRepository;
    }

    /**
     * {@code POST  /afsystems} : Create a new afsystem.
     *
     * @param afsystem the afsystem to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsystem, or with status {@code 400 (Bad Request)} if the afsystem has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsystems")
    public ResponseEntity<Afsystem> createAfsystem(@Valid @RequestBody Afsystem afsystem) throws URISyntaxException {
        log.debug("REST request to save Afsystem : {}", afsystem);
        if (afsystem.getId() != null) {
            throw new BadRequestAlertException("A new afsystem cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsystem result = afsystemRepository.save(afsystem);
        return ResponseEntity.created(new URI("/api/afsystems/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsystems} : Updates an existing afsystem.
     *
     * @param afsystem the afsystem to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsystem,
     * or with status {@code 400 (Bad Request)} if the afsystem is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsystem couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsystems")
    public ResponseEntity<Afsystem> updateAfsystem(@Valid @RequestBody Afsystem afsystem) throws URISyntaxException {
        log.debug("REST request to update Afsystem : {}", afsystem);
        if (afsystem.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsystem result = afsystemRepository.save(afsystem);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsystem.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsystems} : get all the afsystems.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsystems in body.
     */
    @GetMapping("/afsystems")
    public List<Afsystem> getAllAfsystems() {
        log.debug("REST request to get all Afsystems");
        return afsystemRepository.findAll();
    }

    /**
     * {@code GET  /afsystems/:id} : get the "id" afsystem.
     *
     * @param id the id of the afsystem to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsystem, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsystems/{id}")
    public ResponseEntity<Afsystem> getAfsystem(@PathVariable Long id) {
        log.debug("REST request to get Afsystem : {}", id);
        Optional<Afsystem> afsystem = afsystemRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsystem);
    }

    /**
     * {@code DELETE  /afsystems/:id} : delete the "id" afsystem.
     *
     * @param id the id of the afsystem to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsystems/{id}")
    public ResponseEntity<Void> deleteAfsystem(@PathVariable Long id) {
        log.debug("REST request to delete Afsystem : {}", id);
        afsystemRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
