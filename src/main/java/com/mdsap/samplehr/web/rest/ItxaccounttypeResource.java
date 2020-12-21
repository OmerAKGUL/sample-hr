package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxaccounttype;
import com.mdsap.samplehr.repository.ItxaccounttypeRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxaccounttype}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxaccounttypeResource {

    private final Logger log = LoggerFactory.getLogger(ItxaccounttypeResource.class);

    private static final String ENTITY_NAME = "itxaccounttype";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxaccounttypeRepository itxaccounttypeRepository;

    public ItxaccounttypeResource(ItxaccounttypeRepository itxaccounttypeRepository) {
        this.itxaccounttypeRepository = itxaccounttypeRepository;
    }

    /**
     * {@code POST  /itxaccounttypes} : Create a new itxaccounttype.
     *
     * @param itxaccounttype the itxaccounttype to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxaccounttype, or with status {@code 400 (Bad Request)} if the itxaccounttype has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxaccounttypes")
    public ResponseEntity<Itxaccounttype> createItxaccounttype(@RequestBody Itxaccounttype itxaccounttype) throws URISyntaxException {
        log.debug("REST request to save Itxaccounttype : {}", itxaccounttype);
        if (itxaccounttype.getId() != null) {
            throw new BadRequestAlertException("A new itxaccounttype cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxaccounttype result = itxaccounttypeRepository.save(itxaccounttype);
        return ResponseEntity.created(new URI("/api/itxaccounttypes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxaccounttypes} : Updates an existing itxaccounttype.
     *
     * @param itxaccounttype the itxaccounttype to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxaccounttype,
     * or with status {@code 400 (Bad Request)} if the itxaccounttype is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxaccounttype couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxaccounttypes")
    public ResponseEntity<Itxaccounttype> updateItxaccounttype(@RequestBody Itxaccounttype itxaccounttype) throws URISyntaxException {
        log.debug("REST request to update Itxaccounttype : {}", itxaccounttype);
        if (itxaccounttype.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxaccounttype result = itxaccounttypeRepository.save(itxaccounttype);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxaccounttype.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxaccounttypes} : get all the itxaccounttypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxaccounttypes in body.
     */
    @GetMapping("/itxaccounttypes")
    public List<Itxaccounttype> getAllItxaccounttypes() {
        log.debug("REST request to get all Itxaccounttypes");
        return itxaccounttypeRepository.findAll();
    }

    /**
     * {@code GET  /itxaccounttypes/:id} : get the "id" itxaccounttype.
     *
     * @param id the id of the itxaccounttype to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxaccounttype, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxaccounttypes/{id}")
    public ResponseEntity<Itxaccounttype> getItxaccounttype(@PathVariable Long id) {
        log.debug("REST request to get Itxaccounttype : {}", id);
        Optional<Itxaccounttype> itxaccounttype = itxaccounttypeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxaccounttype);
    }

    /**
     * {@code DELETE  /itxaccounttypes/:id} : delete the "id" itxaccounttype.
     *
     * @param id the id of the itxaccounttype to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxaccounttypes/{id}")
    public ResponseEntity<Void> deleteItxaccounttype(@PathVariable Long id) {
        log.debug("REST request to delete Itxaccounttype : {}", id);
        itxaccounttypeRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
