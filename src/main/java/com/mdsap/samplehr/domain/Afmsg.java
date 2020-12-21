package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Afmsg.
 */
@Entity
@Table(schema = "WLF", name = "afmsg")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afmsg implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "appmsgtype")
    private String appmsgtype;

    @Column(name = "apprefctxinfo")
    private String apprefctxinfo;

    @Column(name = "appmsgcode")
    private String appmsgcode;

    @NotNull
    @Column(name = "langisocode", nullable = false)
    private String langisocode;

    @Column(name = "appmsgtxt")
    private String appmsgtxt;

    @Column(name = "msgseverity")
    private Integer msgseverity;

    @ManyToOne
	@JoinColumn(name="appsyscode")
    @JsonIgnoreProperties(value = "afmsgs", allowSetters = true)
    private Afsystem appsyscode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppmsgtype() {
        return appmsgtype;
    }

    public Afmsg appmsgtype(String appmsgtype) {
        this.appmsgtype = appmsgtype;
        return this;
    }

    public void setAppmsgtype(String appmsgtype) {
        this.appmsgtype = appmsgtype;
    }

    public String getApprefctxinfo() {
        return apprefctxinfo;
    }

    public Afmsg apprefctxinfo(String apprefctxinfo) {
        this.apprefctxinfo = apprefctxinfo;
        return this;
    }

    public void setApprefctxinfo(String apprefctxinfo) {
        this.apprefctxinfo = apprefctxinfo;
    }

    public String getAppmsgcode() {
        return appmsgcode;
    }

    public Afmsg appmsgcode(String appmsgcode) {
        this.appmsgcode = appmsgcode;
        return this;
    }

    public void setAppmsgcode(String appmsgcode) {
        this.appmsgcode = appmsgcode;
    }

    public String getLangisocode() {
        return langisocode;
    }

    public Afmsg langisocode(String langisocode) {
        this.langisocode = langisocode;
        return this;
    }

    public void setLangisocode(String langisocode) {
        this.langisocode = langisocode;
    }

    public String getAppmsgtxt() {
        return appmsgtxt;
    }

    public Afmsg appmsgtxt(String appmsgtxt) {
        this.appmsgtxt = appmsgtxt;
        return this;
    }

    public void setAppmsgtxt(String appmsgtxt) {
        this.appmsgtxt = appmsgtxt;
    }

    public Integer getMsgseverity() {
        return msgseverity;
    }

    public Afmsg msgseverity(Integer msgseverity) {
        this.msgseverity = msgseverity;
        return this;
    }

    public void setMsgseverity(Integer msgseverity) {
        this.msgseverity = msgseverity;
    }

    public Afsystem getAppsyscode() {
        return appsyscode;
    }

    public Afmsg appsyscode(Afsystem afsystem) {
        this.appsyscode = afsystem;
        return this;
    }

    public void setAppsyscode(Afsystem afsystem) {
        this.appsyscode = afsystem;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afmsg)) {
            return false;
        }
        return id != null && id.equals(((Afmsg) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afmsg{" +
            "id=" + getId() +
            ", appmsgtype='" + getAppmsgtype() + "'" +
            ", apprefctxinfo='" + getApprefctxinfo() + "'" +
            ", appmsgcode='" + getAppmsgcode() + "'" +
            ", langisocode='" + getLangisocode() + "'" +
            ", appmsgtxt='" + getAppmsgtxt() + "'" +
            ", msgseverity=" + getMsgseverity() +
            "}";
    }
}
