package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Wlmwldatalog;
import com.mdsap.samplehr.repository.WlmwldatalogRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Wlmwldatalog}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class WlmwldatalogResource {

    private final Logger log = LoggerFactory.getLogger(WlmwldatalogResource.class);

    private static final String ENTITY_NAME = "wlmwldatalog";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final WlmwldatalogRepository wlmwldatalogRepository;

    public WlmwldatalogResource(WlmwldatalogRepository wlmwldatalogRepository) {
        this.wlmwldatalogRepository = wlmwldatalogRepository;
    }

    /**
     * {@code POST  /wlmwldatalogs} : Create a new wlmwldatalog.
     *
     * @param wlmwldatalog the wlmwldatalog to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new wlmwldatalog, or with status {@code 400 (Bad Request)} if the wlmwldatalog has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/wlmwldatalogs")
    public ResponseEntity<Wlmwldatalog> createWlmwldatalog(@Valid @RequestBody Wlmwldatalog wlmwldatalog) throws URISyntaxException {
        log.debug("REST request to save Wlmwldatalog : {}", wlmwldatalog);
        if (wlmwldatalog.getId() != null) {
            throw new BadRequestAlertException("A new wlmwldatalog cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Wlmwldatalog result = wlmwldatalogRepository.save(wlmwldatalog);
        return ResponseEntity.created(new URI("/api/wlmwldatalogs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /wlmwldatalogs} : Updates an existing wlmwldatalog.
     *
     * @param wlmwldatalog the wlmwldatalog to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated wlmwldatalog,
     * or with status {@code 400 (Bad Request)} if the wlmwldatalog is not valid,
     * or with status {@code 500 (Internal Server Error)} if the wlmwldatalog couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/wlmwldatalogs")
    public ResponseEntity<Wlmwldatalog> updateWlmwldatalog(@Valid @RequestBody Wlmwldatalog wlmwldatalog) throws URISyntaxException {
        log.debug("REST request to update Wlmwldatalog : {}", wlmwldatalog);
        if (wlmwldatalog.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Wlmwldatalog result = wlmwldatalogRepository.save(wlmwldatalog);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, wlmwldatalog.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /wlmwldatalogs} : get all the wlmwldatalogs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of wlmwldatalogs in body.
     */
    @GetMapping("/wlmwldatalogs")
    public List<Wlmwldatalog> getAllWlmwldatalogs() {
        log.debug("REST request to get all Wlmwldatalogs");
        return wlmwldatalogRepository.findAll();
    }

    /**
     * {@code GET  /wlmwldatalogs/:id} : get the "id" wlmwldatalog.
     *
     * @param id the id of the wlmwldatalog to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the wlmwldatalog, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/wlmwldatalogs/{id}")
    public ResponseEntity<Wlmwldatalog> getWlmwldatalog(@PathVariable Long id) {
        log.debug("REST request to get Wlmwldatalog : {}", id);
        Optional<Wlmwldatalog> wlmwldatalog = wlmwldatalogRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(wlmwldatalog);
    }

    /**
     * {@code DELETE  /wlmwldatalogs/:id} : delete the "id" wlmwldatalog.
     *
     * @param id the id of the wlmwldatalog to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/wlmwldatalogs/{id}")
    public ResponseEntity<Void> deleteWlmwldatalog(@PathVariable Long id) {
        log.debug("REST request to delete Wlmwldatalog : {}", id);
        wlmwldatalogRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
