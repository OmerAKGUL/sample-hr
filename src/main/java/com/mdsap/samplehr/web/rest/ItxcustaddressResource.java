package com.mdsap.samplehr.web.rest;

import com.mdsap.samplehr.domain.Itxcustaddress;
import com.mdsap.samplehr.repository.ItxcustaddressRepository;
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
 * REST controller for managing {@link com.mdsap.samplehr.domain.Itxcustaddress}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ItxcustaddressResource {

    private final Logger log = LoggerFactory.getLogger(ItxcustaddressResource.class);

    private static final String ENTITY_NAME = "itxcustaddress";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ItxcustaddressRepository itxcustaddressRepository;

    public ItxcustaddressResource(ItxcustaddressRepository itxcustaddressRepository) {
        this.itxcustaddressRepository = itxcustaddressRepository;
    }

    /**
     * {@code POST  /itxcustaddresses} : Create a new itxcustaddress.
     *
     * @param itxcustaddress the itxcustaddress to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new itxcustaddress, or with status {@code 400 (Bad Request)} if the itxcustaddress has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/itxcustaddresses")
    public ResponseEntity<Itxcustaddress> createItxcustaddress(@RequestBody Itxcustaddress itxcustaddress) throws URISyntaxException {
        log.debug("REST request to save Itxcustaddress : {}", itxcustaddress);
        if (itxcustaddress.getId() != null) {
            throw new BadRequestAlertException("A new itxcustaddress cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Itxcustaddress result = itxcustaddressRepository.save(itxcustaddress);
        return ResponseEntity.created(new URI("/api/itxcustaddresses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /itxcustaddresses} : Updates an existing itxcustaddress.
     *
     * @param itxcustaddress the itxcustaddress to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated itxcustaddress,
     * or with status {@code 400 (Bad Request)} if the itxcustaddress is not valid,
     * or with status {@code 500 (Internal Server Error)} if the itxcustaddress couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/itxcustaddresses")
    public ResponseEntity<Itxcustaddress> updateItxcustaddress(@RequestBody Itxcustaddress itxcustaddress) throws URISyntaxException {
        log.debug("REST request to update Itxcustaddress : {}", itxcustaddress);
        if (itxcustaddress.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Itxcustaddress result = itxcustaddressRepository.save(itxcustaddress);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, itxcustaddress.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /itxcustaddresses} : get all the itxcustaddresses.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of itxcustaddresses in body.
     */
    @GetMapping("/itxcustaddresses")
    public List<Itxcustaddress> getAllItxcustaddresses() {
        log.debug("REST request to get all Itxcustaddresses");
        return itxcustaddressRepository.findAll();
    }

    /**
     * {@code GET  /itxcustaddresses/:id} : get the "id" itxcustaddress.
     *
     * @param id the id of the itxcustaddress to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the itxcustaddress, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/itxcustaddresses/{id}")
    public ResponseEntity<Itxcustaddress> getItxcustaddress(@PathVariable Long id) {
        log.debug("REST request to get Itxcustaddress : {}", id);
        Optional<Itxcustaddress> itxcustaddress = itxcustaddressRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(itxcustaddress);
    }

    /**
     * {@code DELETE  /itxcustaddresses/:id} : delete the "id" itxcustaddress.
     *
     * @param id the id of the itxcustaddress to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/itxcustaddresses/{id}")
    public ResponseEntity<Void> deleteItxcustaddress(@PathVariable Long id) {
        log.debug("REST request to delete Itxcustaddress : {}", id);
        itxcustaddressRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
