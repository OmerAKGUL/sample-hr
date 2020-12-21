package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afform;
import com.mdsap.samplehr.repository.AfformRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afform}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfformResource {

    private final Logger log = LoggerFactory.getLogger(AfformResource.class);

    private static final String ENTITY_NAME = "afform";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfformRepository afformRepository;

    public AfformResource(AfformRepository afformRepository) {
        this.afformRepository = afformRepository;
    }

    /**
     * {@code POST  /afforms} : Create a new afform.
     *
     * @param afform the afform to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afform, or with status {@code 400 (Bad Request)} if the afform has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afforms")
    public ResponseEntity<Afform> createAfform(@Valid @RequestBody Afform afform) throws URISyntaxException {
        log.debug("REST request to save Afform : {}", afform);
        if (afform.getId() != null) {
            throw new BadRequestAlertException("A new afform cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afform result = afformRepository.save(afform);
        return ResponseEntity.created(new URI("/api/afforms/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afforms} : Updates an existing afform.
     *
     * @param afform the afform to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afform,
     * or with status {@code 400 (Bad Request)} if the afform is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afform couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afforms")
    public ResponseEntity<Afform> updateAfform(@Valid @RequestBody Afform afform) throws URISyntaxException {
        log.debug("REST request to update Afform : {}", afform);
        if (afform.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afform result = afformRepository.save(afform);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afform.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afforms} : get all the afforms.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afforms in body.
     */
    @GetMapping("/afforms")
    public List<Afform> getAllAfforms() {
        log.debug("REST request to get all Afforms");
        return afformRepository.findAll();
    }

    /**
     * {@code GET  /afforms/:id} : get the "id" afform.
     *
     * @param id the id of the afform to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afform, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afforms/{id}")
    public ResponseEntity<Afform> getAfform(@PathVariable Long id) {
        log.debug("REST request to get Afform : {}", id);
        Optional<Afform> afform = afformRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afform);
    }

    /**
     * {@code DELETE  /afforms/:id} : delete the "id" afform.
     *
     * @param id the id of the afform to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afforms/{id}")
    public ResponseEntity<Void> deleteAfform(@PathVariable Long id) {
        log.debug("REST request to delete Afform : {}", id);
        afformRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
