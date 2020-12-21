package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Itxcountry.
 */
@Entity
@Table(schema = "WLF", name = "itxcountry")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcountry implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "isocode", nullable = false)
    private String isocode;

    @Column(name = "name")
    private String name;

    @Column(name = "localname")
    private String localname;

    @Column(name = "isocode2")
    private String isocode2;

    @Column(name = "numcode")
    private Integer numcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsocode() {
        return isocode;
    }

    public Itxcountry isocode(String isocode) {
        this.isocode = isocode;
        return this;
    }

    public void setIsocode(String isocode) {
        this.isocode = isocode;
    }

    public String getName() {
        return name;
    }

    public Itxcountry name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocalname() {
        return localname;
    }

    public Itxcountry localname(String localname) {
        this.localname = localname;
        return this;
    }

    public void setLocalname(String localname) {
        this.localname = localname;
    }

    public String getIsocode2() {
        return isocode2;
    }

    public Itxcountry isocode2(String isocode2) {
        this.isocode2 = isocode2;
        return this;
    }

    public void setIsocode2(String isocode2) {
        this.isocode2 = isocode2;
    }

    public Integer getNumcode() {
        return numcode;
    }

    public Itxcountry numcode(Integer numcode) {
        this.numcode = numcode;
        return this;
    }

    public void setNumcode(Integer numcode) {
        this.numcode = numcode;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcountry)) {
            return false;
        }
        return id != null && id.equals(((Itxcountry) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcountry{" +
            "id=" + getId() +
            ", isocode='" + getIsocode() + "'" +
            ", name='" + getName() + "'" +
            ", localname='" + getLocalname() + "'" +
            ", isocode2='" + getIsocode2() + "'" +
            ", numcode=" + getNumcode() +
            "}";
    }
}
