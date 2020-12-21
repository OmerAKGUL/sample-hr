package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Iwlimportqueue.
 */
@Entity
@Table(schema = "WLF", name = "iwlimportqueue")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Iwlimportqueue implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "etljobstart")
    private Instant etljobstart;

    @Column(name = "etljobsessiond")
    private String etljobsessiond;

    @Column(name = "srcfileurl")
    private String srcfileurl;

    @Column(name = "tgtfileurl")
    private String tgtfileurl;

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
	@JoinColumn(name="etljobtype")
    @JsonIgnoreProperties(value = "iwlimportqueues", allowSetters = true)
    private Afetljobtype etljobtype;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getEtljobstart() {
        return etljobstart;
    }

    public Iwlimportqueue etljobstart(Instant etljobstart) {
        this.etljobstart = etljobstart;
        return this;
    }

    public void setEtljobstart(Instant etljobstart) {
        this.etljobstart = etljobstart;
    }

    public String getEtljobsessiond() {
        return etljobsessiond;
    }

    public Iwlimportqueue etljobsessiond(String etljobsessiond) {
        this.etljobsessiond = etljobsessiond;
        return this;
    }

    public void setEtljobsessiond(String etljobsessiond) {
        this.etljobsessiond = etljobsessiond;
    }

    public String getSrcfileurl() {
        return srcfileurl;
    }

    public Iwlimportqueue srcfileurl(String srcfileurl) {
        this.srcfileurl = srcfileurl;
        return this;
    }

    public void setSrcfileurl(String srcfileurl) {
        this.srcfileurl = srcfileurl;
    }

    public String getTgtfileurl() {
        return tgtfileurl;
    }

    public Iwlimportqueue tgtfileurl(String tgtfileurl) {
        this.tgtfileurl = tgtfileurl;
        return this;
    }

    public void setTgtfileurl(String tgtfileurl) {
        this.tgtfileurl = tgtfileurl;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Iwlimportqueue createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Iwlimportqueue updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Iwlimportqueue createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Iwlimportqueue updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Iwlimportqueue wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Iwlimportqueue wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afetljobtype getEtljobtype() {
        return etljobtype;
    }

    public Iwlimportqueue etljobtype(Afetljobtype afetljobtype) {
        this.etljobtype = afetljobtype;
        return this;
    }

    public void setEtljobtype(Afetljobtype afetljobtype) {
        this.etljobtype = afetljobtype;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Iwlimportqueue)) {
            return false;
        }
        return id != null && id.equals(((Iwlimportqueue) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Iwlimportqueue{" +
            "id=" + getId() +
            ", etljobstart='" + getEtljobstart() + "'" +
            ", etljobsessiond='" + getEtljobsessiond() + "'" +
            ", srcfileurl='" + getSrcfileurl() + "'" +
            ", tgtfileurl='" + getTgtfileurl() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
