package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcountry;
import com.mdsap.samplehr.repository.ItxcountryRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcountry}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcountryResource {

    private final Logger log = LoggerFactory.getLogger(ItxcountryResource.class);

    private static final String ENTITY_NAME = "itxcountry";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcountryRepository itxcountryRepository;

    public ItxcountryResource(ItxcountryRepository itxcountryRepository) {
        this.itxcountryRepository = itxcountryRepository;
    }

    /**
     * {@code POST  /itxcountries} : Create a new itxcountry.
     *
     * @param itxcountry the itxcountry to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcountry, or with status {@code 400 (Bad Request)} if the itxcountry has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcountries")
    public ResponseEntity<Itxcountry> createItxcountry(@Valid @RequestBody Itxcountry itxcountry) throws URISyntaxException {
        log.debug("REST request to save Itxcountry : {}", itxcountry);
        if (itxcountry.getId() != null) {
            throw new BadRequestAlertException("A new itxcountry cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcountry result = itxcountryRepository.save(itxcountry);
        return ResponseEntity.created(new URI("/api/itxcountries/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcountries} : Updates an existing itxcountry.
     *
     * @param itxcountry the itxcountry to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcountry,
     * or with status {@code 400 (Bad Request)} if the itxcountry is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcountry couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcountries")
    public ResponseEntity<Itxcountry> updateItxcountry(@Valid @RequestBody Itxcountry itxcountry) throws URISyntaxException {
        log.debug("REST request to update Itxcountry : {}", itxcountry);
        if (itxcountry.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcountry result = itxcountryRepository.save(itxcountry);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcountry.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcountries} : get all the itxcountries.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcountries in body.
     */
    @GetMapping("/itxcountries")
    public List<Itxcountry> getAllItxcountries() {
        log.debug("REST request to get all Itxcountries");
        return itxcountryRepository.findAll();
    }

    /**
     * {@code GET  /itxcountries/:id} : get the "id" itxcountry.
     *
     * @param id the id of the itxcountry to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcountry, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcountries/{id}")
    public ResponseEntity<Itxcountry> getItxcountry(@PathVariable Long id) {
        log.debug("REST request to get Itxcountry : {}", id);
        Optional<Itxcountry> itxcountry = itxcountryRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcountry);
    }

    /**
     * {@code DELETE  /itxcountries/:id} : delete the "id" itxcountry.
     *
     * @param id the id of the itxcountry to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcountries/{id}")
    public ResponseEntity<Void> deleteItxcountry(@PathVariable Long id) {
        log.debug("REST request to delete Itxcountry : {}", id);
        itxcountryRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
