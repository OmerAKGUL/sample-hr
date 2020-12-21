package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afparamval;
import com.mdsap.samplehr.repository.AfparamvalRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afparamval}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfparamvalResource {

    private final Logger log = LoggerFactory.getLogger(AfparamvalResource.class);

    private static final String ENTITY_NAME = "afparamval";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfparamvalRepository afparamvalRepository;

    public AfparamvalResource(AfparamvalRepository afparamvalRepository) {
        this.afparamvalRepository = afparamvalRepository;
    }

    /**
     * {@code POST  /afparamvals} : Create a new afparamval.
     *
     * @param afparamval the afparamval to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afparamval, or with status {@code 400 (Bad Request)} if the afparamval has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afparamvals")
    public ResponseEntity<Afparamval> createAfparamval(@Valid @RequestBody Afparamval afparamval) throws URISyntaxException {
        log.debug("REST request to save Afparamval : {}", afparamval);
        if (afparamval.getId() != null) {
            throw new BadRequestAlertException("A new afparamval cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afparamval result = afparamvalRepository.save(afparamval);
        return ResponseEntity.created(new URI("/api/afparamvals/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afparamvals} : Updates an existing afparamval.
     *
     * @param afparamval the afparamval to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afparamval,
     * or with status {@code 400 (Bad Request)} if the afparamval is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afparamval couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afparamvals")
    public ResponseEntity<Afparamval> updateAfparamval(@Valid @RequestBody Afparamval afparamval) throws URISyntaxException {
        log.debug("REST request to update Afparamval : {}", afparamval);
        if (afparamval.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afparamval result = afparamvalRepository.save(afparamval);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afparamval.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afparamvals} : get all the afparamvals.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afparamvals in body.
     */
    @GetMapping("/afparamvals")
    public List<Afparamval> getAllAfparamvals() {
        log.debug("REST request to get all Afparamvals");
        return afparamvalRepository.findAll();
    }

    /**
     * {@code GET  /afparamvals/:id} : get the "id" afparamval.
     *
     * @param id the id of the afparamval to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afparamval, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afparamvals/{id}")
    public ResponseEntity<Afparamval> getAfparamval(@PathVariable Long id) {
        log.debug("REST request to get Afparamval : {}", id);
        Optional<Afparamval> afparamval = afparamvalRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afparamval);
    }

    /**
     * {@code DELETE  /afparamvals/:id} : delete the "id" afparamval.
     *
     * @param id the id of the afparamval to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afparamvals/{id}")
    public ResponseEntity<Void> deleteAfparamval(@PathVariable Long id) {
        log.debug("REST request to delete Afparamval : {}", id);
        afparamvalRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
