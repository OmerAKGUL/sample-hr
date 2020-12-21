package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

import com.mdsap.samplehr.domain.enumeration.Systype;

/**
 * A Afsystem.
 */
@Entity
@Table(schema = "WLF", name = "afsystem")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afsystem implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "descr")
    private String descr;

    @Column(name = "apprefcode")
    private String apprefcode;

    @Enumerated(EnumType.STRING)
    @Column(name = "systype")
    private Systype systype;

    @Column(name = "appdomaincode")
    private String appdomaincode;

    @Column(name = "connecttype")
    private String connecttype;

    @Column(name = "connectstr")
    private String connectstr;

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

    public Afsystem code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Afsystem name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Afsystem descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getApprefcode() {
        return apprefcode;
    }

    public Afsystem apprefcode(String apprefcode) {
        this.apprefcode = apprefcode;
        return this;
    }

    public void setApprefcode(String apprefcode) {
        this.apprefcode = apprefcode;
    }

    public Systype getSystype() {
        return systype;
    }

    public Afsystem systype(Systype systype) {
        this.systype = systype;
        return this;
    }

    public void setSystype(Systype systype) {
        this.systype = systype;
    }

    public String getAppdomaincode() {
        return appdomaincode;
    }

    public Afsystem appdomaincode(String appdomaincode) {
        this.appdomaincode = appdomaincode;
        return this;
    }

    public void setAppdomaincode(String appdomaincode) {
        this.appdomaincode = appdomaincode;
    }

    public String getConnecttype() {
        return connecttype;
    }

    public Afsystem connecttype(String connecttype) {
        this.connecttype = connecttype;
        return this;
    }

    public void setConnecttype(String connecttype) {
        this.connecttype = connecttype;
    }

    public String getConnectstr() {
        return connectstr;
    }

    public Afsystem connectstr(String connectstr) {
        this.connectstr = connectstr;
        return this;
    }

    public void setConnectstr(String connectstr) {
        this.connectstr = connectstr;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afsystem)) {
            return false;
        }
        return id != null && id.equals(((Afsystem) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afsystem{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", apprefcode='" + getApprefcode() + "'" +
            ", systype='" + getSystype() + "'" +
            ", appdomaincode='" + getAppdomaincode() + "'" +
            ", connecttype='" + getConnecttype() + "'" +
            ", connectstr='" + getConnectstr() + "'" +
            "}";
    }
}
