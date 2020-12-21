package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxorganization;
import com.mdsap.samplehr.repository.ItxorganizationRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxorganization}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxorganizationResource {

    private final Logger log = LoggerFactory.getLogger(ItxorganizationResource.class);

    private static final String ENTITY_NAME = "itxorganization";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxorganizationRepository itxorganizationRepository;

    public ItxorganizationResource(ItxorganizationRepository itxorganizationRepository) {
        this.itxorganizationRepository = itxorganizationRepository;
    }

    /**
     * {@code POST  /itxorganizations} : Create a new itxorganization.
     *
     * @param itxorganization the itxorganization to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxorganization, or with status {@code 400 (Bad Request)} if the itxorganization has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxorganizations")
    public ResponseEntity<Itxorganization> createItxorganization(@Valid @RequestBody Itxorganization itxorganization) throws URISyntaxException {
        log.debug("REST request to save Itxorganization : {}", itxorganization);
        if (itxorganization.getId() != null) {
            throw new BadRequestAlertException("A new itxorganization cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxorganization result = itxorganizationRepository.save(itxorganization);
        return ResponseEntity.created(new URI("/api/itxorganizations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxorganizations} : Updates an existing itxorganization.
     *
     * @param itxorganization the itxorganization to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxorganization,
     * or with status {@code 400 (Bad Request)} if the itxorganization is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxorganization couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxorganizations")
    public ResponseEntity<Itxorganization> updateItxorganization(@Valid @RequestBody Itxorganization itxorganization) throws URISyntaxException {
        log.debug("REST request to update Itxorganization : {}", itxorganization);
        if (itxorganization.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxorganization result = itxorganizationRepository.save(itxorganization);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxorganization.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxorganizations} : get all the itxorganizations.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxorganizations in body.
     */
    @GetMapping("/itxorganizations")
    public List<Itxorganization> getAllItxorganizations() {
        log.debug("REST request to get all Itxorganizations");
        return itxorganizationRepository.findAll();
    }

    /**
     * {@code GET  /itxorganizations/:id} : get the "id" itxorganization.
     *
     * @param id the id of the itxorganization to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxorganization, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxorganizations/{id}")
    public ResponseEntity<Itxorganization> getItxorganization(@PathVariable Long id) {
        log.debug("REST request to get Itxorganization : {}", id);
        Optional<Itxorganization> itxorganization = itxorganizationRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxorganization);
    }

    /**
     * {@code DELETE  /itxorganizations/:id} : delete the "id" itxorganization.
     *
     * @param id the id of the itxorganization to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxorganizations/{id}")
    public ResponseEntity<Void> deleteItxorganization(@PathVariable Long id) {
        log.debug("REST request to delete Itxorganization : {}", id);
        itxorganizationRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
