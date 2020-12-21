package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Itxcity.
 */
@Entity
@Table(schema = "WLF", name = "itxcity")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "localname")
    private String localname;

    @Column(name = "phonecode")
    private String phonecode;

    @ManyToOne
	@JoinColumn(name="countryisocode")
    @JsonIgnoreProperties(value = "itxcities", allowSetters = true)
    private Itxcountry countryisocode;

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

    public Itxcity name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocalname() {
        return localname;
    }

    public Itxcity localname(String localname) {
        this.localname = localname;
        return this;
    }

    public void setLocalname(String localname) {
        this.localname = localname;
    }

    public String getPhonecode() {
        return phonecode;
    }

    public Itxcity phonecode(String phonecode) {
        this.phonecode = phonecode;
        return this;
    }

    public void setPhonecode(String phonecode) {
        this.phonecode = phonecode;
    }

    public Itxcountry getCountryisocode() {
        return countryisocode;
    }

    public Itxcity countryisocode(Itxcountry itxcountry) {
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
        if (!(o instanceof Itxcity)) {
            return false;
        }
        return id != null && id.equals(((Itxcity) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcity{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", localname='" + getLocalname() + "'" +
            ", phonecode='" + getPhonecode() + "'" +
            "}";
    }
}
