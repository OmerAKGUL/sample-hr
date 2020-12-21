package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Afetljobtype.
 */
@Entity
@Table(schema = "WLF", name = "afetljobtype")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afetljobtype implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "jobname", nullable = false)
    private String jobname;

    @Column(name = "apprefid")
    private String apprefid;

    @Column(name = "srcdataprofile")
    private String srcdataprofile;

    @Column(name = "tgtdataprofile")
    private String tgtdataprofile;

    @Column(name = "afsid")
    private Long afsid;

    @Column(name = "srclocurl")
    private String srclocurl;

    @Column(name = "tgtlocurl")
    private String tgtlocurl;

    @Column(name = "srcconntype")
    private String srcconntype;

    @Column(name = "tgtconntype")
    private String tgtconntype;

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
	@JoinColumn(name="srcsyscode")
    @JsonIgnoreProperties(value = "afetljobtypes", allowSetters = true)
    private Afsystem srcsyscode;

    @ManyToOne
	@JoinColumn(name="tgtsyscode")
    @JsonIgnoreProperties(value = "afetljobtypes", allowSetters = true)
    private Afsystem tgtsyscode;

    @ManyToOne
	@JoinColumn(name="scheduleid")
    @JsonIgnoreProperties(value = "afetljobtypes", allowSetters = true)
    private Afschedule scheduleid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobname() {
        return jobname;
    }

    public Afetljobtype jobname(String jobname) {
        this.jobname = jobname;
        return this;
    }

    public void setJobname(String jobname) {
        this.jobname = jobname;
    }

    public String getApprefid() {
        return apprefid;
    }

    public Afetljobtype apprefid(String apprefid) {
        this.apprefid = apprefid;
        return this;
    }

    public void setApprefid(String apprefid) {
        this.apprefid = apprefid;
    }

    public String getSrcdataprofile() {
        return srcdataprofile;
    }

    public Afetljobtype srcdataprofile(String srcdataprofile) {
        this.srcdataprofile = srcdataprofile;
        return this;
    }

    public void setSrcdataprofile(String srcdataprofile) {
        this.srcdataprofile = srcdataprofile;
    }

    public String getTgtdataprofile() {
        return tgtdataprofile;
    }

    public Afetljobtype tgtdataprofile(String tgtdataprofile) {
        this.tgtdataprofile = tgtdataprofile;
        return this;
    }

    public void setTgtdataprofile(String tgtdataprofile) {
        this.tgtdataprofile = tgtdataprofile;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Afetljobtype afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public String getSrclocurl() {
        return srclocurl;
    }

    public Afetljobtype srclocurl(String srclocurl) {
        this.srclocurl = srclocurl;
        return this;
    }

    public void setSrclocurl(String srclocurl) {
        this.srclocurl = srclocurl;
    }

    public String getTgtlocurl() {
        return tgtlocurl;
    }

    public Afetljobtype tgtlocurl(String tgtlocurl) {
        this.tgtlocurl = tgtlocurl;
        return this;
    }

    public void setTgtlocurl(String tgtlocurl) {
        this.tgtlocurl = tgtlocurl;
    }

    public String getSrcconntype() {
        return srcconntype;
    }

    public Afetljobtype srcconntype(String srcconntype) {
        this.srcconntype = srcconntype;
        return this;
    }

    public void setSrcconntype(String srcconntype) {
        this.srcconntype = srcconntype;
    }

    public String getTgtconntype() {
        return tgtconntype;
    }

    public Afetljobtype tgtconntype(String tgtconntype) {
        this.tgtconntype = tgtconntype;
        return this;
    }

    public void setTgtconntype(String tgtconntype) {
        this.tgtconntype = tgtconntype;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afetljobtype createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afetljobtype updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afetljobtype createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afetljobtype updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afetljobtype wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afetljobtype wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afsystem getSrcsyscode() {
        return srcsyscode;
    }

    public Afetljobtype srcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
        return this;
    }

    public void setSrcsyscode(Afsystem afsystem) {
        this.srcsyscode = afsystem;
    }

    public Afsystem getTgtsyscode() {
        return tgtsyscode;
    }

    public Afetljobtype tgtsyscode(Afsystem afsystem) {
        this.tgtsyscode = afsystem;
        return this;
    }

    public void setTgtsyscode(Afsystem afsystem) {
        this.tgtsyscode = afsystem;
    }

    public Afschedule getScheduleid() {
        return scheduleid;
    }

    public Afetljobtype scheduleid(Afschedule afschedule) {
        this.scheduleid = afschedule;
        return this;
    }

    public void setScheduleid(Afschedule afschedule) {
        this.scheduleid = afschedule;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afetljobtype)) {
            return false;
        }
        return id != null && id.equals(((Afetljobtype) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afetljobtype{" +
            "id=" + getId() +
            ", jobname='" + getJobname() + "'" +
            ", apprefid='" + getApprefid() + "'" +
            ", srcdataprofile='" + getSrcdataprofile() + "'" +
            ", tgtdataprofile='" + getTgtdataprofile() + "'" +
            ", afsid=" + getAfsid() +
            ", srclocurl='" + getSrclocurl() + "'" +
            ", tgtlocurl='" + getTgtlocurl() + "'" +
            ", srcconntype='" + getSrcconntype() + "'" +
            ", tgtconntype='" + getTgtconntype() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
