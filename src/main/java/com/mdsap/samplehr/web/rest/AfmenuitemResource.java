package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Afmenuitem;
import com.mdsap.samplehr.repository.AfmenuitemRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Afmenuitem}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AfmenuitemResource {

    private final Logger log = LoggerFactory.getLogger(AfmenuitemResource.class);

    private static final String ENTITY_NAME = "afmenuitem";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AfmenuitemRepository afmenuitemRepository;

    public AfmenuitemResource(AfmenuitemRepository afmenuitemRepository) {
        this.afmenuitemRepository = afmenuitemRepository;
    }

    /**
     * {@code POST  /afmenuitems} : Create a new afmenuitem.
     *
     * @param afmenuitem the afmenuitem to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new afmenuitem, or with status {@code 400 (Bad Request)} if the afmenuitem has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/afmenuitems")
    public ResponseEntity<Afmenuitem> createAfmenuitem(@Valid @RequestBody Afmenuitem afmenuitem) throws URISyntaxException {
        log.debug("REST request to save Afmenuitem : {}", afmenuitem);
        if (afmenuitem.getId() != null) {
            throw new BadRequestAlertException("A new afmenuitem cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Afmenuitem result = afmenuitemRepository.save(afmenuitem);
        return ResponseEntity.created(new URI("/api/afmenuitems/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /afmenuitems} : Updates an existing afmenuitem.
     *
     * @param afmenuitem the afmenuitem to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated afmenuitem,
     * or with status {@code 400 (Bad Request)} if the afmenuitem is not valid,
     * or with status {@code 500 (Internal Server Error)} if the afmenuitem couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/afmenuitems")
    public ResponseEntity<Afmenuitem> updateAfmenuitem(@Valid @RequestBody Afmenuitem afmenuitem) throws URISyntaxException {
        log.debug("REST request to update Afmenuitem : {}", afmenuitem);
        if (afmenuitem.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Afmenuitem result = afmenuitemRepository.save(afmenuitem);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, afmenuitem.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /afmenuitems} : get all the afmenuitems.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of afmenuitems in body.
     */
    @GetMapping("/afmenuitems")
    public List<Afmenuitem> getAllAfmenuitems() {
        log.debug("REST request to get all Afmenuitems");
        return afmenuitemRepository.findAll();
    }

    /**
     * {@code GET  /afmenuitems/:id} : get the "id" afmenuitem.
     *
     * @param id the id of the afmenuitem to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the afmenuitem, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/afmenuitems/{id}")
    public ResponseEntity<Afmenuitem> getAfmenuitem(@PathVariable Long id) {
        log.debug("REST request to get Afmenuitem : {}", id);
        Optional<Afmenuitem> afmenuitem = afmenuitemRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(afmenuitem);
    }

    /**
     * {@code DELETE  /afmenuitems/:id} : delete the "id" afmenuitem.
     *
     * @param id the id of the afmenuitem to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/afmenuitems/{id}")
    public ResponseEntity<Void> deleteAfmenuitem(@PathVariable Long id) {
        log.debug("REST request to delete Afmenuitem : {}", id);
        afmenuitemRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
