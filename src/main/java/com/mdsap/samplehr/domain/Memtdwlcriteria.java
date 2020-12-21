package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Memtdwlcriteria.
 */
@Entity
@Table(schema = "WLF", name = "memtdwlcriteria")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Memtdwlcriteria implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "wlmid", nullable = false)
    private Long wlmid;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "applyonwlfields")
    private String applyonwlfields;

    @ManyToOne
	@JoinColumn(name="wltypecode")
    @JsonIgnoreProperties(value = "memtdwlcriteria", allowSetters = true)
    private Wlmwltype wltypecode;

    @ManyToOne
	@JoinColumn(name="matchmethodcode")
    @JsonIgnoreProperties(value = "memtdwlcriteria", allowSetters = true)
    private Mematchmethod matchmethodcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWlmid() {
        return wlmid;
    }

    public Memtdwlcriteria wlmid(Long wlmid) {
        this.wlmid = wlmid;
        return this;
    }

    public void setWlmid(Long wlmid) {
        this.wlmid = wlmid;
    }

    public String getName() {
        return name;
    }

    public Memtdwlcriteria name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getApplyonwlfields() {
        return applyonwlfields;
    }

    public Memtdwlcriteria applyonwlfields(String applyonwlfields) {
        this.applyonwlfields = applyonwlfields;
        return this;
    }

    public void setApplyonwlfields(String applyonwlfields) {
        this.applyonwlfields = applyonwlfields;
    }

    public Wlmwltype getWltypecode() {
        return wltypecode;
    }

    public Memtdwlcriteria wltypecode(Wlmwltype wlmwltype) {
        this.wltypecode = wlmwltype;
        return this;
    }

    public void setWltypecode(Wlmwltype wlmwltype) {
        this.wltypecode = wlmwltype;
    }

    public Mematchmethod getMatchmethodcode() {
        return matchmethodcode;
    }

    public Memtdwlcriteria matchmethodcode(Mematchmethod mematchmethod) {
        this.matchmethodcode = mematchmethod;
        return this;
    }

    public void setMatchmethodcode(Mematchmethod mematchmethod) {
        this.matchmethodcode = mematchmethod;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Memtdwlcriteria)) {
            return false;
        }
        return id != null && id.equals(((Memtdwlcriteria) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Memtdwlcriteria{" +
            "id=" + getId() +
            ", wlmid=" + getWlmid() +
            ", name='" + getName() + "'" +
            ", applyonwlfields='" + getApplyonwlfields() + "'" +
            "}";
    }
}
