package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Afsauthentication.
 */
@Entity
@Table(schema = "WLF", name = "afsauthentication")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afsauthentication implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "afsid", nullable = false)
    private Long afsid;

    @NotNull
    @Column(name = "authtype", nullable = false)
    private String authtype;

    @Column(name = "pwdhash")
    private String pwdhash;

    @Column(name = "secprotocol")
    private String secprotocol;

    @Column(name = "appauthlink")
    private String appauthlink;

    @ManyToOne
	@JoinColumn(name="rolecode")
    @JsonIgnoreProperties(value = "afsauthentications", allowSetters = true)
    private Afsrole rolecode;

    @ManyToOne
	@JoinColumn(name="modulecode")
    @JsonIgnoreProperties(value = "afsauthentications", allowSetters = true)
    private Afsysmodule modulecode;

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

    public Afsauthentication afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public String getAuthtype() {
        return authtype;
    }

    public Afsauthentication authtype(String authtype) {
        this.authtype = authtype;
        return this;
    }

    public void setAuthtype(String authtype) {
        this.authtype = authtype;
    }

    public String getPwdhash() {
        return pwdhash;
    }

    public Afsauthentication pwdhash(String pwdhash) {
        this.pwdhash = pwdhash;
        return this;
    }

    public void setPwdhash(String pwdhash) {
        this.pwdhash = pwdhash;
    }

    public String getSecprotocol() {
        return secprotocol;
    }

    public Afsauthentication secprotocol(String secprotocol) {
        this.secprotocol = secprotocol;
        return this;
    }

    public void setSecprotocol(String secprotocol) {
        this.secprotocol = secprotocol;
    }

    public String getAppauthlink() {
        return appauthlink;
    }

    public Afsauthentication appauthlink(String appauthlink) {
        this.appauthlink = appauthlink;
        return this;
    }

    public void setAppauthlink(String appauthlink) {
        this.appauthlink = appauthlink;
    }

    public Afsrole getRolecode() {
        return rolecode;
    }

    public Afsauthentication rolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
        return this;
    }

    public void setRolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
    }

    public Afsysmodule getModulecode() {
        return modulecode;
    }

    public Afsauthentication modulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
        return this;
    }

    public void setModulecode(Afsysmodule afsysmodule) {
        this.modulecode = afsysmodule;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afsauthentication)) {
            return false;
        }
        return id != null && id.equals(((Afsauthentication) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afsauthentication{" +
            "id=" + getId() +
            ", afsid=" + getAfsid() +
            ", authtype='" + getAuthtype() + "'" +
            ", pwdhash='" + getPwdhash() + "'" +
            ", secprotocol='" + getSecprotocol() + "'" +
            ", appauthlink='" + getAppauthlink() + "'" +
            "}";
    }
}
