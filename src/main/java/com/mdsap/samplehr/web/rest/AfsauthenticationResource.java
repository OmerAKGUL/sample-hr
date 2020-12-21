package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afsauthentication;
import com.mdsap.samplehr.repository.AfsauthenticationRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afsauthentication}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfsauthenticationResource {

    private final Logger log = LoggerFactory.getLogger(AfsauthenticationResource.class);

    private static final String ENTITY_NAME = "afsauthentication";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfsauthenticationRepository afsauthenticationRepository;

    public AfsauthenticationResource(AfsauthenticationRepository afsauthenticationRepository) {
        this.afsauthenticationRepository = afsauthenticationRepository;
    }

    /**
     * {@code POST  /afsauthentications} : Create a new afsauthentication.
     *
     * @param afsauthentication the afsauthentication to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afsauthentication, or with status {@code 400 (Bad Request)} if the afsauthentication has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afsauthentications")
    public ResponseEntity<Afsauthentication> createAfsauthentication(@Valid @RequestBody Afsauthentication afsauthentication) throws URISyntaxException {
        log.debug("REST request to save Afsauthentication : {}", afsauthentication);
        if (afsauthentication.getId() != null) {
            throw new BadRequestAlertException("A new afsauthentication cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afsauthentication result = afsauthenticationRepository.save(afsauthentication);
        return ResponseEntity.created(new URI("/api/afsauthentications/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afsauthentications} : Updates an existing afsauthentication.
     *
     * @param afsauthentication the afsauthentication to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afsauthentication,
     * or with status {@code 400 (Bad Request)} if the afsauthentication is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afsauthentication couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afsauthentications")
    public ResponseEntity<Afsauthentication> updateAfsauthentication(@Valid @RequestBody Afsauthentication afsauthentication) throws URISyntaxException {
        log.debug("REST request to update Afsauthentication : {}", afsauthentication);
        if (afsauthentication.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afsauthentication result = afsauthenticationRepository.save(afsauthentication);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afsauthentication.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afsauthentications} : get all the afsauthentications.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afsauthentications in body.
     */
    @GetMapping("/afsauthentications")
    public List<Afsauthentication> getAllAfsauthentications() {
        log.debug("REST request to get all Afsauthentications");
        return afsauthenticationRepository.findAll();
    }

    /**
     * {@code GET  /afsauthentications/:id} : get the "id" afsauthentication.
     *
     * @param id the id of the afsauthentication to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afsauthentication, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afsauthentications/{id}")
    public ResponseEntity<Afsauthentication> getAfsauthentication(@PathVariable Long id) {
        log.debug("REST request to get Afsauthentication : {}", id);
        Optional<Afsauthentication> afsauthentication = afsauthenticationRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afsauthentication);
    }

    /**
     * {@code DELETE  /afsauthentications/:id} : delete the "id" afsauthentication.
     *
     * @param id the id of the afsauthentication to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afsauthentications/{id}")
    public ResponseEntity<Void> deleteAfsauthentication(@PathVariable Long id) {
        log.debug("REST request to delete Afsauthentication : {}", id);
        afsauthenticationRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
