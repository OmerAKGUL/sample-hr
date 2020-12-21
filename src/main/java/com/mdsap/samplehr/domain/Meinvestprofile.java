package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.mdsap.samplehr.domain.enumeration.Invtype;

/**
 * A Meinvestprofile.
 */
@Entity
@Table(schema = "WLF", name = "meinvestprofile")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Meinvestprofile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "wlmid")
    private Long wlmid;

    @Column(name = "afsid")
    private Long afsid;

    @Enumerated(EnumType.STRING)
    @Column(name = "invtype")
    private Invtype invtype;

    @Column(name = "processdescr")
    private String processdescr;

    @Column(name = "notifgrp_1_emailaddr")
    private String notifgrp1emailaddr;

    @Column(name = "notifgrp_2_emailaddr")
    private String notifgrp2emailaddr;

    @Column(name = "notifmsgtempl")
    private String notifmsgtempl;

    @ManyToOne
	@JoinColumn(name="matchwltype")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Wlmwltype matchwltype;

    @ManyToOne
	@JoinColumn(name="matchtxntype")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Itxtxntype matchtxntype;

    @ManyToOne
	@JoinColumn(name="matchtxncusttype")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Itxcusttype matchtxncusttype;

    @ManyToOne
	@JoinColumn(name="matchtxnacctype")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Itxaccounttype matchtxnacctype;

    @ManyToOne
	@JoinColumn(name="matchsystemcode")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Afsystem matchsystemcode;

    @ManyToOne
	@JoinColumn(name="invrespuserid")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Jhiuser invrespuserid;

    @ManyToOne
	@JoinColumn(name="invresprole")
    @JsonIgnoreProperties(value = "meinvestprofiles", allowSetters = true)
    private Afsrole invresprole;

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

    public Meinvestprofile name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getWlmid() {
        return wlmid;
    }

    public Meinvestprofile wlmid(Long wlmid) {
        this.wlmid = wlmid;
        return this;
    }

    public void setWlmid(Long wlmid) {
        this.wlmid = wlmid;
    }

    public Long getAfsid() {
        return afsid;
    }

    public Meinvestprofile afsid(Long afsid) {
        this.afsid = afsid;
        return this;
    }

    public void setAfsid(Long afsid) {
        this.afsid = afsid;
    }

    public Invtype getInvtype() {
        return invtype;
    }

    public Meinvestprofile invtype(Invtype invtype) {
        this.invtype = invtype;
        return this;
    }

    public void setInvtype(Invtype invtype) {
        this.invtype = invtype;
    }

    public String getProcessdescr() {
        return processdescr;
    }

    public Meinvestprofile processdescr(String processdescr) {
        this.processdescr = processdescr;
        return this;
    }

    public void setProcessdescr(String processdescr) {
        this.processdescr = processdescr;
    }

    public String getNotifgrp1emailaddr() {
        return notifgrp1emailaddr;
    }

    public Meinvestprofile notifgrp1emailaddr(String notifgrp1emailaddr) {
        this.notifgrp1emailaddr = notifgrp1emailaddr;
        return this;
    }

    public void setNotifgrp1emailaddr(String notifgrp1emailaddr) {
        this.notifgrp1emailaddr = notifgrp1emailaddr;
    }

    public String getNotifgrp2emailaddr() {
        return notifgrp2emailaddr;
    }

    public Meinvestprofile notifgrp2emailaddr(String notifgrp2emailaddr) {
        this.notifgrp2emailaddr = notifgrp2emailaddr;
        return this;
    }

    public void setNotifgrp2emailaddr(String notifgrp2emailaddr) {
        this.notifgrp2emailaddr = notifgrp2emailaddr;
    }

    public String getNotifmsgtempl() {
        return notifmsgtempl;
    }

    public Meinvestprofile notifmsgtempl(String notifmsgtempl) {
        this.notifmsgtempl = notifmsgtempl;
        return this;
    }

    public void setNotifmsgtempl(String notifmsgtempl) {
        this.notifmsgtempl = notifmsgtempl;
    }

    public Wlmwltype getMatchwltype() {
        return matchwltype;
    }

    public Meinvestprofile matchwltype(Wlmwltype wlmwltype) {
        this.matchwltype = wlmwltype;
        return this;
    }

    public void setMatchwltype(Wlmwltype wlmwltype) {
        this.matchwltype = wlmwltype;
    }

    public Itxtxntype getMatchtxntype() {
        return matchtxntype;
    }

    public Meinvestprofile matchtxntype(Itxtxntype itxtxntype) {
        this.matchtxntype = itxtxntype;
        return this;
    }

    public void setMatchtxntype(Itxtxntype itxtxntype) {
        this.matchtxntype = itxtxntype;
    }

    public Itxcusttype getMatchtxncusttype() {
        return matchtxncusttype;
    }

    public Meinvestprofile matchtxncusttype(Itxcusttype itxcusttype) {
        this.matchtxncusttype = itxcusttype;
        return this;
    }

    public void setMatchtxncusttype(Itxcusttype itxcusttype) {
        this.matchtxncusttype = itxcusttype;
    }

    public Itxaccounttype getMatchtxnacctype() {
        return matchtxnacctype;
    }

    public Meinvestprofile matchtxnacctype(Itxaccounttype itxaccounttype) {
        this.matchtxnacctype = itxaccounttype;
        return this;
    }

    public void setMatchtxnacctype(Itxaccounttype itxaccounttype) {
        this.matchtxnacctype = itxaccounttype;
    }

    public Afsystem getMatchsystemcode() {
        return matchsystemcode;
    }

    public Meinvestprofile matchsystemcode(Afsystem afsystem) {
        this.matchsystemcode = afsystem;
        return this;
    }

    public void setMatchsystemcode(Afsystem afsystem) {
        this.matchsystemcode = afsystem;
    }

    public Jhiuser getInvrespuserid() {
        return invrespuserid;
    }

    public Meinvestprofile invrespuserid(Jhiuser jhiuser) {
        this.invrespuserid = jhiuser;
        return this;
    }

    public void setInvrespuserid(Jhiuser jhiuser) {
        this.invrespuserid = jhiuser;
    }

    public Afsrole getInvresprole() {
        return invresprole;
    }

    public Meinvestprofile invresprole(Afsrole afsrole) {
        this.invresprole = afsrole;
        return this;
    }

    public void setInvresprole(Afsrole afsrole) {
        this.invresprole = afsrole;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Meinvestprofile)) {
            return false;
        }
        return id != null && id.equals(((Meinvestprofile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Meinvestprofile{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", wlmid=" + getWlmid() +
            ", afsid=" + getAfsid() +
            ", invtype='" + getInvtype() + "'" +
            ", processdescr='" + getProcessdescr() + "'" +
            ", notifgrp1emailaddr='" + getNotifgrp1emailaddr() + "'" +
            ", notifgrp2emailaddr='" + getNotifgrp2emailaddr() + "'" +
            ", notifmsgtempl='" + getNotifmsgtempl() + "'" +
            "}";
    }
}
