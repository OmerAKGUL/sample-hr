package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsauthorization;
import com.mdsap.samplehr.repository.AfsauthorizationRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsauthorization}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsauthorizationResource {

    private final Logger log = LoggerFactory.getLogger(AfsauthorizationResource.class);

    private static final String ENTITY_NAME = "afsauthorization";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsauthorizationRepository afsauthorizationRepository;

    public AfsauthorizationResource(AfsauthorizationRepository afsauthorizationRepository) {
        this.afsauthorizationRepository = afsauthorizationRepository;
    }

    /**
     * {@code POST  /afsauthorizations} : Create a new afsauthorization.
     *
     * @param afsauthorization the afsauthorization to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsauthorization, or with status {@code 400 (Bad Request)} if the afsauthorization has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsauthorizations")
    public ResponseEntity<Afsauthorization> createAfsauthorization(@Valid @RequestBody Afsauthorization afsauthorization) throws URISyntaxException {
        log.debug("REST request to save Afsauthorization : {}", afsauthorization);
        if (afsauthorization.getId() != null) {
            throw new BadRequestAlertException("A new afsauthorization cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsauthorization result = afsauthorizationRepository.save(afsauthorization);
        return ResponseEntity.created(new URI("/api/afsauthorizations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsauthorizations} : Updates an existing afsauthorization.
     *
     * @param afsauthorization the afsauthorization to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsauthorization,
     * or with status {@code 400 (Bad Request)} if the afsauthorization is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsauthorization couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsauthorizations")
    public ResponseEntity<Afsauthorization> updateAfsauthorization(@Valid @RequestBody Afsauthorization afsauthorization) throws URISyntaxException {
        log.debug("REST request to update Afsauthorization : {}", afsauthorization);
        if (afsauthorization.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsauthorization result = afsauthorizationRepository.save(afsauthorization);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsauthorization.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsauthorizations} : get all the afsauthorizations.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsauthorizations in body.
     */
    @GetMapping("/afsauthorizations")
    public List<Afsauthorization> getAllAfsauthorizations() {
        log.debug("REST request to get all Afsauthorizations");
        return afsauthorizationRepository.findAll();
    }

    /**
     * {@code GET  /afsauthorizations/:id} : get the "id" afsauthorization.
     *
     * @param id the id of the afsauthorization to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsauthorization, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsauthorizations/{id}")
    public ResponseEntity<Afsauthorization> getAfsauthorization(@PathVariable Long id) {
        log.debug("REST request to get Afsauthorization : {}", id);
        Optional<Afsauthorization> afsauthorization = afsauthorizationRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsauthorization);
    }

    /**
     * {@code DELETE  /afsauthorizations/:id} : delete the "id" afsauthorization.
     *
     * @param id the id of the afsauthorization to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsauthorizations/{id}")
    public ResponseEntity<Void> deleteAfsauthorization(@PathVariable Long id) {
        log.debug("REST request to delete Afsauthorization : {}", id);
        afsauthorizationRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
