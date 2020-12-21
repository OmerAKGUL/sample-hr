package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcustadressinfo;
import com.mdsap.samplehr.repository.ItxcustadressinfoRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcustadressinfo}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcustadressinfoResource {

    private final Logger log = LoggerFactory.getLogger(ItxcustadressinfoResource.class);

    private static final String ENTITY_NAME = "itxcustadressinfo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcustadressinfoRepository itxcustadressinfoRepository;

    public ItxcustadressinfoResource(ItxcustadressinfoRepository itxcustadressinfoRepository) {
        this.itxcustadressinfoRepository = itxcustadressinfoRepository;
    }

    /**
     * {@code POST  /itxcustadressinfos} : Create a new itxcustadressinfo.
     *
     * @param itxcustadressinfo the itxcustadressinfo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcustadressinfo, or with status {@code 400 (Bad Request)} if the itxcustadressinfo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcustadressinfos")
    public ResponseEntity<Itxcustadressinfo> createItxcustadressinfo(@RequestBody Itxcustadressinfo itxcustadressinfo) throws URISyntaxException {
        log.debug("REST request to save Itxcustadressinfo : {}", itxcustadressinfo);
        if (itxcustadressinfo.getId() != null) {
            throw new BadRequestAlertException("A new itxcustadressinfo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcustadressinfo result = itxcustadressinfoRepository.save(itxcustadressinfo);
        return ResponseEntity.created(new URI("/api/itxcustadressinfos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcustadressinfos} : Updates an existing itxcustadressinfo.
     *
     * @param itxcustadressinfo the itxcustadressinfo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcustadressinfo,
     * or with status {@code 400 (Bad Request)} if the itxcustadressinfo is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcustadressinfo couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcustadressinfos")
    public ResponseEntity<Itxcustadressinfo> updateItxcustadressinfo(@RequestBody Itxcustadressinfo itxcustadressinfo) throws URISyntaxException {
        log.debug("REST request to update Itxcustadressinfo : {}", itxcustadressinfo);
        if (itxcustadressinfo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcustadressinfo result = itxcustadressinfoRepository.save(itxcustadressinfo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcustadressinfo.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcustadressinfos} : get all the itxcustadressinfos.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcustadressinfos in body.
     */
    @GetMapping("/itxcustadressinfos")
    public List<Itxcustadressinfo> getAllItxcustadressinfos() {
        log.debug("REST request to get all Itxcustadressinfos");
        return itxcustadressinfoRepository.findAll();
    }

    /**
     * {@code GET  /itxcustadressinfos/:id} : get the "id" itxcustadressinfo.
     *
     * @param id the id of the itxcustadressinfo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcustadressinfo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcustadressinfos/{id}")
    public ResponseEntity<Itxcustadressinfo> getItxcustadressinfo(@PathVariable Long id) {
        log.debug("REST request to get Itxcustadressinfo : {}", id);
        Optional<Itxcustadressinfo> itxcustadressinfo = itxcustadressinfoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcustadressinfo);
    }

    /**
     * {@code DELETE  /itxcustadressinfos/:id} : delete the "id" itxcustadressinfo.
     *
     * @param id the id of the itxcustadressinfo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcustadressinfos/{id}")
    public ResponseEntity<Void> deleteItxcustadressinfo(@PathVariable Long id) {
        log.debug("REST request to delete Itxcustadressinfo : {}", id);
        itxcustadressinfoRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
