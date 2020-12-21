package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Afwfstate.
 */
@Entity
@Table(schema = "WLF", name = "afwfstate")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afwfstate implements Serializable {

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

    @Column(name = "apprefhandlerfrm")
    private String apprefhandlerfrm;

    @Column(name = "apprefhandlerdom")
    private String apprefhandlerdom;

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

    @ManyToOne
	@JoinColumn(name="wfcode")
    @JsonIgnoreProperties(value = "afwfstates", allowSetters = true)
    private Afworkflow wfcode;

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

    public Afwfstate code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Afwfstate name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Afwfstate descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getApprefhandlerfrm() {
        return apprefhandlerfrm;
    }

    public Afwfstate apprefhandlerfrm(String apprefhandlerfrm) {
        this.apprefhandlerfrm = apprefhandlerfrm;
        return this;
    }

    public void setApprefhandlerfrm(String apprefhandlerfrm) {
        this.apprefhandlerfrm = apprefhandlerfrm;
    }

    public String getApprefhandlerdom() {
        return apprefhandlerdom;
    }

    public Afwfstate apprefhandlerdom(String apprefhandlerdom) {
        this.apprefhandlerdom = apprefhandlerdom;
        return this;
    }

    public void setApprefhandlerdom(String apprefhandlerdom) {
        this.apprefhandlerdom = apprefhandlerdom;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afwfstate createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afwfstate updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afwfstate createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afwfstate updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afwfstate wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afwfstate wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afworkflow getWfcode() {
        return wfcode;
    }

    public Afwfstate wfcode(Afworkflow afworkflow) {
        this.wfcode = afworkflow;
        return this;
    }

    public void setWfcode(Afworkflow afworkflow) {
        this.wfcode = afworkflow;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afwfstate)) {
            return false;
        }
        return id != null && id.equals(((Afwfstate) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afwfstate{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", apprefhandlerfrm='" + getApprefhandlerfrm() + "'" +
            ", apprefhandlerdom='" + getApprefhandlerdom() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
