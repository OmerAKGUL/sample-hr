package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcurrency;
import com.mdsap.samplehr.repository.ItxcurrencyRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcurrency}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcurrencyResource {

    private final Logger log = LoggerFactory.getLogger(ItxcurrencyResource.class);

    private static final String ENTITY_NAME = "itxcurrency";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcurrencyRepository itxcurrencyRepository;

    public ItxcurrencyResource(ItxcurrencyRepository itxcurrencyRepository) {
        this.itxcurrencyRepository = itxcurrencyRepository;
    }

    /**
     * {@code POST  /itxcurrencies} : Create a new itxcurrency.
     *
     * @param itxcurrency the itxcurrency to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcurrency, or with status {@code 400 (Bad Request)} if the itxcurrency has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcurrencies")
    public ResponseEntity<Itxcurrency> createItxcurrency(@Valid @RequestBody Itxcurrency itxcurrency) throws URISyntaxException {
        log.debug("REST request to save Itxcurrency : {}", itxcurrency);
        if (itxcurrency.getId() != null) {
            throw new BadRequestAlertException("A new itxcurrency cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcurrency result = itxcurrencyRepository.save(itxcurrency);
        return ResponseEntity.created(new URI("/api/itxcurrencies/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcurrencies} : Updates an existing itxcurrency.
     *
     * @param itxcurrency the itxcurrency to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcurrency,
     * or with status {@code 400 (Bad Request)} if the itxcurrency is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcurrency couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcurrencies")
    public ResponseEntity<Itxcurrency> updateItxcurrency(@Valid @RequestBody Itxcurrency itxcurrency) throws URISyntaxException {
        log.debug("REST request to update Itxcurrency : {}", itxcurrency);
        if (itxcurrency.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcurrency result = itxcurrencyRepository.save(itxcurrency);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcurrency.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcurrencies} : get all the itxcurrencies.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcurrencies in body.
     */
    @GetMapping("/itxcurrencies")
    public List<Itxcurrency> getAllItxcurrencies() {
        log.debug("REST request to get all Itxcurrencies");
        return itxcurrencyRepository.findAll();
    }

    /**
     * {@code GET  /itxcurrencies/:id} : get the "id" itxcurrency.
     *
     * @param id the id of the itxcurrency to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcurrency, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcurrencies/{id}")
    public ResponseEntity<Itxcurrency> getItxcurrency(@PathVariable Long id) {
        log.debug("REST request to get Itxcurrency : {}", id);
        Optional<Itxcurrency> itxcurrency = itxcurrencyRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcurrency);
    }

    /**
     * {@code DELETE  /itxcurrencies/:id} : delete the "id" itxcurrency.
     *
     * @param id the id of the itxcurrency to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcurrencies/{id}")
    public ResponseEntity<Void> deleteItxcurrency(@PathVariable Long id) {
        log.debug("REST request to delete Itxcurrency : {}", id);
        itxcurrencyRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
