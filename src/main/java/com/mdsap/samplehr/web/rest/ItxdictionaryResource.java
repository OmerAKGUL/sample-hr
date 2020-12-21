package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxdictionary;
import com.mdsap.samplehr.repository.ItxdictionaryRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxdictionary}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxdictionaryResource {

    private final Logger log = LoggerFactory.getLogger(ItxdictionaryResource.class);

    private static final String ENTITY_NAME = "itxdictionary";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxdictionaryRepository itxdictionaryRepository;

    public ItxdictionaryResource(ItxdictionaryRepository itxdictionaryRepository) {
        this.itxdictionaryRepository = itxdictionaryRepository;
    }

    /**
     * {@code POST  /itxdictionaries} : Create a new itxdictionary.
     *
     * @param itxdictionary the itxdictionary to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxdictionary, or with status {@code 400 (Bad Request)} if the itxdictionary has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxdictionaries")
    public ResponseEntity<Itxdictionary> createItxdictionary(@Valid @RequestBody Itxdictionary itxdictionary) throws URISyntaxException {
        log.debug("REST request to save Itxdictionary : {}", itxdictionary);
        if (itxdictionary.getId() != null) {
            throw new BadRequestAlertException("A new itxdictionary cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxdictionary result = itxdictionaryRepository.save(itxdictionary);
        return ResponseEntity.created(new URI("/api/itxdictionaries/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxdictionaries} : Updates an existing itxdictionary.
     *
     * @param itxdictionary the itxdictionary to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxdictionary,
     * or with status {@code 400 (Bad Request)} if the itxdictionary is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxdictionary couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxdictionaries")
    public ResponseEntity<Itxdictionary> updateItxdictionary(@Valid @RequestBody Itxdictionary itxdictionary) throws URISyntaxException {
        log.debug("REST request to update Itxdictionary : {}", itxdictionary);
        if (itxdictionary.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxdictionary result = itxdictionaryRepository.save(itxdictionary);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxdictionary.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxdictionaries} : get all the itxdictionaries.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxdictionaries in body.
     */
    @GetMapping("/itxdictionaries")
    public List<Itxdictionary> getAllItxdictionaries() {
        log.debug("REST request to get all Itxdictionaries");
        return itxdictionaryRepository.findAll();
    }

    /**
     * {@code GET  /itxdictionaries/:id} : get the "id" itxdictionary.
     *
     * @param id the id of the itxdictionary to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxdictionary, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxdictionaries/{id}")
    public ResponseEntity<Itxdictionary> getItxdictionary(@PathVariable Long id) {
        log.debug("REST request to get Itxdictionary : {}", id);
        Optional<Itxdictionary> itxdictionary = itxdictionaryRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxdictionary);
    }

    /**
     * {@code DELETE  /itxdictionaries/:id} : delete the "id" itxdictionary.
     *
     * @param id the id of the itxdictionary to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxdictionaries/{id}")
    public ResponseEntity<Void> deleteItxdictionary(@PathVariable Long id) {
        log.debug("REST request to delete Itxdictionary : {}", id);
        itxdictionaryRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
