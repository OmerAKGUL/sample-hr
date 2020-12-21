package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Itxdictionary.
 */
@Entity
@Table(schema = "WLF", name = "itxdictionary")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxdictionary implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "termname", nullable = false)
    private String termname;

    @NotNull
    @Column(name = "type", nullable = false)
    private String type;

    @ManyToOne
	@JoinColumn(name="countryisocode")
    @JsonIgnoreProperties(value = "itxdictionaries", allowSetters = true)
    private Itxcountry countryisocode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTermname() {
        return termname;
    }

    public Itxdictionary termname(String termname) {
        this.termname = termname;
        return this;
    }

    public void setTermname(String termname) {
        this.termname = termname;
    }

    public String getType() {
        return type;
    }

    public Itxdictionary type(String type) {
        this.type = type;
        return this;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Itxcountry getCountryisocode() {
        return countryisocode;
    }

    public Itxdictionary countryisocode(Itxcountry itxcountry) {
        this.countryisocode = itxcountry;
        return this;
    }

    public void setCountryisocode(Itxcountry itxcountry) {
        this.countryisocode = itxcountry;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxdictionary)) {
            return false;
        }
        return id != null && id.equals(((Itxdictionary) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxdictionary{" +
            "id=" + getId() +
            ", termname='" + getTermname() + "'" +
            ", type='" + getType() + "'" +
            "}";
    }
}
