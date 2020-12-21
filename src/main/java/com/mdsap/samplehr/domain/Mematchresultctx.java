package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Mematchresultctx.
 */
@Entity
@Table(schema = "WLF", name = "mematchresultctx")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Mematchresultctx implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "memid", nullable = false)
    private Long memid;

    @NotNull
    @Column(name = "matchtime", nullable = false)
    private Instant matchtime;

    @Column(name = "matchmtdmsg")
    private String matchmtdmsg;

    @Column(name = "matchctxdata")
    private String matchctxdata;

    @ManyToOne
	@JoinColumn(name="matchid")
    @JsonIgnoreProperties(value = "mematchresultctxes", allowSetters = true)
    private Mematchresult matchid;

    @ManyToOne
	@JoinColumn(name="matchmtdcode")
    @JsonIgnoreProperties(value = "mematchresultctxes", allowSetters = true)
    private Mematchmethod matchmtdcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMemid() {
        return memid;
    }

    public Mematchresultctx memid(Long memid) {
        this.memid = memid;
        return this;
    }

    public void setMemid(Long memid) {
        this.memid = memid;
    }

    public Instant getMatchtime() {
        return matchtime;
    }

    public Mematchresultctx matchtime(Instant matchtime) {
        this.matchtime = matchtime;
        return this;
    }

    public void setMatchtime(Instant matchtime) {
        this.matchtime = matchtime;
    }

    public String getMatchmtdmsg() {
        return matchmtdmsg;
    }

    public Mematchresultctx matchmtdmsg(String matchmtdmsg) {
        this.matchmtdmsg = matchmtdmsg;
        return this;
    }

    public void setMatchmtdmsg(String matchmtdmsg) {
        this.matchmtdmsg = matchmtdmsg;
    }

    public String getMatchctxdata() {
        return matchctxdata;
    }

    public Mematchresultctx matchctxdata(String matchctxdata) {
        this.matchctxdata = matchctxdata;
        return this;
    }

    public void setMatchctxdata(String matchctxdata) {
        this.matchctxdata = matchctxdata;
    }

    public Mematchresult getMatchid() {
        return matchid;
    }

    public Mematchresultctx matchid(Mematchresult mematchresult) {
        this.matchid = mematchresult;
        return this;
    }

    public void setMatchid(Mematchresult mematchresult) {
        this.matchid = mematchresult;
    }

    public Mematchmethod getMatchmtdcode() {
        return matchmtdcode;
    }

    public Mematchresultctx matchmtdcode(Mematchmethod mematchmethod) {
        this.matchmtdcode = mematchmethod;
        return this;
    }

    public void setMatchmtdcode(Mematchmethod mematchmethod) {
        this.matchmtdcode = mematchmethod;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Mematchresultctx)) {
            return false;
        }
        return id != null && id.equals(((Mematchresultctx) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Mematchresultctx{" +
            "id=" + getId() +
            ", memid=" + getMemid() +
            ", matchtime='" + getMatchtime() + "'" +
            ", matchmtdmsg='" + getMatchmtdmsg() + "'" +
            ", matchctxdata='" + getMatchctxdata() + "'" +
            "}";
    }
}
