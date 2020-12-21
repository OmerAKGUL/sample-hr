package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Afwprocess.
 */
@Entity
@Table(schema = "WLF", name = "afwprocess")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afwprocess implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "entity", nullable = false)
    private String entity;

    @Column(name = "apprefmngfrm")
    private String apprefmngfrm;

    @Column(name = "apprefmngdomain")
    private String apprefmngdomain;

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
    @JsonIgnoreProperties(value = "afwprocesses", allowSetters = true)
    private Afworkflow wfcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEntity() {
        return entity;
    }

    public Afwprocess entity(String entity) {
        this.entity = entity;
        return this;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

    public String getApprefmngfrm() {
        return apprefmngfrm;
    }

    public Afwprocess apprefmngfrm(String apprefmngfrm) {
        this.apprefmngfrm = apprefmngfrm;
        return this;
    }

    public void setApprefmngfrm(String apprefmngfrm) {
        this.apprefmngfrm = apprefmngfrm;
    }

    public String getApprefmngdomain() {
        return apprefmngdomain;
    }

    public Afwprocess apprefmngdomain(String apprefmngdomain) {
        this.apprefmngdomain = apprefmngdomain;
        return this;
    }

    public void setApprefmngdomain(String apprefmngdomain) {
        this.apprefmngdomain = apprefmngdomain;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afwprocess createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afwprocess updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afwprocess createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afwprocess updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afwprocess wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afwprocess wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afworkflow getWfcode() {
        return wfcode;
    }

    public Afwprocess wfcode(Afworkflow afworkflow) {
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
        if (!(o instanceof Afwprocess)) {
            return false;
        }
        return id != null && id.equals(((Afwprocess) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afwprocess{" +
            "id=" + getId() +
            ", entity='" + getEntity() + "'" +
            ", apprefmngfrm='" + getApprefmngfrm() + "'" +
            ", apprefmngdomain='" + getApprefmngdomain() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
