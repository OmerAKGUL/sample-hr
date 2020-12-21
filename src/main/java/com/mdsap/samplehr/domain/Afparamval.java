package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

import com.mdsap.samplehr.domain.enumeration.Paramtype;

import com.mdsap.samplehr.domain.enumeration.Valtype;

/**
 * A Afparamval.
 */
@Entity
@Table(schema = "WLF", name = "afparamval")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afparamval implements Serializable {

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
    @Column(name = "idxno", nullable = false)
    private Integer idxno;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "paramtype", nullable = false)
    private Paramtype paramtype;

    @NotNull
    @Column(name = "paramgrpname", nullable = false)
    private String paramgrpname;

    @Enumerated(EnumType.STRING)
    @Column(name = "valuetype")
    private Valtype valuetype;

    @Column(name = "valueformat")
    private String valueformat;

    @Column(name = "valueunit")
    private String valueunit;

    @Column(name = "value")
    private String value;

    @Column(name = "descr")
    private String descr;

    @Column(name = "ownersys")
    private String ownersys;

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

    public Afparamval code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getIdxno() {
        return idxno;
    }

    public Afparamval idxno(Integer idxno) {
        this.idxno = idxno;
        return this;
    }

    public void setIdxno(Integer idxno) {
        this.idxno = idxno;
    }

    public Paramtype getParamtype() {
        return paramtype;
    }

    public Afparamval paramtype(Paramtype paramtype) {
        this.paramtype = paramtype;
        return this;
    }

    public void setParamtype(Paramtype paramtype) {
        this.paramtype = paramtype;
    }

    public String getParamgrpname() {
        return paramgrpname;
    }

    public Afparamval paramgrpname(String paramgrpname) {
        this.paramgrpname = paramgrpname;
        return this;
    }

    public void setParamgrpname(String paramgrpname) {
        this.paramgrpname = paramgrpname;
    }

    public Valtype getValuetype() {
        return valuetype;
    }

    public Afparamval valuetype(Valtype valuetype) {
        this.valuetype = valuetype;
        return this;
    }

    public void setValuetype(Valtype valuetype) {
        this.valuetype = valuetype;
    }

    public String getValueformat() {
        return valueformat;
    }

    public Afparamval valueformat(String valueformat) {
        this.valueformat = valueformat;
        return this;
    }

    public void setValueformat(String valueformat) {
        this.valueformat = valueformat;
    }

    public String getValueunit() {
        return valueunit;
    }

    public Afparamval valueunit(String valueunit) {
        this.valueunit = valueunit;
        return this;
    }

    public void setValueunit(String valueunit) {
        this.valueunit = valueunit;
    }

    public String getValue() {
        return value;
    }

    public Afparamval value(String value) {
        this.value = value;
        return this;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDescr() {
        return descr;
    }

    public Afparamval descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getOwnersys() {
        return ownersys;
    }

    public Afparamval ownersys(String ownersys) {
        this.ownersys = ownersys;
        return this;
    }

    public void setOwnersys(String ownersys) {
        this.ownersys = ownersys;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afparamval createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afparamval updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afparamval createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afparamval updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afparamval wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afparamval wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afparamval)) {
            return false;
        }
        return id != null && id.equals(((Afparamval) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afparamval{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", idxno=" + getIdxno() +
            ", paramtype='" + getParamtype() + "'" +
            ", paramgrpname='" + getParamgrpname() + "'" +
            ", valuetype='" + getValuetype() + "'" +
            ", valueformat='" + getValueformat() + "'" +
            ", valueunit='" + getValueunit() + "'" +
            ", value='" + getValue() + "'" +
            ", descr='" + getDescr() + "'" +
            ", ownersys='" + getOwnersys() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
