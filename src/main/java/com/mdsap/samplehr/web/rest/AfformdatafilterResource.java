package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afformdatafilter;
import com.mdsap.samplehr.repository.AfformdatafilterRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afformdatafilter}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfformdatafilterResource {

    private final Logger log = LoggerFactory.getLogger(AfformdatafilterResource.class);

    private static final String ENTITY_NAME = "afformdatafilter";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfformdatafilterRepository afformdatafilterRepository;

    public AfformdatafilterResource(AfformdatafilterRepository afformdatafilterRepository) {
        this.afformdatafilterRepository = afformdatafilterRepository;
    }

    /**
     * {@code POST  /afformdatafilters} : Create a new afformdatafilter.
     *
     * @param afformdatafilter the afformdatafilter to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afformdatafilter, or with status {@code 400 (Bad Request)} if the afformdatafilter has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afformdatafilters")
    public ResponseEntity<Afformdatafilter> createAfformdatafilter(@RequestBody Afformdatafilter afformdatafilter) throws URISyntaxException {
        log.debug("REST request to save Afformdatafilter : {}", afformdatafilter);
        if (afformdatafilter.getId() != null) {
            throw new BadRequestAlertException("A new afformdatafilter cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afformdatafilter result = afformdatafilterRepository.save(afformdatafilter);
        return ResponseEntity.created(new URI("/api/afformdatafilters/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afformdatafilters} : Updates an existing afformdatafilter.
     *
     * @param afformdatafilter the afformdatafilter to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afformdatafilter,
     * or with status {@code 400 (Bad Request)} if the afformdatafilter is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afformdatafilter couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afformdatafilters")
    public ResponseEntity<Afformdatafilter> updateAfformdatafilter(@RequestBody Afformdatafilter afformdatafilter) throws URISyntaxException {
        log.debug("REST request to update Afformdatafilter : {}", afformdatafilter);
        if (afformdatafilter.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afformdatafilter result = afformdatafilterRepository.save(afformdatafilter);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afformdatafilter.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afformdatafilters} : get all the afformdatafilters.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afformdatafilters in body.
     */
    @GetMapping("/afformdatafilters")
    public List<Afformdatafilter> getAllAfformdatafilters() {
        log.debug("REST request to get all Afformdatafilters");
        return afformdatafilterRepository.findAll();
    }

    /**
     * {@code GET  /afformdatafilters/:id} : get the "id" afformdatafilter.
     *
     * @param id the id of the afformdatafilter to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afformdatafilter, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afformdatafilters/{id}")
    public ResponseEntity<Afformdatafilter> getAfformdatafilter(@PathVariable Long id) {
        log.debug("REST request to get Afformdatafilter : {}", id);
        Optional<Afformdatafilter> afformdatafilter = afformdatafilterRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afformdatafilter);
    }

    /**
     * {@code DELETE  /afformdatafilters/:id} : delete the "id" afformdatafilter.
     *
     * @param id the id of the afformdatafilter to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afformdatafilters/{id}")
    public ResponseEntity<Void> deleteAfformdatafilter(@PathVariable Long id) {
        log.debug("REST request to delete Afformdatafilter : {}", id);
        afformdatafilterRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
