package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Jhiuser;
import com.mdsap.samplehr.repository.JhiuserRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Jhiuser}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class JhiuserResource {

    private final Logger log = LoggerFactory.getLogger(JhiuserResource.class);

    private static final String ENTITY_NAME = "jhiuser";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final JhiuserRepository jhiuserRepository;

    public JhiuserResource(JhiuserRepository jhiuserRepository) {
        this.jhiuserRepository = jhiuserRepository;
    }

    /**
     * {@code POST  /jhiusers} : Create a new jhiuser.
     *
     * @param jhiuser the jhiuser to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new jhiuser, or with status {@code 400 (Bad Request)} if the jhiuser has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/jhiusers")
    public ResponseEntity<Jhiuser> createJhiuser(@RequestBody Jhiuser jhiuser) throws URISyntaxException {
        log.debug("REST request to save Jhiuser : {}", jhiuser);
        if (jhiuser.getId() != null) {
            throw new BadRequestAlertException("A new jhiuser cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Jhiuser result = jhiuserRepository.save(jhiuser);
        return ResponseEntity.created(new URI("/api/jhiusers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /jhiusers} : Updates an existing jhiuser.
     *
     * @param jhiuser the jhiuser to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated jhiuser,
     * or with status {@code 400 (Bad Request)} if the jhiuser is not valid,
     * or with status {@code 500 (Internal Server Error)} if the jhiuser couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/jhiusers")
    public ResponseEntity<Jhiuser> updateJhiuser(@RequestBody Jhiuser jhiuser) throws URISyntaxException {
        log.debug("REST request to update Jhiuser : {}", jhiuser);
        if (jhiuser.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Jhiuser result = jhiuserRepository.save(jhiuser);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, jhiuser.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /jhiusers} : get all the jhiusers.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of jhiusers in body.
     */
    @GetMapping("/jhiusers")
    public List<Jhiuser> getAllJhiusers() {
        log.debug("REST request to get all Jhiusers");
        return jhiuserRepository.findAll();
    }

    /**
     * {@code GET  /jhiusers/:id} : get the "id" jhiuser.
     *
     * @param id the id of the jhiuser to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the jhiuser, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/jhiusers/{id}")
    public ResponseEntity<Jhiuser> getJhiuser(@PathVariable Long id) {
        log.debug("REST request to get Jhiuser : {}", id);
        Optional<Jhiuser> jhiuser = jhiuserRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(jhiuser);
    }

    /**
     * {@code DELETE  /jhiusers/:id} : delete the "id" jhiuser.
     *
     * @param id the id of the jhiuser to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/jhiusers/{id}")
    public ResponseEntity<Void> deleteJhiuser(@PathVariable Long id) {
        log.debug("REST request to delete Jhiuser : {}", id);
        jhiuserRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
