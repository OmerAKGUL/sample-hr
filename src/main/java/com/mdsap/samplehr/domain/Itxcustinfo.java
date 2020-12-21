package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;

import com.mdsap.samplehr.domain.enumeration.Idtype;

/**
 * A Itxcustinfo.
 */
@Entity
@Table(schema = "WLF", name = "itxcustinfo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcustinfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "srcsyscustid")
    private String srcsyscustid;

    @Column(name = "itxid")
    private Long itxid;

    @Column(name = "name")
    private String name;

    @Column(name = "midname")
    private String midname;

    @Column(name = "surname")
    private String surname;

    @Column(name = "birthdate")
    private LocalDate birthdate;

    @Column(name = "commtitle")
    private String commtitle;

    @Column(name = "addresstype")
    private String addresstype;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "nationalid")
    private String nationalid;

    @Column(name = "gender")
    private String gender;

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

    @Enumerated(EnumType.STRING)
    @Column(name = "idtype_1")
    private Idtype idtype1;

    @Column(name = "idno_1")
    private String idno1;

    @Enumerated(EnumType.STRING)
    @Column(name = "idtype_2")
    private Idtype idtype2;

    @Column(name = "idno_2")
    private String idno2;

    @Enumerated(EnumType.STRING)
    @Column(name = "idtype_3")
    private Idtype idtype3;

    @Column(name = "idno_3")
    private String idno3;

    @ManyToOne
	@JoinColumn(name="custorgid")
    @JsonIgnoreProperties(value = "itxcustinfos", allowSetters = true)
    private Itxorganization custorgid;

    @ManyToOne
	@JoinColumn(name="custtype")
    @JsonIgnoreProperties(value = "itxcustinfos", allowSetters = true)
    private Itxcusttype custtype;

    @ManyToOne
	@JoinColumn(name="srcsyscode")
    @JsonIgnoreProperties(value = "itxcustinfos", allowSetters = true)
    private Afsystem srcsyscode;

    @ManyToOne
	@JoinColumn(name="custorgbrachid")
    @JsonIgnoreProperties(value = "itxcustinfos", allowSetters = true)
    private Itxorgbranch custorgbrachid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSrcsyscustid() {
        return srcsyscustid;
    }

    public Itxcustinfo srcsyscustid(String srcsyscustid) {
        this.srcsyscustid = srcsyscustid;
        return this;
    }

    public void setSrcsyscustid(String srcsyscustid) {
        this.srcsyscustid = srcsyscustid;
    }

    public Long getItxid() {
        return itxid;
    }

    public Itxcustinfo itxid(Long itxid) {
        this.itxid = itxid;
        return this;
    }

    public void setItxid(Long itxid) {
        this.itxid = itxid;
    }

    public String getName() {
        return name;
    }

    public Itxcustinfo name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMidname() {
        return midname;
    }

    public Itxcustinfo midname(String midname) {
        this.midname = midname;
        return this;
    }

    public void setMidname(String midname) {
        this.midname = midname;
    }

    public String getSurname() {
        return surname;
    }

    public Itxcustinfo surname(String surname) {
        this.surname = surname;
        return this;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public Itxcustinfo birthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
        return this;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public String getCommtitle() {
        return commtitle;
    }

    public Itxcustinfo commtitle(String commtitle) {
        this.commtitle = commtitle;
        return this;
    }

    public void setCommtitle(String commtitle) {
        this.commtitle = commtitle;
    }

    public String getAddresstype() {
        return addresstype;
    }

    public Itxcustinfo addresstype(String addresstype) {
        this.addresstype = addresstype;
        return this;
    }

    public void setAddresstype(String addresstype) {
        this.addresstype = addresstype;
    }

    public String getAddress() {
        return address;
    }

    public Itxcustinfo address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public Itxcustinfo city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNationality() {
        return nationality;
    }

    public Itxcustinfo nationality(String nationality) {
        this.nationality = nationality;
        return this;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getNationalid() {
        return nationalid;
    }

    public Itxcustinfo nationalid(String nationalid) {
        this.nationalid = nationalid;
        return this;
    }

    public void setNationalid(String nationalid) {
        this.nationalid = nationalid;
    }

    public String getGender() {
        return gender;
    }

    public Itxcustinfo gender(String gender) {
        this.gender = gender;
        return this;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Itxcustinfo createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Itxcustinfo updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Itxcustinfo createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Itxcustinfo updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Itxcustinfo wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Itxcustinfo wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Idtype getIdtype1() {
        return idtype1;
    }

    public Itxcustinfo idtype1(Idtype idtype1) {
        this.idtype1 = idtype1;
        return this;
    }

    public void setIdtype1(Idtype idtype1) {
        this.idtype1 = idtype1;
    }

    public String getIdno1() {
        return idno1;
    }

    public Itxcustinfo idno1(String idno1) {
        this.idno1 = idno1;
        return this;
    }

    public void setIdno1(String idno1) {
        this.idno1 = idno1;
    }

    public Idtype getIdtype2() {
        return idtype2;
    }

    public Itxcustinfo idtype2(Idtype idtype2) {
        this.idtype2 = idtype2;
        return this;
    }

    public void setIdtype2(Idtype idtype2) {
        this.idtype2 = idtype2;
    }

    public String getIdno2() {
        return idno2;
    }

    public Itxcustinfo idno2(String idno2) {
        this.idno2 = idno2;
        return this;
    }

    public void setIdno2(String idno2) {
        this.idno2 = idno2;
    }

    public Idtype getIdtype3() {
        return idtype3;
    }

    public Itxcustinfo idtype3(Idtype idtype3) {
        this.idtype3 = idtype3;
        return this;
    }

    public void setIdtype3(Idtype idtype3) {
        this.idtype3 = idtype3;
    }

    public String getIdno3() {
        return idno3;
    }

    public Itxcustinfo idno3(String idno3) {
        this.idno3 = idno3;
        return this;
    }

    public void setIdno3(String idno3) {
        this.idno3 = idno3;
    }

    public Itxorganization getCustorgid() {
        return custorgid;
    }

    public Itxcustinfo custorgid(Itxorganization itxorganization) {
        this.custorgid = itxorganization;
        return this;
    }

    public void setCustorgid(Itxorganization itxorganization) {
        this.custorgid = itxorganization;
    }

    public Itxcusttype getCusttype() {
        return custtype;
    }

    public Itxcustinfo custtype(Itxcusttype itxcusttype) {
        this.custtype = itxcusttype;
        return this;
    }

    public void setCusttype(Itxcusttype itxcusttype) {
        this.custtype = itxcusttype;
    }

    public Afsystem getSrcsyscode() {
        return srcsyscode;
    }

    public Itxcustinfo srcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
        return this;
    }

    public void setSrcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
    }

    public Itxorgbranch getCustorgbrachid() {
        return custorgbrachid;
    }

    public Itxcustinfo custorgbrachid(Itxorgbranch itxorgbranch) {
        this.custorgbrachid = itxorgbranch;
        return this;
    }

    public void setCustorgbrachid(Itxorgbranch itxorgbranch) {
        this.custorgbrachid = itxorgbranch;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcustinfo)) {
            return false;
        }
        return id != null && id.equals(((Itxcustinfo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcustinfo{" +
            "id=" + getId() +
            ", srcsyscustid='" + getSrcsyscustid() + "'" +
            ", itxid=" + getItxid() +
            ", name='" + getName() + "'" +
            ", midname='" + getMidname() + "'" +
            ", surname='" + getSurname() + "'" +
            ", birthdate='" + getBirthdate() + "'" +
            ", commtitle='" + getCommtitle() + "'" +
            ", addresstype='" + getAddresstype() + "'" +
            ", address='" + getAddress() + "'" +
            ", city='" + getCity() + "'" +
            ", nationality='" + getNationality() + "'" +
            ", nationalid='" + getNationalid() + "'" +
            ", gender='" + getGender() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            ", idtype1='" + getIdtype1() + "'" +
            ", idno1='" + getIdno1() + "'" +
            ", idtype2='" + getIdtype2() + "'" +
            ", idno2='" + getIdno2() + "'" +
            ", idtype3='" + getIdtype3() + "'" +
            ", idno3='" + getIdno3() + "'" +
            "}";
    }
}
