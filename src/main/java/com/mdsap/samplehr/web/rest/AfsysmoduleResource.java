package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsysmodule;
import com.mdsap.samplehr.repository.AfsysmoduleRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsysmodule}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsysmoduleResource {

    private final Logger log = LoggerFactory.getLogger(AfsysmoduleResource.class);

    private static final String ENTITY_NAME = "afsysmodule";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsysmoduleRepository afsysmoduleRepository;

    public AfsysmoduleResource(AfsysmoduleRepository afsysmoduleRepository) {
        this.afsysmoduleRepository = afsysmoduleRepository;
    }

    /**
     * {@code POST  /afsysmodules} : Create a new afsysmodule.
     *
     * @param afsysmodule the afsysmodule to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsysmodule, or with status {@code 400 (Bad Request)} if the afsysmodule has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsysmodules")
    public ResponseEntity<Afsysmodule> createAfsysmodule(@Valid @RequestBody Afsysmodule afsysmodule) throws URISyntaxException {
        log.debug("REST request to save Afsysmodule : {}", afsysmodule);
        if (afsysmodule.getId() != null) {
            throw new BadRequestAlertException("A new afsysmodule cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsysmodule result = afsysmoduleRepository.save(afsysmodule);
        return ResponseEntity.created(new URI("/api/afsysmodules/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsysmodules} : Updates an existing afsysmodule.
     *
     * @param afsysmodule the afsysmodule to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsysmodule,
     * or with status {@code 400 (Bad Request)} if the afsysmodule is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsysmodule couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsysmodules")
    public ResponseEntity<Afsysmodule> updateAfsysmodule(@Valid @RequestBody Afsysmodule afsysmodule) throws URISyntaxException {
        log.debug("REST request to update Afsysmodule : {}", afsysmodule);
        if (afsysmodule.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsysmodule result = afsysmoduleRepository.save(afsysmodule);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsysmodule.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsysmodules} : get all the afsysmodules.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsysmodules in body.
     */
    @GetMapping("/afsysmodules")
    public List<Afsysmodule> getAllAfsysmodules() {
        log.debug("REST request to get all Afsysmodules");
        return afsysmoduleRepository.findAll();
    }

    /**
     * {@code GET  /afsysmodules/:id} : get the "id" afsysmodule.
     *
     * @param id the id of the afsysmodule to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsysmodule, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsysmodules/{id}")
    public ResponseEntity<Afsysmodule> getAfsysmodule(@PathVariable Long id) {
        log.debug("REST request to get Afsysmodule : {}", id);
        Optional<Afsysmodule> afsysmodule = afsysmoduleRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsysmodule);
    }

    /**
     * {@code DELETE  /afsysmodules/:id} : delete the "id" afsysmodule.
     *
     * @param id the id of the afsysmodule to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsysmodules/{id}")
    public ResponseEntity<Void> deleteAfsysmodule(@PathVariable Long id) {
        log.debug("REST request to delete Afsysmodule : {}", id);
        afsysmoduleRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
