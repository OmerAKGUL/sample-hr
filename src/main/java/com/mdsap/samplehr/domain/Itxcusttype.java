package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Itxcusttype.
 */
@Entity
@Table(schema = "WLF", name = "itxcusttype")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcusttype implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "descr")
    private String descr;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Itxcusttype name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Itxcusttype descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcusttype)) {
            return false;
        }
        return id != null && id.equals(((Itxcusttype) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcusttype{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            "}";
    }
}
