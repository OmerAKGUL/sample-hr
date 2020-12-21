package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Jhiuser.
 */
@Entity
@Table(schema = "WLF", name = "jhiuser")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Jhiuser implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "loginname")
    private String loginname;

    @Column(name = "passwordhash")
    private String passwordhash;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "imageurl")
    private String imageurl;

    @Column(name = "langkey")
    private String langkey;

    @Column(name = "activationkey")
    private String activationkey;

    @Column(name = "resetkey")
    private String resetkey;

    @Column(name = "createdby")
    private String createdby;

    @Column(name = "createddate")
    private Instant createddate;

    @Column(name = "resetdate")
    private Instant resetdate;

    @Column(name = "lastmodifiedby")
    private String lastmodifiedby;

    @Column(name = "lastmodifieddate")
    private Instant lastmodifieddate;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoginname() {
        return loginname;
    }

    public Jhiuser loginname(String loginname) {
        this.loginname = loginname;
        return this;
    }

    public void setLoginname(String loginname) {
        this.loginname = loginname;
    }

    public String getPasswordhash() {
        return passwordhash;
    }

    public Jhiuser passwordhash(String passwordhash) {
        this.passwordhash = passwordhash;
        return this;
    }

    public void setPasswordhash(String passwordhash) {
        this.passwordhash = passwordhash;
    }

    public String getFirstname() {
        return firstname;
    }

    public Jhiuser firstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public Jhiuser lastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getImageurl() {
        return imageurl;
    }

    public Jhiuser imageurl(String imageurl) {
        this.imageurl = imageurl;
        return this;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getLangkey() {
        return langkey;
    }

    public Jhiuser langkey(String langkey) {
        this.langkey = langkey;
        return this;
    }

    public void setLangkey(String langkey) {
        this.langkey = langkey;
    }

    public String getActivationkey() {
        return activationkey;
    }

    public Jhiuser activationkey(String activationkey) {
        this.activationkey = activationkey;
        return this;
    }

    public void setActivationkey(String activationkey) {
        this.activationkey = activationkey;
    }

    public String getResetkey() {
        return resetkey;
    }

    public Jhiuser resetkey(String resetkey) {
        this.resetkey = resetkey;
        return this;
    }

    public void setResetkey(String resetkey) {
        this.resetkey = resetkey;
    }

    public String getCreatedby() {
        return createdby;
    }

    public Jhiuser createdby(String createdby) {
        this.createdby = createdby;
        return this;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public Instant getCreateddate() {
        return createddate;
    }

    public Jhiuser createddate(Instant createddate) {
        this.createddate = createddate;
        return this;
    }

    public void setCreateddate(Instant createddate) {
        this.createddate = createddate;
    }

    public Instant getResetdate() {
        return resetdate;
    }

    public Jhiuser resetdate(Instant resetdate) {
        this.resetdate = resetdate;
        return this;
    }

    public void setResetdate(Instant resetdate) {
        this.resetdate = resetdate;
    }

    public String getLastmodifiedby() {
        return lastmodifiedby;
    }

    public Jhiuser lastmodifiedby(String lastmodifiedby) {
        this.lastmodifiedby = lastmodifiedby;
        return this;
    }

    public void setLastmodifiedby(String lastmodifiedby) {
        this.lastmodifiedby = lastmodifiedby;
    }

    public Instant getLastmodifieddate() {
        return lastmodifieddate;
    }

    public Jhiuser lastmodifieddate(Instant lastmodifieddate) {
        this.lastmodifieddate = lastmodifieddate;
        return this;
    }

    public void setLastmodifieddate(Instant lastmodifieddate) {
        this.lastmodifieddate = lastmodifieddate;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Jhiuser)) {
            return false;
        }
        return id != null && id.equals(((Jhiuser) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Jhiuser{" +
            "id=" + getId() +
            ", loginname='" + getLoginname() + "'" +
            ", passwordhash='" + getPasswordhash() + "'" +
            ", firstname='" + getFirstname() + "'" +
            ", lastname='" + getLastname() + "'" +
            ", imageurl='" + getImageurl() + "'" +
            ", langkey='" + getLangkey() + "'" +
            ", activationkey='" + getActivationkey() + "'" +
            ", resetkey='" + getResetkey() + "'" +
            ", createdby='" + getCreatedby() + "'" +
            ", createddate='" + getCreateddate() + "'" +
            ", resetdate='" + getResetdate() + "'" +
            ", lastmodifiedby='" + getLastmodifiedby() + "'" +
            ", lastmodifieddate='" + getLastmodifieddate() + "'" +
            "}";
    }
}
