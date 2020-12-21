package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;

/**
 * A Wlmwldata.
 */
@Entity
@Table(schema = "WLF", name = "wlmwldata")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Wlmwldata implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "createdt")
    private Instant createdt;

    @Column(name = "updatedt")
    private Instant updatedt;

    @Column(name = "createusr")
    private Integer createusr;

    @Column(name = "updateusr")
    private Integer updateusr;

    @Column(name = "wfstate")
    private String wfstate;

    @Column(name = "wfprocid")
    private Integer wfprocid;

    @Column(name = "namedata")
    private String namedata;

    @Column(name = "addressdata")
    private String addressdata;

    @Column(name = "citydata")
    private String citydata;

    @Column(name = "countrydata")
    private String countrydata;

    @Column(name = "birthdatedata")
    private LocalDate birthdatedata;

    @Column(name = "tinnumberdata")
    private String tinnumberdata;

    @ManyToOne
	@JoinColumn(name="wlmwltype")
    @JsonIgnoreProperties(value = "wlmwldata", allowSetters = true)
    private Wlmwltype wlmwltype;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Wlmwldata createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Wlmwldata updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Wlmwldata createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Wlmwldata updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Wlmwldata wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Wlmwldata wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public String getNamedata() {
        return namedata;
    }

    public Wlmwldata namedata(String namedata) {
        this.namedata = namedata;
        return this;
    }

    public void setNamedata(String namedata) {
        this.namedata = namedata;
    }

    public String getAddressdata() {
        return addressdata;
    }

    public Wlmwldata addressdata(String addressdata) {
        this.addressdata = addressdata;
        return this;
    }

    public void setAddressdata(String addressdata) {
        this.addressdata = addressdata;
    }

    public String getCitydata() {
        return citydata;
    }

    public Wlmwldata citydata(String citydata) {
        this.citydata = citydata;
        return this;
    }

    public void setCitydata(String citydata) {
        this.citydata = citydata;
    }

    public String getCountrydata() {
        return countrydata;
    }

    public Wlmwldata countrydata(String countrydata) {
        this.countrydata = countrydata;
        return this;
    }

    public void setCountrydata(String countrydata) {
        this.countrydata = countrydata;
    }

    public LocalDate getBirthdatedata() {
        return birthdatedata;
    }

    public Wlmwldata birthdatedata(LocalDate birthdatedata) {
        this.birthdatedata = birthdatedata;
        return this;
    }

    public void setBirthdatedata(LocalDate birthdatedata) {
        this.birthdatedata = birthdatedata;
    }

    public String getTinnumberdata() {
        return tinnumberdata;
    }

    public Wlmwldata tinnumberdata(String tinnumberdata) {
        this.tinnumberdata = tinnumberdata;
        return this;
    }

    public void setTinnumberdata(String tinnumberdata) {
        this.tinnumberdata = tinnumberdata;
    }

    public Wlmwltype getWltype() {
        return wlmwltype;
    }

    public Wlmwldata wltype(Wlmwltype wlmwltype) {
        this.wlmwltype = wlmwltype;
        return this;
    }

    public void setWltype(Wlmwltype wlmwltype) {
        this.wlmwltype = wlmwltype;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Wlmwldata)) {
            return false;
        }
        return id != null && id.equals(((Wlmwldata) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Wlmwldata{" +
            "id=" + getId() +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            ", namedata='" + getNamedata() + "'" +
            ", addressdata='" + getAddressdata() + "'" +
            ", citydata='" + getCitydata() + "'" +
            ", countrydata='" + getCountrydata() + "'" +
            ", birthdatedata='" + getBirthdatedata() + "'" +
            ", tinnumberdata='" + getTinnumberdata() + "'" +
            "}";
    }
}
