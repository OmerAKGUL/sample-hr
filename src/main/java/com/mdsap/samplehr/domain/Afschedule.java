package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

import com.mdsap.samplehr.domain.enumeration.Periodunit;

/**
 * A Afschedule.
 */
@Entity
@Table(schema = "WLF", name = "afschedule")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afschedule implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "descr")
    private String descr;

    @Column(name = "dtvalidfrom")
    private Instant dtvalidfrom;

    @Column(name = "dtvaliduntil")
    private Instant dtvaliduntil;

    @Enumerated(EnumType.STRING)
    @Column(name = "periodunit")
    private Periodunit periodunit;

    @Column(name = "period")
    private Integer period;

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

    public String getName() {
        return name;
    }

    public Afschedule name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Afschedule descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public Instant getDtvalidfrom() {
        return dtvalidfrom;
    }

    public Afschedule dtvalidfrom(Instant dtvalidfrom) {
        this.dtvalidfrom = dtvalidfrom;
        return this;
    }

    public void setDtvalidfrom(Instant dtvalidfrom) {
        this.dtvalidfrom = dtvalidfrom;
    }

    public Instant getDtvaliduntil() {
        return dtvaliduntil;
    }

    public Afschedule dtvaliduntil(Instant dtvaliduntil) {
        this.dtvaliduntil = dtvaliduntil;
        return this;
    }

    public void setDtvaliduntil(Instant dtvaliduntil) {
        this.dtvaliduntil = dtvaliduntil;
    }

    public Periodunit getPeriodunit() {
        return periodunit;
    }

    public Afschedule periodunit(Periodunit periodunit) {
        this.periodunit = periodunit;
        return this;
    }

    public void setPeriodunit(Periodunit periodunit) {
        this.periodunit = periodunit;
    }

    public Integer getPeriod() {
        return period;
    }

    public Afschedule period(Integer period) {
        this.period = period;
        return this;
    }

    public void setPeriod(Integer period) {
        this.period = period;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Afschedule createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Afschedule updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Afschedule createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Afschedule updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Afschedule wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Afschedule wfprocid(Integer wfprocid) {
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
        if (!(o instanceof Afschedule)) {
            return false;
        }
        return id != null && id.equals(((Afschedule) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afschedule{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", dtvalidfrom='" + getDtvalidfrom() + "'" +
            ", dtvaliduntil='" + getDtvaliduntil() + "'" +
            ", periodunit='" + getPeriodunit() + "'" +
            ", period=" + getPeriod() +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            "}";
    }
}
