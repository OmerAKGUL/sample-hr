package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcity;
import com.mdsap.samplehr.repository.ItxcityRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcity}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcityResource {

    private final Logger log = LoggerFactory.getLogger(ItxcityResource.class);

    private static final String ENTITY_NAME = "itxcity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcityRepository itxcityRepository;

    public ItxcityResource(ItxcityRepository itxcityRepository) {
        this.itxcityRepository = itxcityRepository;
    }

    /**
     * {@code POST  /itxcities} : Create a new itxcity.
     *
     * @param itxcity the itxcity to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcity, or with status {@code 400 (Bad Request)} if the itxcity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcities")
    public ResponseEntity<Itxcity> createItxcity(@Valid @RequestBody Itxcity itxcity) throws URISyntaxException {
        log.debug("REST request to save Itxcity : {}", itxcity);
        if (itxcity.getId() != null) {
            throw new BadRequestAlertException("A new itxcity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcity result = itxcityRepository.save(itxcity);
        return ResponseEntity.created(new URI("/api/itxcities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcities} : Updates an existing itxcity.
     *
     * @param itxcity the itxcity to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcity,
     * or with status {@code 400 (Bad Request)} if the itxcity is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcity couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcities")
    public ResponseEntity<Itxcity> updateItxcity(@Valid @RequestBody Itxcity itxcity) throws URISyntaxException {
        log.debug("REST request to update Itxcity : {}", itxcity);
        if (itxcity.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcity result = itxcityRepository.save(itxcity);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcity.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcities} : get all the itxcities.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcities in body.
     */
    @GetMapping("/itxcities")
    public List<Itxcity> getAllItxcities() {
        log.debug("REST request to get all Itxcities");
        return itxcityRepository.findAll();
    }

    /**
     * {@code GET  /itxcities/:id} : get the "id" itxcity.
     *
     * @param id the id of the itxcity to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcity, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcities/{id}")
    public ResponseEntity<Itxcity> getItxcity(@PathVariable Long id) {
        log.debug("REST request to get Itxcity : {}", id);
        Optional<Itxcity> itxcity = itxcityRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcity);
    }

    /**
     * {@code DELETE  /itxcities/:id} : delete the "id" itxcity.
     *
     * @param id the id of the itxcity to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcities/{id}")
    public ResponseEntity<Void> deleteItxcity(@PathVariable Long id) {
        log.debug("REST request to delete Itxcity : {}", id);
        itxcityRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
