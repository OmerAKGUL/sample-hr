package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Itxorganization.
 */
@Entity
@Table(schema = "WLF", name = "itxorganization")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxorganization implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "commtitle", nullable = false)
    private String commtitle;

    @NotNull
    @Column(name = "localcommtitle", nullable = false)
    private String localcommtitle;

    @Column(name = "sector")
    private String sector;

    @Column(name = "segment")
    private String segment;

    @Column(name = "traderegno")
    private String traderegno;

    @Column(name = "hqaddress")
    private String hqaddress;

    @Column(name = "enterprisetype")
    private String enterprisetype;

    @Column(name = "registerdate")
    private Instant registerdate;

    @Column(name = "swiftcode")
    private String swiftcode;

    @Column(name = "wwwaddr")
    private String wwwaddr;

    @ManyToOne
	@JoinColumn(name="regcountry")
    @JsonIgnoreProperties(value = "itxorganizations", allowSetters = true)
    private Itxcountry regcountry;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommtitle() {
        return commtitle;
    }

    public Itxorganization commtitle(String commtitle) {
        this.commtitle = commtitle;
        return this;
    }

    public void setCommtitle(String commtitle) {
        this.commtitle = commtitle;
    }

    public String getLocalcommtitle() {
        return localcommtitle;
    }

    public Itxorganization localcommtitle(String localcommtitle) {
        this.localcommtitle = localcommtitle;
        return this;
    }

    public void setLocalcommtitle(String localcommtitle) {
        this.localcommtitle = localcommtitle;
    }

    public String getSector() {
        return sector;
    }

    public Itxorganization sector(String sector) {
        this.sector = sector;
        return this;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getSegment() {
        return segment;
    }

    public Itxorganization segment(String segment) {
        this.segment = segment;
        return this;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    public String getTraderegno() {
        return traderegno;
    }

    public Itxorganization traderegno(String traderegno) {
        this.traderegno = traderegno;
        return this;
    }

    public void setTraderegno(String traderegno) {
        this.traderegno = traderegno;
    }

    public String getHqaddress() {
        return hqaddress;
    }

    public Itxorganization hqaddress(String hqaddress) {
        this.hqaddress = hqaddress;
        return this;
    }

    public void setHqaddress(String hqaddress) {
        this.hqaddress = hqaddress;
    }

    public String getEnterprisetype() {
        return enterprisetype;
    }

    public Itxorganization enterprisetype(String enterprisetype) {
        this.enterprisetype = enterprisetype;
        return this;
    }

    public void setEnterprisetype(String enterprisetype) {
        this.enterprisetype = enterprisetype;
    }

    public Instant getRegisterdate() {
        return registerdate;
    }

    public Itxorganization registerdate(Instant registerdate) {
        this.registerdate = registerdate;
        return this;
    }

    public void setRegisterdate(Instant registerdate) {
        this.registerdate = registerdate;
    }

    public String getSwiftcode() {
        return swiftcode;
    }

    public Itxorganization swiftcode(String swiftcode) {
        this.swiftcode = swiftcode;
        return this;
    }

    public void setSwiftcode(String swiftcode) {
        this.swiftcode = swiftcode;
    }

    public String getWwwaddr() {
        return wwwaddr;
    }

    public Itxorganization wwwaddr(String wwwaddr) {
        this.wwwaddr = wwwaddr;
        return this;
    }

    public void setWwwaddr(String wwwaddr) {
        this.wwwaddr = wwwaddr;
    }

    public Itxcountry getRegcountry() {
        return regcountry;
    }

    public Itxorganization regcountry(Itxcountry itxcountry) {
        this.regcountry = itxcountry;
        return this;
    }

    public void setRegcountry(Itxcountry itxcountry) {
        this.regcountry = itxcountry;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxorganization)) {
            return false;
        }
        return id != null && id.equals(((Itxorganization) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxorganization{" +
            "id=" + getId() +
            ", commtitle='" + getCommtitle() + "'" +
            ", localcommtitle='" + getLocalcommtitle() + "'" +
            ", sector='" + getSector() + "'" +
            ", segment='" + getSegment() + "'" +
            ", traderegno='" + getTraderegno() + "'" +
            ", hqaddress='" + getHqaddress() + "'" +
            ", enterprisetype='" + getEnterprisetype() + "'" +
            ", registerdate='" + getRegisterdate() + "'" +
            ", swiftcode='" + getSwiftcode() + "'" +
            ", wwwaddr='" + getWwwaddr() + "'" +
            "}";
    }
}
