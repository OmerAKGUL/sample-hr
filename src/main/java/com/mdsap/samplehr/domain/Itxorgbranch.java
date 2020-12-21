package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Itxorgbranch.
 */
@Entity
@Table(schema = "WLF", name = "itxorgbranch")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxorgbranch implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "localname")
    private String localname;

    @Column(name = "brachtype")
    private String brachtype;

    @ManyToOne
	@JoinColumn(name="orgid")
    @JsonIgnoreProperties(value = "itxorgbranches", allowSetters = true)
    private Itxorganization orgid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Itxorgbranch code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Itxorgbranch name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocalname() {
        return localname;
    }

    public Itxorgbranch localname(String localname) {
        this.localname = localname;
        return this;
    }

    public void setLocalname(String localname) {
        this.localname = localname;
    }

    public String getBrachtype() {
        return brachtype;
    }

    public Itxorgbranch brachtype(String brachtype) {
        this.brachtype = brachtype;
        return this;
    }

    public void setBrachtype(String brachtype) {
        this.brachtype = brachtype;
    }

    public Itxorganization getOrgid() {
        return orgid;
    }

    public Itxorgbranch orgid(Itxorganization itxorganization) {
        this.orgid = itxorganization;
        return this;
    }

    public void setOrgid(Itxorganization itxorganization) {
        this.orgid = itxorganization;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxorgbranch)) {
            return false;
        }
        return id != null && id.equals(((Itxorgbranch) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxorgbranch{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", localname='" + getLocalname() + "'" +
            ", brachtype='" + getBrachtype() + "'" +
            "}";
    }
}
