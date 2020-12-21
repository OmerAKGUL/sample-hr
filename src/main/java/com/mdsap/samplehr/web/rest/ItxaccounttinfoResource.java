package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxaccounttinfo;
import com.mdsap.samplehr.repository.ItxaccounttinfoRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxaccounttinfo}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxaccounttinfoResource {

    private final Logger log = LoggerFactory.getLogger(ItxaccounttinfoResource.class);

    private static final String ENTITY_NAME = "itxaccounttinfo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxaccounttinfoRepository itxaccounttinfoRepository;

    public ItxaccounttinfoResource(ItxaccounttinfoRepository itxaccounttinfoRepository) {
        this.itxaccounttinfoRepository = itxaccounttinfoRepository;
    }

    /**
     * {@code POST  /itxaccounttinfos} : Create a new itxaccounttinfo.
     *
     * @param itxaccounttinfo the itxaccounttinfo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxaccounttinfo, or with status {@code 400 (Bad Request)} if the itxaccounttinfo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxaccounttinfos")
    public ResponseEntity<Itxaccounttinfo> createItxaccounttinfo(@RequestBody Itxaccounttinfo itxaccounttinfo) throws URISyntaxException {
        log.debug("REST request to save Itxaccounttinfo : {}", itxaccounttinfo);
        if (itxaccounttinfo.getId() != null) {
            throw new BadRequestAlertException("A new itxaccounttinfo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxaccounttinfo result = itxaccounttinfoRepository.save(itxaccounttinfo);
        return ResponseEntity.created(new URI("/api/itxaccounttinfos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxaccounttinfos} : Updates an existing itxaccounttinfo.
     *
     * @param itxaccounttinfo the itxaccounttinfo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxaccounttinfo,
     * or with status {@code 400 (Bad Request)} if the itxaccounttinfo is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxaccounttinfo couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxaccounttinfos")
    public ResponseEntity<Itxaccounttinfo> updateItxaccounttinfo(@RequestBody Itxaccounttinfo itxaccounttinfo) throws URISyntaxException {
        log.debug("REST request to update Itxaccounttinfo : {}", itxaccounttinfo);
        if (itxaccounttinfo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxaccounttinfo result = itxaccounttinfoRepository.save(itxaccounttinfo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxaccounttinfo.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxaccounttinfos} : get all the itxaccounttinfos.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxaccounttinfos in body.
     */
    @GetMapping("/itxaccounttinfos")
    public List<Itxaccounttinfo> getAllItxaccounttinfos() {
        log.debug("REST request to get all Itxaccounttinfos");
        return itxaccounttinfoRepository.findAll();
    }

    /**
     * {@code GET  /itxaccounttinfos/:id} : get the "id" itxaccounttinfo.
     *
     * @param id the id of the itxaccounttinfo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxaccounttinfo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxaccounttinfos/{id}")
    public ResponseEntity<Itxaccounttinfo> getItxaccounttinfo(@PathVariable Long id) {
        log.debug("REST request to get Itxaccounttinfo : {}", id);
        Optional<Itxaccounttinfo> itxaccounttinfo = itxaccounttinfoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxaccounttinfo);
    }

    /**
     * {@code DELETE  /itxaccounttinfos/:id} : delete the "id" itxaccounttinfo.
     *
     * @param id the id of the itxaccounttinfo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxaccounttinfos/{id}")
    public ResponseEntity<Void> deleteItxaccounttinfo(@PathVariable Long id) {
        log.debug("REST request to delete Itxaccounttinfo : {}", id);
        itxaccounttinfoRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
