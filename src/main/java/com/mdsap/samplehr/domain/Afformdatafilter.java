package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Afformdatafilter.
 */
@Entity
@Table(schema = "WLF", name = "afformdatafilter")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afformdatafilter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "afsid")
    private Long afsid;

    @Column(name = "affid")
    private Long affid;

    @ManyToOne
	@JoinColumn(name="approlecode")
    @JsonIgnoreProperties(value = "afformdatafilters", allowSetters = true)
    private Afsrole approlecode;

    @ManyToOne
	@JoinColumn(name="appformcode")
    @JsonIgnoreProperties(value = "afformdatafilters", allowSetters = true)
    private Afform appformcode;

    @ManyToOne
	@JoinColumn(name="appdatafiltercode")
    @JsonIgnoreProperties(value = "afformdatafilters", allowSetters = true)
    private Afdatafilter appdatafiltercode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Afformdatafilter afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public Long getAffid() {
        return affid;
    }

    public Afformdatafilter affid(Long affid) {
        this.affid = affid;
        return this;
    }

    public void setAffid(Long affid) {
        this.affid = affid;
    }

    public Afsrole getApprolecode() {
        return approlecode;
    }

    public Afformdatafilter approlecode(Afsrole afsrole) {
        this.approlecode = afsrole;
        return this;
    }

    public void setApprolecode(Afsrole afsrole) {
        this.approlecode = afsrole;
    }

    public Afform getAppformcode() {
        return appformcode;
    }

    public Afformdatafilter appformcode(Afform afform) {
        this.appformcode = afform;
        return this;
    }

    public void setAppformcode(Afform afform) {
        this.appformcode = afform;
    }

    public Afdatafilter getAppdatafiltercode() {
        return appdatafiltercode;
    }

    public Afformdatafilter appdatafiltercode(Afdatafilter afdatafilter) {
        this.appdatafiltercode = afdatafilter;
        return this;
    }

    public void setAppdatafiltercode(Afdatafilter afdatafilter) {
        this.appdatafiltercode = afdatafilter;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afformdatafilter)) {
            return false;
        }
        return id != null && id.equals(((Afformdatafilter) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afformdatafilter{" +
            "id=" + getId() +
            ", afsid=" + getAfsid() +
            ", affid=" + getAffid() +
            "}";
    }
}
