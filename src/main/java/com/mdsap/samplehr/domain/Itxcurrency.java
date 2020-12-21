package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Itxcurrency.
 */
@Entity
@Table(schema = "WLF", name = "itxcurrency")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcurrency implements Serializable {

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

    public Itxcurrency isocode(String isocode) {
        this.isocode = isocode;
        return this;
    }

    public void setIsocode(String isocode) {
        this.isocode = isocode;
    }

    public String getName() {
        return name;
    }

    public Itxcurrency name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocalname() {
        return localname;
    }

    public Itxcurrency localname(String localname) {
        this.localname = localname;
        return this;
    }

    public void setLocalname(String localname) {
        this.localname = localname;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcurrency)) {
            return false;
        }
        return id != null && id.equals(((Itxcurrency) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcurrency{" +
            "id=" + getId() +
            ", isocode='" + getIsocode() + "'" +
            ", name='" + getName() + "'" +
            ", localname='" + getLocalname() + "'" +
            "}";
    }
}
