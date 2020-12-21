package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afdatafilter;
import com.mdsap.samplehr.repository.AfdatafilterRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afdatafilter}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfdatafilterResource {

    private final Logger log = LoggerFactory.getLogger(AfdatafilterResource.class);

    private static final String ENTITY_NAME = "afdatafilter";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfdatafilterRepository afdatafilterRepository;

    public AfdatafilterResource(AfdatafilterRepository afdatafilterRepository) {
        this.afdatafilterRepository = afdatafilterRepository;
    }

    /**
     * {@code POST  /afdatafilters} : Create a new afdatafilter.
     *
     * @param afdatafilter the afdatafilter to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afdatafilter, or with status {@code 400 (Bad Request)} if the afdatafilter has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afdatafilters")
    public ResponseEntity<Afdatafilter> createAfdatafilter(@Valid @RequestBody Afdatafilter afdatafilter) throws URISyntaxException {
        log.debug("REST request to save Afdatafilter : {}", afdatafilter);
        if (afdatafilter.getId() != null) {
            throw new BadRequestAlertException("A new afdatafilter cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afdatafilter result = afdatafilterRepository.save(afdatafilter);
        return ResponseEntity.created(new URI("/api/afdatafilters/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afdatafilters} : Updates an existing afdatafilter.
     *
     * @param afdatafilter the afdatafilter to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afdatafilter,
     * or with status {@code 400 (Bad Request)} if the afdatafilter is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afdatafilter couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afdatafilters")
    public ResponseEntity<Afdatafilter> updateAfdatafilter(@Valid @RequestBody Afdatafilter afdatafilter) throws URISyntaxException {
        log.debug("REST request to update Afdatafilter : {}", afdatafilter);
        if (afdatafilter.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afdatafilter result = afdatafilterRepository.save(afdatafilter);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afdatafilter.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afdatafilters} : get all the afdatafilters.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afdatafilters in body.
     */
    @GetMapping("/afdatafilters")
    public List<Afdatafilter> getAllAfdatafilters() {
        log.debug("REST request to get all Afdatafilters");
        return afdatafilterRepository.findAll();
    }

    /**
     * {@code GET  /afdatafilters/:id} : get the "id" afdatafilter.
     *
     * @param id the id of the afdatafilter to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afdatafilter, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afdatafilters/{id}")
    public ResponseEntity<Afdatafilter> getAfdatafilter(@PathVariable Long id) {
        log.debug("REST request to get Afdatafilter : {}", id);
        Optional<Afdatafilter> afdatafilter = afdatafilterRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afdatafilter);
    }

    /**
     * {@code DELETE  /afdatafilters/:id} : delete the "id" afdatafilter.
     *
     * @param id the id of the afdatafilter to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afdatafilters/{id}")
    public ResponseEntity<Void> deleteAfdatafilter(@PathVariable Long id) {
        log.debug("REST request to delete Afdatafilter : {}", id);
        afdatafilterRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
