package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Itxaccounttinfo.
 */
@Entity
@Table(schema = "WLF", name = "itxaccounttinfo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxaccounttinfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "srcsysacccode")
    private String srcsysacccode;

    @ManyToOne
	@JoinColumn(name="typeid")
    @JsonIgnoreProperties(value = "itxaccounttinfos", allowSetters = true)
    private Itxaccounttype typeid;

    @ManyToOne
	@JoinColumn(name="srcsyscode")
    @JsonIgnoreProperties(value = "itxaccounttinfos", allowSetters = true)
    private Afsystem srcsyscode;

    @ManyToOne
	@JoinColumn(name="ownercustid")
    @JsonIgnoreProperties(value = "itxaccounttinfos", allowSetters = true)
    private Itxcustinfo ownercustid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSrcsysacccode() {
        return srcsysacccode;
    }

    public Itxaccounttinfo srcsysacccode(String srcsysacccode) {
        this.srcsysacccode = srcsysacccode;
        return this;
    }

    public void setSrcsysacccode(String srcsysacccode) {
        this.srcsysacccode = srcsysacccode;
    }

    public Itxaccounttype getTypeid() {
        return typeid;
    }

    public Itxaccounttinfo typeid(Itxaccounttype itxaccounttype) {
        this.typeid = itxaccounttype;
        return this;
    }

    public void setTypeid(Itxaccounttype itxaccounttype) {
        this.typeid = itxaccounttype;
    }

    public Afsystem getSrcsyscode() {
        return srcsyscode;
    }

    public Itxaccounttinfo srcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
        return this;
    }

    public void setSrcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
    }

    public Itxcustinfo getOwnercustid() {
        return ownercustid;
    }

    public Itxaccounttinfo ownercustid(Itxcustinfo itxcustinfo) {
        this.ownercustid = itxcustinfo;
        return this;
    }

    public void setOwnercustid(Itxcustinfo itxcustinfo) {
        this.ownercustid = itxcustinfo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxaccounttinfo)) {
            return false;
        }
        return id != null && id.equals(((Itxaccounttinfo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxaccounttinfo{" +
            "id=" + getId() +
            ", srcsysacccode='" + getSrcsysacccode() + "'" +
            "}";
    }
}
