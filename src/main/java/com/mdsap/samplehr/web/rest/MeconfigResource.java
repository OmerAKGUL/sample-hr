package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Meconfig;
import com.mdsap.samplehr.repository.MeconfigRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Meconfig}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class MeconfigResource {

    private final Logger log = LoggerFactory.getLogger(MeconfigResource.class);

    private static final String ENTITY_NAME = "meconfig";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MeconfigRepository meconfigRepository;

    public MeconfigResource(MeconfigRepository meconfigRepository) {
        this.meconfigRepository = meconfigRepository;
    }

    /**
     * {@code POST  /meconfigs} : Create a new meconfig.
     *
     * @param meconfig the meconfig to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new meconfig, or with status {@code 400 (Bad Request)} if the meconfig has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/meconfigs")
    public ResponseEntity<Meconfig> createMeconfig(@Valid @RequestBody Meconfig meconfig) throws URISyntaxException {
        log.debug("REST request to save Meconfig : {}", meconfig);
        if (meconfig.getId() != null) {
            throw new BadRequestAlertException("A new meconfig cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Meconfig result = meconfigRepository.save(meconfig);
        return ResponseEntity.created(new URI("/api/meconfigs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /meconfigs} : Updates an existing meconfig.
     *
     * @param meconfig the meconfig to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated meconfig,
     * or with status {@code 400 (Bad Request)} if the meconfig is not valid,
     * or with status {@code 500 (Internal Server Error)} if the meconfig couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/meconfigs")
    public ResponseEntity<Meconfig> updateMeconfig(@Valid @RequestBody Meconfig meconfig) throws URISyntaxException {
        log.debug("REST request to update Meconfig : {}", meconfig);
        if (meconfig.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Meconfig result = meconfigRepository.save(meconfig);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, meconfig.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /meconfigs} : get all the meconfigs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of meconfigs in body.
     */
    @GetMapping("/meconfigs")
    public List<Meconfig> getAllMeconfigs() {
        log.debug("REST request to get all Meconfigs");
        return meconfigRepository.findAll();
    }

    /**
     * {@code GET  /meconfigs/:id} : get the "id" meconfig.
     *
     * @param id the id of the meconfig to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the meconfig, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/meconfigs/{id}")
    public ResponseEntity<Meconfig> getMeconfig(@PathVariable Long id) {
        log.debug("REST request to get Meconfig : {}", id);
        Optional<Meconfig> meconfig = meconfigRepository.findById(id);//l.get(0);//findById(id);
        return ResponseUtil.wrapOrNotFound(meconfig);
    }

    /**
     * {@code DELETE  /meconfigs/:id} : delete the "id" meconfig.
     *
     * @param id the id of the meconfig to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/meconfigs/{id}")
    public ResponseEntity<Void> deleteMeconfig(@PathVariable Long id) {
        log.debug("REST request to delete Meconfig : {}", id);
        meconfigRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
