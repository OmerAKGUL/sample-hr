package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.mdsap.samplehr.domain.enumeration.Addrtype;

/**
 * A Itxcustadressinfo.
 */
@Entity
@Table(schema = "WLF", name = "itxcustadressinfo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcustadressinfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "addrtype")
    private Addrtype addrtype;

    @Column(name = "addresstxt")
    private String addresstxt;

    @Column(name = "addrline_1")
    private String addrline1;

    @Column(name = "addrline_2")
    private String addrline2;

    @Column(name = "postcode")
    private String postcode;

    @Column(name = "street_1")
    private String street1;

    @Column(name = "street_2")
    private String street2;

    @Column(name = "street_3")
    private String street3;

    @Column(name = "town")
    private String town;

    @Column(name = "county")
    private String county;

    @Column(name = "city")
    private String city;

    @ManyToOne
	@JoinColumn(name="country")
    @JsonIgnoreProperties(value = "itxcustadressinfos", allowSetters = true)
    private Itxcountry country;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Addrtype getAddrtype() {
        return addrtype;
    }

    public Itxcustadressinfo addrtype(Addrtype addrtype) {
        this.addrtype = addrtype;
        return this;
    }

    public void setAddrtype(Addrtype addrtype) {
        this.addrtype = addrtype;
    }

    public String getAddresstxt() {
        return addresstxt;
    }

    public Itxcustadressinfo addresstxt(String addresstxt) {
        this.addresstxt = addresstxt;
        return this;
    }

    public void setAddresstxt(String addresstxt) {
        this.addresstxt = addresstxt;
    }

    public String getAddrline1() {
        return addrline1;
    }

    public Itxcustadressinfo addrline1(String addrline1) {
        this.addrline1 = addrline1;
        return this;
    }

    public void setAddrline1(String addrline1) {
        this.addrline1 = addrline1;
    }

    public String getAddrline2() {
        return addrline2;
    }

    public Itxcustadressinfo addrline2(String addrline2) {
        this.addrline2 = addrline2;
        return this;
    }

    public void setAddrline2(String addrline2) {
        this.addrline2 = addrline2;
    }

    public String getPostcode() {
        return postcode;
    }

    public Itxcustadressinfo postcode(String postcode) {
        this.postcode = postcode;
        return this;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getStreet1() {
        return street1;
    }

    public Itxcustadressinfo street1(String street1) {
        this.street1 = street1;
        return this;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getStreet2() {
        return street2;
    }

    public Itxcustadressinfo street2(String street2) {
        this.street2 = street2;
        return this;
    }

    public void setStreet2(String street2) {
        this.street2 = street2;
    }

    public String getStreet3() {
        return street3;
    }

    public Itxcustadressinfo street3(String street3) {
        this.street3 = street3;
        return this;
    }

    public void setStreet3(String street3) {
        this.street3 = street3;
    }

    public String getTown() {
        return town;
    }

    public Itxcustadressinfo town(String town) {
        this.town = town;
        return this;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getCounty() {
        return county;
    }

    public Itxcustadressinfo county(String county) {
        this.county = county;
        return this;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getCity() {
        return city;
    }

    public Itxcustadressinfo city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Itxcountry getCountry() {
        return country;
    }

    public Itxcustadressinfo country(Itxcountry itxcountry) {
        this.country = itxcountry;
        return this;
    }

    public void setCountry(Itxcountry itxcountry) {
        this.country = itxcountry;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcustadressinfo)) {
            return false;
        }
        return id != null && id.equals(((Itxcustadressinfo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcustadressinfo{" +
            "id=" + getId() +
            ", addrtype='" + getAddrtype() + "'" +
            ", addresstxt='" + getAddresstxt() + "'" +
            ", addrline1='" + getAddrline1() + "'" +
            ", addrline2='" + getAddrline2() + "'" +
            ", postcode='" + getPostcode() + "'" +
            ", street1='" + getStreet1() + "'" +
            ", street2='" + getStreet2() + "'" +
            ", street3='" + getStreet3() + "'" +
            ", town='" + getTown() + "'" +
            ", county='" + getCounty() + "'" +
            ", city='" + getCity() + "'" +
            "}";
    }
}
