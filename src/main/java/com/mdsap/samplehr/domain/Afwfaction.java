package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Afwfaction.
 */
@Entity
@Table(schema = "WLF", name = "afwfaction")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afwfaction implements Serializable {

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

    @Column(name = "apprefhandler")
    private String apprefhandler;

    @Column(name = "afsid")
    private Long afsid;

    @Column(name = "afmid")
    private Long afmid;

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
	@JoinColumn(name="appmenucode")
    @JsonIgnoreProperties(value = "afwfactions", allowSetters = true)
    private Afmenuitem appmenucode;

    @ManyToOne
	@JoinColumn(name="appformcode")
    @JsonIgnoreProperties(value = "afwfactions", allowSetters = true)
    private Afform appformcode;

    @ManyToOne
	@JoinColumn(name="appmodulecode")
    @JsonIgnoreProperties(value = "afwfactions", allowSetters = true)
    private Afsysmodule appmodulecode;

    @ManyToOne
	@JoinColumn(name="wfcode")
    @JsonIgnoreProperties(value = "afwfactions", allowSetters = true)
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

    public Afwfaction code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Afwfaction name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Afwfaction descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getApprefhandler() {
        return apprefhandler;
    }

    public Afwfaction apprefhandler(String apprefhandler) {
        this.apprefhandler = apprefhandler;
        return this;
    }

    public void setApprefhandler(String apprefhandler) {
        this.apprefhandler = apprefhandler;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Afwfaction afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public Long getAfmid() {
        return afmid;
    }

    public Afwfaction afmid(Long afmid) {
        this.afmid = afmid;
        return this;
    }

    public void setAfmid(Long afmid) {
        this.afmid = afmid;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afwfaction createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afwfaction updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afwfaction createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afwfaction updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afwfaction wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afwfaction wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public Afmenuitem getAppmenucode() {
        return appmenucode;
    }

    public Afwfaction appmenucode(Afmenuitem afmenuitem) {
        this.appmenucode = afmenuitem;
        return this;
    }

    public void setAppmenucode(Afmenuitem afmenuitem) {
        this.appmenucode = afmenuitem;
    }

    public Afform getAppformcode() {
        return appformcode;
    }

    public Afwfaction appformcode(Afform afform) {
        this.appformcode = afform;
        return this;
    }

    public void setAppformcode(Afform afform) {
        this.appformcode = afform;
    }

    public Afsysmodule getAppmodulecode() {
        return appmodulecode;
    }

    public Afwfaction appmodulecode(Afsysmodule afsysmodule) {
        this.appmodulecode = afsysmodule;
        return this;
    }

    public void setAppmodulecode(Afsysmodule afsysmodule) {
        this.appmodulecode = afsysmodule;
    }

    public Afworkflow getWfcode() {
        return wfcode;
    }

    public Afwfaction wfcode(Afworkflow afworkflow) {
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
        if (!(o instanceof Afwfaction)) {
            return false;
        }
        return id != null && id.equals(((Afwfaction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afwfaction{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", apprefhandler='" + getApprefhandler() + "'" +
            ", afsid=" + getAfsid() +
            ", afmid=" + getAfmid() +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
