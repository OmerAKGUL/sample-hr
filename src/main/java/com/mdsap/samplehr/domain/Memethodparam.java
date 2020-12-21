package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Memethodparam.
 */
@Entity
@Table(schema = "WLF", name = "memethodparam")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Memethodparam implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "memid", nullable = false)
    private Long memid;

    @Column(name = "wlmid")
    private Long wlmid;

    @ManyToOne
	@JoinColumn(name="paramvalcode")
    @JsonIgnoreProperties(value = "memethodparams", allowSetters = true)
    private Afparamval paramvalcode;

    @ManyToOne
	@JoinColumn(name="paramidxno")
    @JsonIgnoreProperties(value = "memethodparams", allowSetters = true)
    private Afparamval paramidxno;

    @ManyToOne
	@JoinColumn(name="matchmethodcode")
    @JsonIgnoreProperties(value = "memethodparams", allowSetters = true)
    private Mematchmethod matchmethodcode;

    @ManyToOne
	@JoinColumn(name="wltype")
    @JsonIgnoreProperties(value = "memethodparams", allowSetters = true)
    private Wlmwltype wltype;

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

    public Memethodparam memid(Long memid) {
        this.memid = memid;
        return this;
    }

    public void setMemid(Long memid) {
        this.memid = memid;
    }

    public Long getWlmid() {
        return wlmid;
    }

    public Memethodparam wlmid(Long wlmid) {
        this.wlmid = wlmid;
        return this;
    }

    public void setWlmid(Long wlmid) {
        this.wlmid = wlmid;
    }

    public Afparamval getParamvalcode() {
        return paramvalcode;
    }

    public Memethodparam paramvalcode(Afparamval afparamval) {
        this.paramvalcode = afparamval;
        return this;
    }

    public void setParamvalcode(Afparamval afparamval) {
        this.paramvalcode = afparamval;
    }

    public Afparamval getParamidxno() {
        return paramidxno;
    }

    public Memethodparam paramidxno(Afparamval afparamval) {
        this.paramidxno = afparamval;
        return this;
    }

    public void setParamidxno(Afparamval afparamval) {
        this.paramidxno = afparamval;
    }

    public Mematchmethod getMatchmethodcode() {
        return matchmethodcode;
    }

    public Memethodparam matchmethodcode(Mematchmethod mematchmethod) {
        this.matchmethodcode = mematchmethod;
        return this;
    }

    public void setMatchmethodcode(Mematchmethod mematchmethod) {
        this.matchmethodcode = mematchmethod;
    }

    public Wlmwltype getWltype() {
        return wltype;
    }

    public Memethodparam wltype(Wlmwltype wlmwltype) {
        this.wltype = wlmwltype;
        return this;
    }

    public void setWltype(Wlmwltype wlmwltype) {
        this.wltype = wlmwltype;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Memethodparam)) {
            return false;
        }
        return id != null && id.equals(((Memethodparam) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Memethodparam{" +
            "id=" + getId() +
            ", memid=" + getMemid() +
            ", wlmid=" + getWlmid() +
            "}";
    }
}
