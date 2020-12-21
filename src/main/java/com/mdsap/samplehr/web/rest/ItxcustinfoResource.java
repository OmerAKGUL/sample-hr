package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcustinfo;
import com.mdsap.samplehr.repository.ItxcustinfoRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcustinfo}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcustinfoResource {

    private final Logger log = LoggerFactory.getLogger(ItxcustinfoResource.class);

    private static final String ENTITY_NAME = "itxcustinfo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcustinfoRepository itxcustinfoRepository;

    public ItxcustinfoResource(ItxcustinfoRepository itxcustinfoRepository) {
        this.itxcustinfoRepository = itxcustinfoRepository;
    }

    /**
     * {@code POST  /itxcustinfos} : Create a new itxcustinfo.
     *
     * @param itxcustinfo the itxcustinfo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcustinfo, or with status {@code 400 (Bad Request)} if the itxcustinfo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcustinfos")
    public ResponseEntity<Itxcustinfo> createItxcustinfo(@RequestBody Itxcustinfo itxcustinfo) throws URISyntaxException {
        log.debug("REST request to save Itxcustinfo : {}", itxcustinfo);
        if (itxcustinfo.getId() != null) {
            throw new BadRequestAlertException("A new itxcustinfo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcustinfo result = itxcustinfoRepository.save(itxcustinfo);
        return ResponseEntity.created(new URI("/api/itxcustinfos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcustinfos} : Updates an existing itxcustinfo.
     *
     * @param itxcustinfo the itxcustinfo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcustinfo,
     * or with status {@code 400 (Bad Request)} if the itxcustinfo is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcustinfo couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcustinfos")
    public ResponseEntity<Itxcustinfo> updateItxcustinfo(@RequestBody Itxcustinfo itxcustinfo) throws URISyntaxException {
        log.debug("REST request to update Itxcustinfo : {}", itxcustinfo);
        if (itxcustinfo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcustinfo result = itxcustinfoRepository.save(itxcustinfo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcustinfo.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcustinfos} : get all the itxcustinfos.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcustinfos in body.
     */
    @GetMapping("/itxcustinfos")
    public List<Itxcustinfo> getAllItxcustinfos() {
        log.debug("REST request to get all Itxcustinfos");
        return itxcustinfoRepository.findAll();
    }

    /**
     * {@code GET  /itxcustinfos/:id} : get the "id" itxcustinfo.
     *
     * @param id the id of the itxcustinfo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcustinfo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcustinfos/{id}")
    public ResponseEntity<Itxcustinfo> getItxcustinfo(@PathVariable Long id) {
        log.debug("REST request to get Itxcustinfo : {}", id);
        Optional<Itxcustinfo> itxcustinfo = itxcustinfoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcustinfo);
    }

    /**
     * {@code DELETE  /itxcustinfos/:id} : delete the "id" itxcustinfo.
     *
     * @param id the id of the itxcustinfo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcustinfos/{id}")
    public ResponseEntity<Void> deleteItxcustinfo(@PathVariable Long id) {
        log.debug("REST request to delete Itxcustinfo : {}", id);
        itxcustinfoRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
