package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Meinvestproc.
 */
@Entity
@Table(schema = "WLF", name = "meinvestproc")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Meinvestproc implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descr")
    private String descr;

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

    @ManyToOne
	@JoinColumn(name="wfprocid")
    @JsonIgnoreProperties(value = "meinvestprocs", allowSetters = true)
    private Afwprocess wfprocid;

    @ManyToOne
	@JoinColumn(name="invprofile")
    @JsonIgnoreProperties(value = "meinvestprocs", allowSetters = true)
    private Meinvestprofile invprofile;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescr() {
        return descr;
    }

    public Meinvestproc descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Meinvestproc createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Meinvestproc updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Meinvestproc createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Meinvestproc updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Meinvestproc wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Afwprocess getWfprocid() {
        return wfprocid;
    }

    public Meinvestproc wfprocid(Afwprocess afwprocess) {
        this.wfprocid = afwprocess;
        return this;
    }

    public void setWfprocid(Afwprocess afwprocess) {
        this.wfprocid = afwprocess;
    }

    public Meinvestprofile getInvprofile() {
        return invprofile;
    }

    public Meinvestproc invprofile(Meinvestprofile meinvestprofile) {
        this.invprofile = meinvestprofile;
        return this;
    }

    public void setInvprofile(Meinvestprofile meinvestprofile) {
        this.invprofile = meinvestprofile;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Meinvestproc)) {
            return false;
        }
        return id != null && id.equals(((Meinvestproc) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Meinvestproc{" +
            "id=" + getId() +
            ", descr='" + getDescr() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            "}";
    }
}
