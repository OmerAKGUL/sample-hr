package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Afwprocaction.
 */
@Entity
@Table(schema = "WLF", name = "afwprocaction")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afwprocaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "actionnote")
    private String actionnote;

    @Column(name = "scheduleddt")
    private Instant scheduleddt;

    @Column(name = "starteddt")
    private Instant starteddt;

    @Column(name = "finisheddt")
    private Instant finisheddt;

    @Column(name = "refdoc_1_url")
    private String refdoc1url;

    @Column(name = "refdoc_2_url")
    private String refdoc2url;

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
	@JoinColumn(name="procid")
    @JsonIgnoreProperties(value = "afwprocactions", allowSetters = true)
    private Afwprocess procid;

    @ManyToOne
	@JoinColumn(name="actioncode")
    @JsonIgnoreProperties(value = "afwprocactions", allowSetters = true)
    private Afwfaction actioncode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActionnote() {
        return actionnote;
    }

    public Afwprocaction actionnote(String actionnote) {
        this.actionnote = actionnote;
        return this;
    }

    public void setActionnote(String actionnote) {
        this.actionnote = actionnote;
    }

    public Instant getScheduleddt() {
        return scheduleddt;
    }

    public Afwprocaction scheduleddt(Instant scheduleddt) {
        this.scheduleddt = scheduleddt;
        return this;
    }

    public void setScheduleddt(Instant scheduleddt) {
        this.scheduleddt = scheduleddt;
    }

    public Instant getStarteddt() {
        return starteddt;
    }

    public Afwprocaction starteddt(Instant starteddt) {
        this.starteddt = starteddt;
        return this;
    }

    public void setStarteddt(Instant starteddt) {
        this.starteddt = starteddt;
    }

    public Instant getFinisheddt() {
        return finisheddt;
    }

    public Afwprocaction finisheddt(Instant finisheddt) {
        this.finisheddt = finisheddt;
        return this;
    }

    public void setFinisheddt(Instant finisheddt) {
        this.finisheddt = finisheddt;
    }

    public String getRefdoc1url() {
        return refdoc1url;
    }

    public Afwprocaction refdoc1url(String refdoc1url) {
        this.refdoc1url = refdoc1url;
        return this;
    }

    public void setRefdoc1url(String refdoc1url) {
        this.refdoc1url = refdoc1url;
    }

    public String getRefdoc2url() {
        return refdoc2url;
    }

    public Afwprocaction refdoc2url(String refdoc2url) {
        this.refdoc2url = refdoc2url;
        return this;
    }

    public void setRefdoc2url(String refdoc2url) {
        this.refdoc2url = refdoc2url;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afwprocaction createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afwprocaction updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afwprocaction createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afwprocaction updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afwprocaction wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afwprocaction wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afwprocess getProcid() {
        return procid;
    }

    public Afwprocaction procid(Afwprocess afwprocess) {
        this.procid = afwprocess;
        return this;
    }

    public void setProcid(Afwprocess afwprocess) {
        this.procid = afwprocess;
    }

    public Afwfaction getActioncode() {
        return actioncode;
    }

    public Afwprocaction actioncode(Afwfaction afwfaction) {
        this.actioncode = afwfaction;
        return this;
    }

    public void setActioncode(Afwfaction afwfaction) {
        this.actioncode = afwfaction;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afwprocaction)) {
            return false;
        }
        return id != null && id.equals(((Afwprocaction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afwprocaction{" +
            "id=" + getId() +
            ", actionnote='" + getActionnote() + "'" +
            ", scheduleddt='" + getScheduleddt() + "'" +
            ", starteddt='" + getStarteddt() + "'" +
            ", finisheddt='" + getFinisheddt() + "'" +
            ", refdoc1url='" + getRefdoc1url() + "'" +
            ", refdoc2url='" + getRefdoc2url() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
