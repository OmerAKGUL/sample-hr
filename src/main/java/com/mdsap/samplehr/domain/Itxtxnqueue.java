package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;

import com.mdsap.samplehr.domain.enumeration.Addrtype;

import com.mdsap.samplehr.domain.enumeration.Idtype;

import com.mdsap.samplehr.domain.enumeration.Prodtype;

/**
 * A Itxtxnqueue.
 */
@Entity
@Table(schema = "WLF", name = "itxtxnqueue")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxtxnqueue implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "etljobstart")
    private Instant etljobstart;

    @Column(name = "etljobsessiond")
    private String etljobsessiond;

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

    @Column(name = "scsyscustid")
    private String scsyscustid;

    @Column(name = "scname")
    private String scname;

    @Column(name = "scmidname")
    private String scmidname;

    @Column(name = "scsurname")
    private String scsurname;

    @Column(name = "scbirthdate")
    private LocalDate scbirthdate;

    @Column(name = "sccommtitle")
    private String sccommtitle;

    @Enumerated(EnumType.STRING)
    @Column(name = "scaddresstype")
    private Addrtype scaddresstype;

    @Column(name = "scaddress")
    private String scaddress;

    @Column(name = "sccity")
    private String sccity;

    @Column(name = "scnationality")
    private String scnationality;

    @Column(name = "scnationalid")
    private String scnationalid;

    @Enumerated(EnumType.STRING)
    @Column(name = "scidtype")
    private Idtype scidtype;

    @Column(name = "scidno")
    private String scidno;

    @Column(name = "scgender")
    private String scgender;

    @Column(name = "saorgid")
    private Integer saorgid;

    @Column(name = "saorgname")
    private String saorgname;

    @Column(name = "sasyscode")
    private String sasyscode;

    @Column(name = "sabranchcode")
    private String sabranchcode;

    @Column(name = "saname")
    private String saname;

    @Column(name = "rcsyscustid")
    private String rcsyscustid;

    @Column(name = "rcname")
    private String rcname;

    @Column(name = "rcmidname")
    private String rcmidname;

    @Column(name = "rcsurname")
    private String rcsurname;

    @Column(name = "rcbirthdate")
    private LocalDate rcbirthdate;

    @Column(name = "rccommtitle")
    private String rccommtitle;

    @Enumerated(EnumType.STRING)
    @Column(name = "rcaddresstype")
    private Addrtype rcaddresstype;

    @Column(name = "rcaddress")
    private String rcaddress;

    @Column(name = "rccity")
    private String rccity;

    @Column(name = "rcnationality")
    private String rcnationality;

    @Column(name = "rcnationalid")
    private String rcnationalid;

    @Enumerated(EnumType.STRING)
    @Column(name = "rcidtype")
    private Idtype rcidtype;

    @Column(name = "rcidno")
    private String rcidno;

    @Column(name = "rcgender")
    private String rcgender;

    @Column(name = "raorgid")
    private Integer raorgid;

    @Column(name = "raorgname")
    private String raorgname;

    @Column(name = "rasyscode")
    private String rasyscode;

    @Column(name = "rabranchcode")
    private String rabranchcode;

    @Column(name = "raname")
    private String raname;

    @Column(name = "txnchanneltype")
    private String txnchanneltype;

    @Column(name = "txnsysid")
    private String txnsysid;

    @Enumerated(EnumType.STRING)
    @Column(name = "txnprodtype")
    private Prodtype txnprodtype;

    @Column(name = "txnprodname")
    private String txnprodname;

    @Column(name = "txnamount")
    private Double txnamount;

    @Column(name = "txndescr")
    private String txndescr;

    @Column(name = "txnentitiesupd")
    private String txnentitiesupd;

    @Column(name = "txnagentorgid")
    private Integer txnagentorgid;

    @Column(name = "txnagentbrachid")
    private String txnagentbrachid;

    @Column(name = "txnagenttype")
    private String txnagenttype;

    @Column(name = "txnagentaccid")
    private String txnagentaccid;

    @Column(name = "txnorderdate")
    private Instant txnorderdate;

    @Column(name = "txnvaluedate")
    private Instant txnvaluedate;

    @ManyToOne
	@JoinColumn(name="rctype")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxcusttype rctype;

    @ManyToOne
	@JoinColumn(name="ratype")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxaccounttype ratype;

    @ManyToOne
	@JoinColumn(name="satype")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxaccounttype satype;

    @ManyToOne
	@JoinColumn(name="sctype")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxcusttype sctype;

    @ManyToOne
	@JoinColumn(name="txntypeid")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxtxntype txntypeid;

    @ManyToOne
	@JoinColumn(name="txncurrency")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Itxcurrency txncurrency;

    @ManyToOne
	@JoinColumn(name="etljobtype")
    @JsonIgnoreProperties(value = "itxtxnqueues", allowSetters = true)
    private Afetljobtype etljobtype;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getEtljobstart() {
        return etljobstart;
    }

    public Itxtxnqueue etljobstart(Instant etljobstart) {
        this.etljobstart = etljobstart;
        return this;
    }

    public void setEtljobstart(Instant etljobstart) {
        this.etljobstart = etljobstart;
    }

    public String getEtljobsessiond() {
        return etljobsessiond;
    }

    public Itxtxnqueue etljobsessiond(String etljobsessiond) {
        this.etljobsessiond = etljobsessiond;
        return this;
    }

    public void setEtljobsessiond(String etljobsessiond) {
        this.etljobsessiond = etljobsessiond;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Itxtxnqueue createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Itxtxnqueue updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Itxtxnqueue createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Itxtxnqueue updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public String getWfstate() {
        return wfstate;
    }

    public Itxtxnqueue wfstate(String wfstate) {
        this.wfstate = wfstate;
        return this;
    }

    public void setWfstate(String wfstate) {
        this.wfstate = wfstate;
    }

    public Integer getWfprocid() {
        return wfprocid;
    }

    public Itxtxnqueue wfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
        return this;
    }

    public void setWfprocid(Integer wfprocid) {
        this.wfprocid = wfprocid;
    }

    public String getScsyscustid() {
        return scsyscustid;
    }

    public Itxtxnqueue scsyscustid(String scsyscustid) {
        this.scsyscustid = scsyscustid;
        return this;
    }

    public void setScsyscustid(String scsyscustid) {
        this.scsyscustid = scsyscustid;
    }

    public String getScname() {
        return scname;
    }

    public Itxtxnqueue scname(String scname) {
        this.scname = scname;
        return this;
    }

    public void setScname(String scname) {
        this.scname = scname;
    }

    public String getScmidname() {
        return scmidname;
    }

    public Itxtxnqueue scmidname(String scmidname) {
        this.scmidname = scmidname;
        return this;
    }

    public void setScmidname(String scmidname) {
        this.scmidname = scmidname;
    }

    public String getScsurname() {
        return scsurname;
    }

    public Itxtxnqueue scsurname(String scsurname) {
        this.scsurname = scsurname;
        return this;
    }

    public void setScsurname(String scsurname) {
        this.scsurname = scsurname;
    }

    public LocalDate getScbirthdate() {
        return scbirthdate;
    }

    public Itxtxnqueue scbirthdate(LocalDate scbirthdate) {
        this.scbirthdate = scbirthdate;
        return this;
    }

    public void setScbirthdate(LocalDate scbirthdate) {
        this.scbirthdate = scbirthdate;
    }

    public String getSccommtitle() {
        return sccommtitle;
    }

    public Itxtxnqueue sccommtitle(String sccommtitle) {
        this.sccommtitle = sccommtitle;
        return this;
    }

    public void setSccommtitle(String sccommtitle) {
        this.sccommtitle = sccommtitle;
    }

    public Addrtype getScaddresstype() {
        return scaddresstype;
    }

    public Itxtxnqueue scaddresstype(Addrtype scaddresstype) {
        this.scaddresstype = scaddresstype;
        return this;
    }

    public void setScaddresstype(Addrtype scaddresstype) {
        this.scaddresstype = scaddresstype;
    }

    public String getScaddress() {
        return scaddress;
    }

    public Itxtxnqueue scaddress(String scaddress) {
        this.scaddress = scaddress;
        return this;
    }

    public void setScaddress(String scaddress) {
        this.scaddress = scaddress;
    }

    public String getSccity() {
        return sccity;
    }

    public Itxtxnqueue sccity(String sccity) {
        this.sccity = sccity;
        return this;
    }

    public void setSccity(String sccity) {
        this.sccity = sccity;
    }

    public String getScnationality() {
        return scnationality;
    }

    public Itxtxnqueue scnationality(String scnationality) {
        this.scnationality = scnationality;
        return this;
    }

    public void setScnationality(String scnationality) {
        this.scnationality = scnationality;
    }

    public String getScnationalid() {
        return scnationalid;
    }

    public Itxtxnqueue scnationalid(String scnationalid) {
        this.scnationalid = scnationalid;
        return this;
    }

    public void setScnationalid(String scnationalid) {
        this.scnationalid = scnationalid;
    }

    public Idtype getScidtype() {
        return scidtype;
    }

    public Itxtxnqueue scidtype(Idtype scidtype) {
        this.scidtype = scidtype;
        return this;
    }

    public void setScidtype(Idtype scidtype) {
        this.scidtype = scidtype;
    }

    public String getScidno() {
        return scidno;
    }

    public Itxtxnqueue scidno(String scidno) {
        this.scidno = scidno;
        return this;
    }

    public void setScidno(String scidno) {
        this.scidno = scidno;
    }

    public String getScgender() {
        return scgender;
    }

    public Itxtxnqueue scgender(String scgender) {
        this.scgender = scgender;
        return this;
    }

    public void setScgender(String scgender) {
        this.scgender = scgender;
    }

    public Integer getSaorgid() {
        return saorgid;
    }

    public Itxtxnqueue saorgid(Integer saorgid) {
        this.saorgid = saorgid;
        return this;
    }

    public void setSaorgid(Integer saorgid) {
        this.saorgid = saorgid;
    }

    public String getSaorgname() {
        return saorgname;
    }

    public Itxtxnqueue saorgname(String saorgname) {
        this.saorgname = saorgname;
        return this;
    }

    public void setSaorgname(String saorgname) {
        this.saorgname = saorgname;
    }

    public String getSasyscode() {
        return sasyscode;
    }

    public Itxtxnqueue sasyscode(String sasyscode) {
        this.sasyscode = sasyscode;
        return this;
    }

    public void setSasyscode(String sasyscode) {
        this.sasyscode = sasyscode;
    }

    public String getSabranchcode() {
        return sabranchcode;
    }

    public Itxtxnqueue sabranchcode(String sabranchcode) {
        this.sabranchcode = sabranchcode;
        return this;
    }

    public void setSabranchcode(String sabranchcode) {
        this.sabranchcode = sabranchcode;
    }

    public String getSaname() {
        return saname;
    }

    public Itxtxnqueue saname(String saname) {
        this.saname = saname;
        return this;
    }

    public void setSaname(String saname) {
        this.saname = saname;
    }

    public String getRcsyscustid() {
        return rcsyscustid;
    }

    public Itxtxnqueue rcsyscustid(String rcsyscustid) {
        this.rcsyscustid = rcsyscustid;
        return this;
    }

    public void setRcsyscustid(String rcsyscustid) {
        this.rcsyscustid = rcsyscustid;
    }

    public String getRcname() {
        return rcname;
    }

    public Itxtxnqueue rcname(String rcname) {
        this.rcname = rcname;
        return this;
    }

    public void setRcname(String rcname) {
        this.rcname = rcname;
    }

    public String getRcmidname() {
        return rcmidname;
    }

    public Itxtxnqueue rcmidname(String rcmidname) {
        this.rcmidname = rcmidname;
        return this;
    }

    public void setRcmidname(String rcmidname) {
        this.rcmidname = rcmidname;
    }

    public String getRcsurname() {
        return rcsurname;
    }

    public Itxtxnqueue rcsurname(String rcsurname) {
        this.rcsurname = rcsurname;
        return this;
    }

    public void setRcsurname(String rcsurname) {
        this.rcsurname = rcsurname;
    }

    public LocalDate getRcbirthdate() {
        return rcbirthdate;
    }

    public Itxtxnqueue rcbirthdate(LocalDate rcbirthdate) {
        this.rcbirthdate = rcbirthdate;
        return this;
    }

    public void setRcbirthdate(LocalDate rcbirthdate) {
        this.rcbirthdate = rcbirthdate;
    }

    public String getRccommtitle() {
        return rccommtitle;
    }

    public Itxtxnqueue rccommtitle(String rccommtitle) {
        this.rccommtitle = rccommtitle;
        return this;
    }

    public void setRccommtitle(String rccommtitle) {
        this.rccommtitle = rccommtitle;
    }

    public Addrtype getRcaddresstype() {
        return rcaddresstype;
    }

    public Itxtxnqueue rcaddresstype(Addrtype rcaddresstype) {
        this.rcaddresstype = rcaddresstype;
        return this;
    }

    public void setRcaddresstype(Addrtype rcaddresstype) {
        this.rcaddresstype = rcaddresstype;
    }

    public String getRcaddress() {
        return rcaddress;
    }

    public Itxtxnqueue rcaddress(String rcaddress) {
        this.rcaddress = rcaddress;
        return this;
    }

    public void setRcaddress(String rcaddress) {
        this.rcaddress = rcaddress;
    }

    public String getRccity() {
        return rccity;
    }

    public Itxtxnqueue rccity(String rccity) {
        this.rccity = rccity;
        return this;
    }

    public void setRccity(String rccity) {
        this.rccity = rccity;
    }

    public String getRcnationality() {
        return rcnationality;
    }

    public Itxtxnqueue rcnationality(String rcnationality) {
        this.rcnationality = rcnationality;
        return this;
    }

    public void setRcnationality(String rcnationality) {
        this.rcnationality = rcnationality;
    }

    public String getRcnationalid() {
        return rcnationalid;
    }

    public Itxtxnqueue rcnationalid(String rcnationalid) {
        this.rcnationalid = rcnationalid;
        return this;
    }

    public void setRcnationalid(String rcnationalid) {
        this.rcnationalid = rcnationalid;
    }

    public Idtype getRcidtype() {
        return rcidtype;
    }

    public Itxtxnqueue rcidtype(Idtype rcidtype) {
        this.rcidtype = rcidtype;
        return this;
    }

    public void setRcidtype(Idtype rcidtype) {
        this.rcidtype = rcidtype;
    }

    public String getRcidno() {
        return rcidno;
    }

    public Itxtxnqueue rcidno(String rcidno) {
        this.rcidno = rcidno;
        return this;
    }

    public void setRcidno(String rcidno) {
        this.rcidno = rcidno;
    }

    public String getRcgender() {
        return rcgender;
    }

    public Itxtxnqueue rcgender(String rcgender) {
        this.rcgender = rcgender;
        return this;
    }

    public void setRcgender(String rcgender) {
        this.rcgender = rcgender;
    }

    public Integer getRaorgid() {
        return raorgid;
    }

    public Itxtxnqueue raorgid(Integer raorgid) {
        this.raorgid = raorgid;
        return this;
    }

    public void setRaorgid(Integer raorgid) {
        this.raorgid = raorgid;
    }

    public String getRaorgname() {
        return raorgname;
    }

    public Itxtxnqueue raorgname(String raorgname) {
        this.raorgname = raorgname;
        return this;
    }

    public void setRaorgname(String raorgname) {
        this.raorgname = raorgname;
    }

    public String getRasyscode() {
        return rasyscode;
    }

    public Itxtxnqueue rasyscode(String rasyscode) {
        this.rasyscode = rasyscode;
        return this;
    }

    public void setRasyscode(String rasyscode) {
        this.rasyscode = rasyscode;
    }

    public String getRabranchcode() {
        return rabranchcode;
    }

    public Itxtxnqueue rabranchcode(String rabranchcode) {
        this.rabranchcode = rabranchcode;
        return this;
    }

    public void setRabranchcode(String rabranchcode) {
        this.rabranchcode = rabranchcode;
    }

    public String getRaname() {
        return raname;
    }

    public Itxtxnqueue raname(String raname) {
        this.raname = raname;
        return this;
    }

    public void setRaname(String raname) {
        this.raname = raname;
    }

    public String getTxnchanneltype() {
        return txnchanneltype;
    }

    public Itxtxnqueue txnchanneltype(String txnchanneltype) {
        this.txnchanneltype = txnchanneltype;
        return this;
    }

    public void setTxnchanneltype(String txnchanneltype) {
        this.txnchanneltype = txnchanneltype;
    }

    public String getTxnsysid() {
        return txnsysid;
    }

    public Itxtxnqueue txnsysid(String txnsysid) {
        this.txnsysid = txnsysid;
        return this;
    }

    public void setTxnsysid(String txnsysid) {
        this.txnsysid = txnsysid;
    }

    public Prodtype getTxnprodtype() {
        return txnprodtype;
    }

    public Itxtxnqueue txnprodtype(Prodtype txnprodtype) {
        this.txnprodtype = txnprodtype;
        return this;
    }

    public void setTxnprodtype(Prodtype txnprodtype) {
        this.txnprodtype = txnprodtype;
    }

    public String getTxnprodname() {
        return txnprodname;
    }

    public Itxtxnqueue txnprodname(String txnprodname) {
        this.txnprodname = txnprodname;
        return this;
    }

    public void setTxnprodname(String txnprodname) {
        this.txnprodname = txnprodname;
    }

    public Double getTxnamount() {
        return txnamount;
    }

    public Itxtxnqueue txnamount(Double txnamount) {
        this.txnamount = txnamount;
        return this;
    }

    public void setTxnamount(Double txnamount) {
        this.txnamount = txnamount;
    }

    public String getTxndescr() {
        return txndescr;
    }

    public Itxtxnqueue txndescr(String txndescr) {
        this.txndescr = txndescr;
        return this;
    }

    public void setTxndescr(String txndescr) {
        this.txndescr = txndescr;
    }

    public String getTxnentitiesupd() {
        return txnentitiesupd;
    }

    public Itxtxnqueue txnentitiesupd(String txnentitiesupd) {
        this.txnentitiesupd = txnentitiesupd;
        return this;
    }

    public void setTxnentitiesupd(String txnentitiesupd) {
        this.txnentitiesupd = txnentitiesupd;
    }

    public Integer getTxnagentorgid() {
        return txnagentorgid;
    }

    public Itxtxnqueue txnagentorgid(Integer txnagentorgid) {
        this.txnagentorgid = txnagentorgid;
        return this;
    }

    public void setTxnagentorgid(Integer txnagentorgid) {
        this.txnagentorgid = txnagentorgid;
    }

    public String getTxnagentbrachid() {
        return txnagentbrachid;
    }

    public Itxtxnqueue txnagentbrachid(String txnagentbrachid) {
        this.txnagentbrachid = txnagentbrachid;
        return this;
    }

    public void setTxnagentbrachid(String txnagentbrachid) {
        this.txnagentbrachid = txnagentbrachid;
    }

    public String getTxnagenttype() {
        return txnagenttype;
    }

    public Itxtxnqueue txnagenttype(String txnagenttype) {
        this.txnagenttype = txnagenttype;
        return this;
    }

    public void setTxnagenttype(String txnagenttype) {
        this.txnagenttype = txnagenttype;
    }

    public String getTxnagentaccid() {
        return txnagentaccid;
    }

    public Itxtxnqueue txnagentaccid(String txnagentaccid) {
        this.txnagentaccid = txnagentaccid;
        return this;
    }

    public void setTxnagentaccid(String txnagentaccid) {
        this.txnagentaccid = txnagentaccid;
    }

    public Instant getTxnorderdate() {
        return txnorderdate;
    }

    public Itxtxnqueue txnorderdate(Instant txnorderdate) {
        this.txnorderdate = txnorderdate;
        return this;
    }

    public void setTxnorderdate(Instant txnorderdate) {
        this.txnorderdate = txnorderdate;
    }

    public Instant getTxnvaluedate() {
        return txnvaluedate;
    }

    public Itxtxnqueue txnvaluedate(Instant txnvaluedate) {
        this.txnvaluedate = txnvaluedate;
        return this;
    }

    public void setTxnvaluedate(Instant txnvaluedate) {
        this.txnvaluedate = txnvaluedate;
    }

    public Itxcusttype getRctype() {
        return rctype;
    }

    public Itxtxnqueue rctype(Itxcusttype itxcusttype) {
        this.rctype = itxcusttype;
        return this;
    }

    public void setRctype(Itxcusttype itxcusttype) {
        this.rctype = itxcusttype;
    }

    public Itxaccounttype getRatype() {
        return ratype;
    }

    public Itxtxnqueue ratype(Itxaccounttype itxaccounttype) {
        this.ratype = itxaccounttype;
        return this;
    }

    public void setRatype(Itxaccounttype itxaccounttype) {
        this.ratype = itxaccounttype;
    }

    public Itxaccounttype getSatype() {
        return satype;
    }

    public Itxtxnqueue satype(Itxaccounttype itxaccounttype) {
        this.satype = itxaccounttype;
        return this;
    }

    public void setSatype(Itxaccounttype itxaccounttype) {
        this.satype = itxaccounttype;
    }

    public Itxcusttype getSctype() {
        return sctype;
    }

    public Itxtxnqueue sctype(Itxcusttype itxcusttype) {
        this.sctype = itxcusttype;
        return this;
    }

    public void setSctype(Itxcusttype itxcusttype) {
        this.sctype = itxcusttype;
    }

    public Itxtxntype getTxntypeid() {
        return txntypeid;
    }

    public Itxtxnqueue txntypeid(Itxtxntype itxtxntype) {
        this.txntypeid = itxtxntype;
        return this;
    }

    public void setTxntypeid(Itxtxntype itxtxntype) {
        this.txntypeid = itxtxntype;
    }

    public Itxcurrency getTxncurrency() {
        return txncurrency;
    }

    public Itxtxnqueue txncurrency(Itxcurrency itxcurrency) {
        this.txncurrency = itxcurrency;
        return this;
    }

    public void setTxncurrency(Itxcurrency itxcurrency) {
        this.txncurrency = itxcurrency;
    }

    public Afetljobtype getEtljobtype() {
        return etljobtype;
    }

    public Itxtxnqueue etljobtype(Afetljobtype afetljobtype) {
        this.etljobtype = afetljobtype;
        return this;
    }

    public void setEtljobtype(Afetljobtype afetljobtype) {
        this.etljobtype = afetljobtype;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxtxnqueue)) {
            return false;
        }
        return id != null && id.equals(((Itxtxnqueue) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxtxnqueue{" +
            "id=" + getId() +
            ", etljobstart='" + getEtljobstart() + "'" +
            ", etljobsessiond='" + getEtljobsessiond() + "'" +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            ", wfstate='" + getWfstate() + "'" +
            ", wfprocid=" + getWfprocid() +
            ", scsyscustid='" + getScsyscustid() + "'" +
            ", scname='" + getScname() + "'" +
            ", scmidname='" + getScmidname() + "'" +
            ", scsurname='" + getScsurname() + "'" +
            ", scbirthdate='" + getScbirthdate() + "'" +
            ", sccommtitle='" + getSccommtitle() + "'" +
            ", scaddresstype='" + getScaddresstype() + "'" +
            ", scaddress='" + getScaddress() + "'" +
            ", sccity='" + getSccity() + "'" +
            ", scnationality='" + getScnationality() + "'" +
            ", scnationalid='" + getScnationalid() + "'" +
            ", scidtype='" + getScidtype() + "'" +
            ", scidno='" + getScidno() + "'" +
            ", scgender='" + getScgender() + "'" +
            ", saorgid=" + getSaorgid() +
            ", saorgname='" + getSaorgname() + "'" +
            ", sasyscode='" + getSasyscode() + "'" +
            ", sabranchcode='" + getSabranchcode() + "'" +
            ", saname='" + getSaname() + "'" +
            ", rcsyscustid='" + getRcsyscustid() + "'" +
            ", rcname='" + getRcname() + "'" +
            ", rcmidname='" + getRcmidname() + "'" +
            ", rcsurname='" + getRcsurname() + "'" +
            ", rcbirthdate='" + getRcbirthdate() + "'" +
            ", rccommtitle='" + getRccommtitle() + "'" +
            ", rcaddresstype='" + getRcaddresstype() + "'" +
            ", rcaddress='" + getRcaddress() + "'" +
            ", rccity='" + getRccity() + "'" +
            ", rcnationality='" + getRcnationality() + "'" +
            ", rcnationalid='" + getRcnationalid() + "'" +
            ", rcidtype='" + getRcidtype() + "'" +
            ", rcidno='" + getRcidno() + "'" +
            ", rcgender='" + getRcgender() + "'" +
            ", raorgid=" + getRaorgid() +
            ", raorgname='" + getRaorgname() + "'" +
            ", rasyscode='" + getRasyscode() + "'" +
            ", rabranchcode='" + getRabranchcode() + "'" +
            ", raname='" + getRaname() + "'" +
            ", txnchanneltype='" + getTxnchanneltype() + "'" +
            ", txnsysid='" + getTxnsysid() + "'" +
            ", txnprodtype='" + getTxnprodtype() + "'" +
            ", txnprodname='" + getTxnprodname() + "'" +
            ", txnamount=" + getTxnamount() +
            ", txndescr='" + getTxndescr() + "'" +
            ", txnentitiesupd='" + getTxnentitiesupd() + "'" +
            ", txnagentorgid=" + getTxnagentorgid() +
            ", txnagentbrachid='" + getTxnagentbrachid() + "'" +
            ", txnagenttype='" + getTxnagenttype() + "'" +
            ", txnagentaccid='" + getTxnagentaccid() + "'" +
            ", txnorderdate='" + getTxnorderdate() + "'" +
            ", txnvaluedate='" + getTxnvaluedate() + "'" +
            "}";
    }
}
