package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Meinvestprofile;
import com.mdsap.samplehr.repository.MeinvestprofileRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Meinvestprofile}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MeinvestprofileResource {

    private final Logger log = LoggerFactory.getLogger(MeinvestprofileResource.class);

    private static final String ENTITY_NAME = "meinvestprofile";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MeinvestprofileRepository meinvestprofileRepository;

    public MeinvestprofileResource(MeinvestprofileRepository meinvestprofileRepository) {
        this.meinvestprofileRepository = meinvestprofileRepository;
    }

    /**
     * {@code POST  /meinvestprofiles} : Create a new meinvestprofile.
     *
     * @param meinvestprofile the meinvestprofile to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new meinvestprofile, or with status {@code 400 (Bad Request)} if the meinvestprofile has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/meinvestprofiles")
    public ResponseEntity<Meinvestprofile> createMeinvestprofile(@RequestBody Meinvestprofile meinvestprofile) throws URISyntaxException {
        log.debug("REST request to save Meinvestprofile : {}", meinvestprofile);
        if (meinvestprofile.getId() != null) {
            throw new BadRequestAlertException("A new meinvestprofile cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Meinvestprofile result = meinvestprofileRepository.save(meinvestprofile);
        return ResponseEntity.created(new URI("/api/meinvestprofiles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /meinvestprofiles} : Updates an existing meinvestprofile.
     *
     * @param meinvestprofile the meinvestprofile to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated meinvestprofile,
     * or with status {@code 400 (Bad Request)} if the meinvestprofile is not valid,
     * or with status {@code 500 (Internal Server Error)} if the meinvestprofile couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/meinvestprofiles")
    public ResponseEntity<Meinvestprofile> updateMeinvestprofile(@RequestBody Meinvestprofile meinvestprofile) throws URISyntaxException {
        log.debug("REST request to update Meinvestprofile : {}", meinvestprofile);
        if (meinvestprofile.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Meinvestprofile result = meinvestprofileRepository.save(meinvestprofile);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, meinvestprofile.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /meinvestprofiles} : get all the meinvestprofiles.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of meinvestprofiles in body.
     */
    @GetMapping("/meinvestprofiles")
    public List<Meinvestprofile> getAllMeinvestprofiles() {
        log.debug("REST request to get all Meinvestprofiles");
        return meinvestprofileRepository.findAll();
    }

    /**
     * {@code GET  /meinvestprofiles/:id} : get the "id" meinvestprofile.
     *
     * @param id the id of the meinvestprofile to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the meinvestprofile, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/meinvestprofiles/{id}")
    public ResponseEntity<Meinvestprofile> getMeinvestprofile(@PathVariable Long id) {
        log.debug("REST request to get Meinvestprofile : {}", id);
        Optional<Meinvestprofile> meinvestprofile = meinvestprofileRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(meinvestprofile);
    }

    /**
     * {@code DELETE  /meinvestprofiles/:id} : delete the "id" meinvestprofile.
     *
     * @param id the id of the meinvestprofile to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/meinvestprofiles/{id}")
    public ResponseEntity<Void> deleteMeinvestprofile(@PathVariable Long id) {
        log.debug("REST request to delete Meinvestprofile : {}", id);
        meinvestprofileRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
