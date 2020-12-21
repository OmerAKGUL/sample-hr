package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Meinvestproc;
import com.mdsap.samplehr.repository.MeinvestprocRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Meinvestproc}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MeinvestprocResource {

    private final Logger log = LoggerFactory.getLogger(MeinvestprocResource.class);

    private static final String ENTITY_NAME = "meinvestproc";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MeinvestprocRepository meinvestprocRepository;

    public MeinvestprocResource(MeinvestprocRepository meinvestprocRepository) {
        this.meinvestprocRepository = meinvestprocRepository;
    }

    /**
     * {@code POST  /meinvestprocs} : Create a new meinvestproc.
     *
     * @param meinvestproc the meinvestproc to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new meinvestproc, or with status {@code 400 (Bad Request)} if the meinvestproc has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/meinvestprocs")
    public ResponseEntity<Meinvestproc> createMeinvestproc(@RequestBody Meinvestproc meinvestproc) throws URISyntaxException {
        log.debug("REST request to save Meinvestproc : {}", meinvestproc);
        if (meinvestproc.getId() != null) {
            throw new BadRequestAlertException("A new meinvestproc cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Meinvestproc result = meinvestprocRepository.save(meinvestproc);
        return ResponseEntity.created(new URI("/api/meinvestprocs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /meinvestprocs} : Updates an existing meinvestproc.
     *
     * @param meinvestproc the meinvestproc to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated meinvestproc,
     * or with status {@code 400 (Bad Request)} if the meinvestproc is not valid,
     * or with status {@code 500 (Internal Server Error)} if the meinvestproc couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/meinvestprocs")
    public ResponseEntity<Meinvestproc> updateMeinvestproc(@RequestBody Meinvestproc meinvestproc) throws URISyntaxException {
        log.debug("REST request to update Meinvestproc : {}", meinvestproc);
        if (meinvestproc.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Meinvestproc result = meinvestprocRepository.save(meinvestproc);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, meinvestproc.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /meinvestprocs} : get all the meinvestprocs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of meinvestprocs in body.
     */
    @GetMapping("/meinvestprocs")
    public List<Meinvestproc> getAllMeinvestprocs() {
        log.debug("REST request to get all Meinvestprocs");
        return meinvestprocRepository.findAll();
    }

    /**
     * {@code GET  /meinvestprocs/:id} : get the "id" meinvestproc.
     *
     * @param id the id of the meinvestproc to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the meinvestproc, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/meinvestprocs/{id}")
    public ResponseEntity<Meinvestproc> getMeinvestproc(@PathVariable Long id) {
        log.debug("REST request to get Meinvestproc : {}", id);
        Optional<Meinvestproc> meinvestproc = meinvestprocRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(meinvestproc);
    }

    /**
     * {@code DELETE  /meinvestprocs/:id} : delete the "id" meinvestproc.
     *
     * @param id the id of the meinvestproc to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/meinvestprocs/{id}")
    public ResponseEntity<Void> deleteMeinvestproc(@PathVariable Long id) {
        log.debug("REST request to delete Meinvestproc : {}", id);
        meinvestprocRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
