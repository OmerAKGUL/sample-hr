package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afmenuchild;
import com.mdsap.samplehr.repository.AfmenuchildRepository;
import com.mdsap.samplehr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afmenuchild}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfmenuchildResource {

    private final Logger log = LoggerFactory.getLogger(AfmenuchildResource.class);

    private static final String ENTITY_NAME = "afmenuchild";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfmenuchildRepository afmenuchildRepository;

    public AfmenuchildResource(AfmenuchildRepository afmenuchildRepository) {
        this.afmenuchildRepository = afmenuchildRepository;
    }

    /**
     * {@code POST  /afmenuchildren} : Create a new afmenuchild.
     *
     * @param afmenuchild the afmenuchild to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afmenuchild, or with status {@code 400 (Bad Request)} if the afmenuchild has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afmenuchildren")
    public ResponseEntity<Afmenuchild> createAfmenuchild(@RequestBody Afmenuchild afmenuchild) throws URISyntaxException {
        log.debug("REST request to save Afmenuchild : {}", afmenuchild);
        if (afmenuchild.getId() != null) {
            throw new BadRequestAlertException("A new afmenuchild cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afmenuchild result = afmenuchildRepository.save(afmenuchild);
        return ResponseEntity.created(new URI("/api/afmenuchildren/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afmenuchildren} : Updates an existing afmenuchild.
     *
     * @param afmenuchild the afmenuchild to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afmenuchild,
     * or with status {@code 400 (Bad Request)} if the afmenuchild is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afmenuchild couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afmenuchildren")
    public ResponseEntity<Afmenuchild> updateAfmenuchild(@RequestBody Afmenuchild afmenuchild) throws URISyntaxException {
        log.debug("REST request to update Afmenuchild : {}", afmenuchild);
        if (afmenuchild.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afmenuchild result = afmenuchildRepository.save(afmenuchild);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afmenuchild.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afmenuchildren} : get all the afmenuchildren.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afmenuchildren in body.
     */
    @GetMapping("/afmenuchildren")
    public List<Afmenuchild> getAllAfmenuchildren() {
        log.debug("REST request to get all Afmenuchildren");
        return afmenuchildRepository.findAll();
    }

    /**
     * {@code GET  /afmenuchildren/:id} : get the "id" afmenuchild.
     *
     * @param id the id of the afmenuchild to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afmenuchild, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afmenuchildren/{id}")
    public ResponseEntity<Afmenuchild> getAfmenuchild(@PathVariable Long id) {
        log.debug("REST request to get Afmenuchild : {}", id);
        Optional<Afmenuchild> afmenuchild = afmenuchildRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afmenuchild);
    }

    /**
     * {@code DELETE  /afmenuchildren/:id} : delete the "id" afmenuchild.
     *
     * @param id the id of the afmenuchild to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afmenuchildren/{id}")
    public ResponseEntity<Void> deleteAfmenuchild(@PathVariable Long id) {
        log.debug("REST request to delete Afmenuchild : {}", id);
        afmenuchildRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
