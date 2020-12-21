package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Wlmwltype.
 */
@Entity
@Table(schema = "WLF", name = "wlmwltype")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Wlmwltype implements Serializable {

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

    @Column(name = "publishercat")
    private String publishercat;

    @Column(name = "publisherorgid")
    private Integer publisherorgid;

    @Column(name = "publishername")
    private String publishername;

    @Column(name = "publishformat")
    private String publishformat;

    @Column(name = "filteringtype")
    private String filteringtype;

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
    private String wfprocid;

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

    public Wlmwltype code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Wlmwltype name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Wlmwltype descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getPublishercat() {
        return publishercat;
    }

    public Wlmwltype publishercat(String publishercat) {
        this.publishercat = publishercat;
        return this;
    }

    public void setPublishercat(String publishercat) {
        this.publishercat = publishercat;
    }

    public Integer getPublisherorgid() {
        return publisherorgid;
    }

    public Wlmwltype publisherorgid(Integer publisherorgid) {
        this.publisherorgid = publisherorgid;
        return this;
    }

    public void setPublisherorgid(Integer publisherorgid) {
        this.publisherorgid = publisherorgid;
    }

    public String getPublishername() {
        return publishername;
    }

    public Wlmwltype publishername(String publishername) {
        this.publishername = publishername;
        return this;
    }

    public void setPublishername(String publishername) {
        this.publishername = publishername;
    }

    public String getPublishformat() {
        return publishformat;
    }

    public Wlmwltype publishformat(String publishformat) {
        this.publishformat = publishformat;
        return this;
    }

    public void setPublishformat(String publishformat) {
        this.publishformat = publishformat;
    }

    public String getFilteringtype() {
        return filteringtype;
    }

    public Wlmwltype filteringtype(String filteringtype) {
        this.filteringtype = filteringtype;
        return this;
    }

    public void setFilteringtype(String filteringtype) {
        this.filteringtype = filteringtype;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Wlmwltype createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Wlmwltype updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Wlmwltype createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Wlmwltype updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Wlmwltype wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public String getWfprocid() {
        return wfprocid;
    }

    public Wlmwltype wfprocid(String wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(String wfprocid) {
        this.wfprocid = wfprocid;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Wlmwltype)) {
            return false;
        }
        return id != null && id.equals(((Wlmwltype) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Wlmwltype{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", publishercat='" + getPublishercat() + "'" +
            ", publisherorgid=" + getPublisherorgid() +
            ", publishername='" + getPublishername() + "'" +
            ", publishformat='" + getPublishformat() + "'" +
            ", filteringtype='" + getFilteringtype() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid='" + getWfprocid() + "'" +
            "}";
    }
}
