package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Afform.
 */
@Entity
@Table(schema = "WLF", name = "afform")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afform implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "descr")
    private String descr;

    @Column(name = "apprefclsid")
    private String apprefclsid;

    @NotNull
    @Column(name = "apprefformid", nullable = false)
    private String apprefformid;

    @Column(name = "appreflinkurl")
    private String appreflinkurl;

    @ManyToOne
	@JoinColumn(name="code")
    @JsonIgnoreProperties(value = "afforms", allowSetters = true)
    private Afsysmodule code;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Afform title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescr() {
        return descr;
    }

    public Afform descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getApprefclsid() {
        return apprefclsid;
    }

    public Afform apprefclsid(String apprefclsid) {
        this.apprefclsid = apprefclsid;
        return this;
    }

    public void setApprefclsid(String apprefclsid) {
        this.apprefclsid = apprefclsid;
    }

    public String getApprefformid() {
        return apprefformid;
    }

    public Afform apprefformid(String apprefformid) {
        this.apprefformid = apprefformid;
        return this;
    }

    public void setApprefformid(String apprefformid) {
        this.apprefformid = apprefformid;
    }

    public String getAppreflinkurl() {
        return appreflinkurl;
    }

    public Afform appreflinkurl(String appreflinkurl) {
        this.appreflinkurl = appreflinkurl;
        return this;
    }

    public void setAppreflinkurl(String appreflinkurl) {
        this.appreflinkurl = appreflinkurl;
    }

    public Afsysmodule getCode() {
        return code;
    }

    public Afform code(Afsysmodule afsysmodule) {
        this.code = afsysmodule;
        return this;
    }

    public void setCode(Afsysmodule afsysmodule) {
        this.code = afsysmodule;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afform)) {
            return false;
        }
        return id != null && id.equals(((Afform) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afform{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", descr='" + getDescr() + "'" +
            ", apprefclsid='" + getApprefclsid() + "'" +
            ", apprefformid='" + getApprefformid() + "'" +
            ", appreflinkurl='" + getAppreflinkurl() + "'" +
            "}";
    }
}
