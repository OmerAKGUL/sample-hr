package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Mematchresult.
 */
@Entity
@Table(schema = "WLF", name = "mematchresult")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Mematchresult implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "matchid", nullable = false)
    private Integer matchid;

    @Column(name = "matchctxid")
    private Integer matchctxid;

    @Column(name = "matchwltype")
    private String matchwltype;

    @Column(name = "matchtxnid")
    private Double matchtxnid;

    @Column(name = "matchscore")
    private Double matchscore;

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
	@JoinColumn(name="matchconfigcode")
    @JsonIgnoreProperties(value = "mematchresults", allowSetters = true)
    private Meconfig matchconfigcode;

    @ManyToOne
	@JoinColumn(name="invprocid")
    @JsonIgnoreProperties(value = "mematchresults", allowSetters = true)
    private Meinvestproc invprocid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getMatchid() {
        return matchid;
    }

    public Mematchresult matchid(Integer matchid) {
        this.matchid = matchid;
        return this;
    }

    public void setMatchid(Integer matchid) {
        this.matchid = matchid;
    }

    public Integer getMatchctxid() {
        return matchctxid;
    }

    public Mematchresult matchctxid(Integer matchctxid) {
        this.matchctxid = matchctxid;
        return this;
    }

    public void setMatchctxid(Integer matchctxid) {
        this.matchctxid = matchctxid;
    }

    public String getMatchwltype() {
        return matchwltype;
    }

    public Mematchresult matchwltype(String matchwltype) {
        this.matchwltype = matchwltype;
        return this;
    }

    public void setMatchwltype(String matchwltype) {
        this.matchwltype = matchwltype;
    }

    public Double getMatchtxnid() {
        return matchtxnid;
    }

    public Mematchresult matchtxnid(Double matchtxnid) {
        this.matchtxnid = matchtxnid;
        return this;
    }

    public void setMatchtxnid(Double matchtxnid) {
        this.matchtxnid = matchtxnid;
    }

    public Double getMatchscore() {
        return matchscore;
    }

    public Mematchresult matchscore(Double matchscore) {
        this.matchscore = matchscore;
        return this;
    }

    public void setMatchscore(Double matchscore) {
        this.matchscore = matchscore;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Mematchresult createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Mematchresult updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Mematchresult createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Mematchresult updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Mematchresult wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Mematchresult wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Meconfig getMatchconfigcode() {
        return matchconfigcode;
    }

    public Mematchresult matchconfigcode(Meconfig meconfig) {
        this.matchconfigcode = meconfig;
        return this;
    }

    public void setMatchconfigcode(Meconfig meconfig) {
        this.matchconfigcode = meconfig;
    }

    public Meinvestproc getInvprocid() {
        return invprocid;
    }

    public Mematchresult invprocid(Meinvestproc meinvestproc) {
        this.invprocid = meinvestproc;
        return this;
    }

    public void setInvprocid(Meinvestproc meinvestproc) {
        this.invprocid = meinvestproc;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Mematchresult)) {
            return false;
        }
        return id != null && id.equals(((Mematchresult) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Mematchresult{" +
            "id=" + getId() +
            ", matchid=" + getMatchid() +
            ", matchctxid=" + getMatchctxid() +
            ", matchwltype='" + getMatchwltype() + "'" +
            ", matchtxnid=" + getMatchtxnid() +
            ", matchscore=" + getMatchscore() +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
