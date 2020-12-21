package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Afsauthorization.
 */
@Entity
@Table(schema = "WLF", name = "afsauthorization")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afsauthorization implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "authtype", nullable = false)
    private String authtype;

    @Column(name = "afsid")
    private Long afsid;

    @Column(name = "afsid_2")
    private Long afsid2;

    @Column(name = "afwid")
    private Long afwid;

    @ManyToOne
	@JoinColumn(name="rolecode")
    @JsonIgnoreProperties(value = "afsauthorizations", allowSetters = true)
    private Afsrole rolecode;

    @ManyToOne
	@JoinColumn(name="acccode")
    @JsonIgnoreProperties(value = "afsauthorizations", allowSetters = true)
    private Afwfaction acccode;

    @ManyToOne
	@JoinColumn(name="modulecode")
    @JsonIgnoreProperties(value = "afsauthorizations", allowSetters = true)
    private Afsysmodule modulecode;

    @ManyToOne
	@JoinColumn(name="menuitemcode")
    @JsonIgnoreProperties(value = "afsauthorizations", allowSetters = true)
    private Afmenuitem menuitemcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthtype() {
        return authtype;
    }

    public Afsauthorization authtype(String authtype) {
        this.authtype = authtype;
        return this;
    }

    public void setAuthtype(String authtype) {
        this.authtype = authtype;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Afsauthorization afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public Long getAfsid2() {
        return afsid2;
    }

    public Afsauthorization afsid2(Long afsid2) {
        this.afsid2 = afsid2;
        return this;
    }

    public void setAfsid2(Long afsid2) {
        this.afsid2 = afsid2;
    }

    public Long getAfwid() {
        return afwid;
    }

    public Afsauthorization afwid(Long afwid) {
        this.afwid = afwid;
        return this;
    }

    public void setAfwid(Long afwid) {
        this.afwid = afwid;
    }

    public Afsrole getRolecode() {
        return rolecode;
    }

    public Afsauthorization rolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
        return this;
    }

    public void setRolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
    }

    public Afwfaction getAcccode() {
        return acccode;
    }

    public Afsauthorization acccode(Afwfaction afwfaction) {
        this.acccode = afwfaction;
        return this;
    }

    public void setAcccode(Afwfaction afwfaction) {
        this.acccode = afwfaction;
    }

    public Afsysmodule getModulecode() {
        return modulecode;
    }

    public Afsauthorization modulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
        return this;
    }

    public void setModulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
    }

    public Afmenuitem getMenuitemcode() {
        return menuitemcode;
    }

    public Afsauthorization menuitemcode(Afmenuitem afmenuitem) {
        this.menuitemcode = afmenuitem;
        return this;
    }

    public void setMenuitemcode(Afmenuitem afmenuitem) {
        this.menuitemcode = afmenuitem;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afsauthorization)) {
            return false;
        }
        return id != null && id.equals(((Afsauthorization) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afsauthorization{" +
            "id=" + getId() +
            ", authtype='" + getAuthtype() + "'" +
            ", afsid=" + getAfsid() +
            ", afsid2=" + getAfsid2() +
            ", afwid=" + getAfwid() +
            "}";
    }
}
