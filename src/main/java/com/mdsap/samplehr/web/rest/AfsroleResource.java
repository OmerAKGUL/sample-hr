package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsrole;
import com.mdsap.samplehr.repository.AfsroleRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsrole}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsroleResource {

    private final Logger log = LoggerFactory.getLogger(AfsroleResource.class);

    private static final String ENTITY_NAME = "afsrole";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsroleRepository afsroleRepository;

    public AfsroleResource(AfsroleRepository afsroleRepository) {
        this.afsroleRepository = afsroleRepository;
    }

    /**
     * {@code POST  /afsroles} : Create a new afsrole.
     *
     * @param afsrole the afsrole to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsrole, or with status {@code 400 (Bad Request)} if the afsrole has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsroles")
    public ResponseEntity<Afsrole> createAfsrole(@Valid @RequestBody Afsrole afsrole) throws URISyntaxException {
        log.debug("REST request to save Afsrole : {}", afsrole);
        if (afsrole.getId() != null) {
            throw new BadRequestAlertException("A new afsrole cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsrole result = afsroleRepository.save(afsrole);
        return ResponseEntity.created(new URI("/api/afsroles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsroles} : Updates an existing afsrole.
     *
     * @param afsrole the afsrole to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsrole,
     * or with status {@code 400 (Bad Request)} if the afsrole is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsrole couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsroles")
    public ResponseEntity<Afsrole> updateAfsrole(@Valid @RequestBody Afsrole afsrole) throws URISyntaxException {
        log.debug("REST request to update Afsrole : {}", afsrole);
        if (afsrole.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsrole result = afsroleRepository.save(afsrole);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsrole.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsroles} : get all the afsroles.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsroles in body.
     */
    @GetMapping("/afsroles")
    public List<Afsrole> getAllAfsroles() {
        log.debug("REST request to get all Afsroles");
        return afsroleRepository.findAll();
    }

    /**
     * {@code GET  /afsroles/:id} : get the "id" afsrole.
     *
     * @param id the id of the afsrole to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsrole, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsroles/{id}")
    public ResponseEntity<Afsrole> getAfsrole(@PathVariable Long id) {
        log.debug("REST request to get Afsrole : {}", id);
        Optional<Afsrole> afsrole = afsroleRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsrole);
    }

    /**
     * {@code DELETE  /afsroles/:id} : delete the "id" afsrole.
     *
     * @param id the id of the afsrole to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsroles/{id}")
    public ResponseEntity<Void> deleteAfsrole(@PathVariable Long id) {
        log.debug("REST request to delete Afsrole : {}", id);
        afsroleRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
