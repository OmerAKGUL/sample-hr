package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afmsg;
import com.mdsap.samplehr.repository.AfmsgRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afmsg}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfmsgResource {

    private final Logger log = LoggerFactory.getLogger(AfmsgResource.class);

    private static final String ENTITY_NAME = "afmsg";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfmsgRepository afmsgRepository;

    public AfmsgResource(AfmsgRepository afmsgRepository) {
        this.afmsgRepository = afmsgRepository;
    }

    /**
     * {@code POST  /afmsgs} : Create a new afmsg.
     *
     * @param afmsg the afmsg to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afmsg, or with status {@code 400 (Bad Request)} if the afmsg has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afmsgs")
    public ResponseEntity<Afmsg> createAfmsg(@Valid @RequestBody Afmsg afmsg) throws URISyntaxException {
        log.debug("REST request to save Afmsg : {}", afmsg);
        if (afmsg.getId() != null) {
            throw new BadRequestAlertException("A new afmsg cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afmsg result = afmsgRepository.save(afmsg);
        return ResponseEntity.created(new URI("/api/afmsgs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afmsgs} : Updates an existing afmsg.
     *
     * @param afmsg the afmsg to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afmsg,
     * or with status {@code 400 (Bad Request)} if the afmsg is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afmsg couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afmsgs")
    public ResponseEntity<Afmsg> updateAfmsg(@Valid @RequestBody Afmsg afmsg) throws URISyntaxException {
        log.debug("REST request to update Afmsg : {}", afmsg);
        if (afmsg.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afmsg result = afmsgRepository.save(afmsg);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afmsg.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afmsgs} : get all the afmsgs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afmsgs in body.
     */
    @GetMapping("/afmsgs")
    public List<Afmsg> getAllAfmsgs() {
        log.debug("REST request to get all Afmsgs");
        return afmsgRepository.findAll();
    }

    /**
     * {@code GET  /afmsgs/:id} : get the "id" afmsg.
     *
     * @param id the id of the afmsg to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afmsg, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afmsgs/{id}")
    public ResponseEntity<Afmsg> getAfmsg(@PathVariable Long id) {
        log.debug("REST request to get Afmsg : {}", id);
        Optional<Afmsg> afmsg = afmsgRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afmsg);
    }

    /**
     * {@code DELETE  /afmsgs/:id} : delete the "id" afmsg.
     *
     * @param id the id of the afmsg to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afmsgs/{id}")
    public ResponseEntity<Void> deleteAfmsg(@PathVariable Long id) {
        log.debug("REST request to delete Afmsg : {}", id);
        afmsgRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
