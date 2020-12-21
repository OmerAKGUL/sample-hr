package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

import com.mdsap.samplehr.domain.enumeration.Linktype;

/**
 * A Afmenuitem.
 */
@Entity
@Table(schema = "WLF", name = "afmenuitem")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afmenuitem implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "afsid")
    private Long afsid;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "title")
    private String title;

    @Column(name = "descr")
    private String descr;

    @Enumerated(EnumType.STRING)
    @Column(name = "linktype")
    private Linktype linktype;

    @Column(name = "appreflinkurl")
    private String appreflinkurl;

    @ManyToOne
	@JoinColumn(name="modulecode")
    @JsonIgnoreProperties(value = "afmenuitems", allowSetters = true)
    private Afsysmodule modulecode;

    @ManyToOne
	@JoinColumn(name="apprefformcode")
    @JsonIgnoreProperties(value = "afmenuitems", allowSetters = true)
    private Afform apprefformcode;

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

    public Afmenuitem code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Afmenuitem afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public String getName() {
        return name;
    }

    public Afmenuitem name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public Afmenuitem title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescr() {
        return descr;
    }

    public Afmenuitem descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public Linktype getLinktype() {
        return linktype;
    }

    public Afmenuitem linktype(Linktype linktype) {
        this.linktype = linktype;
        return this;
    }

    public void setLinktype(Linktype linktype) {
        this.linktype = linktype;
    }

    public String getAppreflinkurl() {
        return appreflinkurl;
    }

    public Afmenuitem appreflinkurl(String appreflinkurl) {
        this.appreflinkurl = appreflinkurl;
        return this;
    }

    public void setAppreflinkurl(String appreflinkurl) {
        this.appreflinkurl = appreflinkurl;
    }

    public Afsysmodule getModulecode() {
        return modulecode;
    }

    public Afmenuitem modulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
        return this;
    }

    public void setModulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
    }

    public Afform getApprefformcode() {
        return apprefformcode;
    }

    public Afmenuitem apprefformcode(Afform afform) {
        this.apprefformcode = afform;
        return this;
    }

    public void setApprefformcode(Afform afform) {
        this.apprefformcode = afform;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afmenuitem)) {
            return false;
        }
        return id != null && id.equals(((Afmenuitem) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afmenuitem{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", afsid=" + getAfsid() +
            ", name='" + getName() + "'" +
            ", title='" + getTitle() + "'" +
            ", descr='" + getDescr() + "'" +
            ", linktype='" + getLinktype() + "'" +
            ", appreflinkurl='" + getAppreflinkurl() + "'" +
            "}";
    }
}
