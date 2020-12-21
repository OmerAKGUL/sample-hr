package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afetljobtype;
import com.mdsap.samplehr.repository.AfetljobtypeRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afetljobtype}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfetljobtypeResource {

    private final Logger log = LoggerFactory.getLogger(AfetljobtypeResource.class);

    private static final String ENTITY_NAME = "afetljobtype";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfetljobtypeRepository afetljobtypeRepository;

    public AfetljobtypeResource(AfetljobtypeRepository afetljobtypeRepository) {
        this.afetljobtypeRepository = afetljobtypeRepository;
    }

    /**
     * {@code POST  /afetljobtypes} : Create a new afetljobtype.
     *
     * @param afetljobtype the afetljobtype to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afetljobtype, or with status {@code 400 (Bad Request)} if the afetljobtype has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afetljobtypes")
    public ResponseEntity<Afetljobtype> createAfetljobtype(@Valid @RequestBody Afetljobtype afetljobtype) throws URISyntaxException {
        log.debug("REST request to save Afetljobtype : {}", afetljobtype);
        if (afetljobtype.getId() != null) {
            throw new BadRequestAlertException("A new afetljobtype cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afetljobtype result = afetljobtypeRepository.save(afetljobtype);
        return ResponseEntity.created(new URI("/api/afetljobtypes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afetljobtypes} : Updates an existing afetljobtype.
     *
     * @param afetljobtype the afetljobtype to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afetljobtype,
     * or with status {@code 400 (Bad Request)} if the afetljobtype is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afetljobtype couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afetljobtypes")
    public ResponseEntity<Afetljobtype> updateAfetljobtype(@Valid @RequestBody Afetljobtype afetljobtype) throws URISyntaxException {
        log.debug("REST request to update Afetljobtype : {}", afetljobtype);
        if (afetljobtype.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afetljobtype result = afetljobtypeRepository.save(afetljobtype);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afetljobtype.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afetljobtypes} : get all the afetljobtypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afetljobtypes in body.
     */
    @GetMapping("/afetljobtypes")
    public List<Afetljobtype> getAllAfetljobtypes() {
        log.debug("REST request to get all Afetljobtypes");
        return afetljobtypeRepository.findAll();
    }

    /**
     * {@code GET  /afetljobtypes/:id} : get the "id" afetljobtype.
     *
     * @param id the id of the afetljobtype to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afetljobtype, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afetljobtypes/{id}")
    public ResponseEntity<Afetljobtype> getAfetljobtype(@PathVariable Long id) {
        log.debug("REST request to get Afetljobtype : {}", id);
        Optional<Afetljobtype> afetljobtype = afetljobtypeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afetljobtype);
    }

    /**
     * {@code DELETE  /afetljobtypes/:id} : delete the "id" afetljobtype.
     *
     * @param id the id of the afetljobtype to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afetljobtypes/{id}")
    public ResponseEntity<Void> deleteAfetljobtype(@PathVariable Long id) {
        log.debug("REST request to delete Afetljobtype : {}", id);
        afetljobtypeRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
