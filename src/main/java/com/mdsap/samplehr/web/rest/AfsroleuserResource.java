package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsroleuser;
import com.mdsap.samplehr.repository.AfsroleuserRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsroleuser}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsroleuserResource {

    private final Logger log = LoggerFactory.getLogger(AfsroleuserResource.class);

    private static final String ENTITY_NAME = "afsroleuser";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsroleuserRepository afsroleuserRepository;

    public AfsroleuserResource(AfsroleuserRepository afsroleuserRepository) {
        this.afsroleuserRepository = afsroleuserRepository;
    }

    /**
     * {@code POST  /afsroleusers} : Create a new afsroleuser.
     *
     * @param afsroleuser the afsroleuser to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsroleuser, or with status {@code 400 (Bad Request)} if the afsroleuser has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsroleusers")
    public ResponseEntity<Afsroleuser> createAfsroleuser(@RequestBody Afsroleuser afsroleuser) throws URISyntaxException {
        log.debug("REST request to save Afsroleuser : {}", afsroleuser);
        if (afsroleuser.getId() != null) {
            throw new BadRequestAlertException("A new afsroleuser cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsroleuser result = afsroleuserRepository.save(afsroleuser);
        return ResponseEntity.created(new URI("/api/afsroleusers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsroleusers} : Updates an existing afsroleuser.
     *
     * @param afsroleuser the afsroleuser to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsroleuser,
     * or with status {@code 400 (Bad Request)} if the afsroleuser is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsroleuser couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsroleusers")
    public ResponseEntity<Afsroleuser> updateAfsroleuser(@RequestBody Afsroleuser afsroleuser) throws URISyntaxException {
        log.debug("REST request to update Afsroleuser : {}", afsroleuser);
        if (afsroleuser.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsroleuser result = afsroleuserRepository.save(afsroleuser);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsroleuser.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsroleusers} : get all the afsroleusers.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsroleusers in body.
     */
    @GetMapping("/afsroleusers")
    public List<Afsroleuser> getAllAfsroleusers() {
        log.debug("REST request to get all Afsroleusers");
        return afsroleuserRepository.findAll();
    }

    /**
     * {@code GET  /afsroleusers/:id} : get the "id" afsroleuser.
     *
     * @param id the id of the afsroleuser to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsroleuser, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsroleusers/{id}")
    public ResponseEntity<Afsroleuser> getAfsroleuser(@PathVariable Long id) {
        log.debug("REST request to get Afsroleuser : {}", id);
        Optional<Afsroleuser> afsroleuser = afsroleuserRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsroleuser);
    }

    /**
     * {@code DELETE  /afsroleusers/:id} : delete the "id" afsroleuser.
     *
     * @param id the id of the afsroleuser to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsroleusers/{id}")
    public ResponseEntity<Void> deleteAfsroleuser(@PathVariable Long id) {
        log.debug("REST request to delete Afsroleuser : {}", id);
        afsroleuserRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
