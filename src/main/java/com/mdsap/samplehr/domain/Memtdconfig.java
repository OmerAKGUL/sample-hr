package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Memtdconfig.
 */
@Entity
@Table(schema = "WLF", name = "memtdconfig")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Memtdconfig implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "memid", nullable = false)
    private Long memid;

    @Column(name = "createdt")
    private Instant createdt;

    @Column(name = "updatedt")
    private Instant updatedt;

    @Column(name = "createusr")
    private Integer createusr;

    @Column(name = "updateusr")
    private Integer updateusr;

    @ManyToOne
	@JoinColumn(name="methodcode")
    @JsonIgnoreProperties(value = "memtdconfigs", allowSetters = true)
    private Mematchmethod methodcode;

    @ManyToOne
	@JoinColumn(name="configcode")
    @JsonIgnoreProperties(value = "memtdconfigs", allowSetters = true)
    private Meconfig configcode;

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

    public Memtdconfig memid(Long memid) {
        this.memid = memid;
        return this;
    }

    public void setMemid(Long memid) {
        this.memid = memid;
    }

    public Instant getCreatedt() {
        return createdt;
    }

    public Memtdconfig createdt(Instant createdt) {
        this.createdt = createdt;
        return this;
    }

    public void setCreatedt(Instant createdt) {
        this.createdt = createdt;
    }

    public Instant getUpdatedt() {
        return updatedt;
    }

    public Memtdconfig updatedt(Instant updatedt) {
        this.updatedt = updatedt;
        return this;
    }

    public void setUpdatedt(Instant updatedt) {
        this.updatedt = updatedt;
    }

    public Integer getCreateusr() {
        return createusr;
    }

    public Memtdconfig createusr(Integer createusr) {
        this.createusr = createusr;
        return this;
    }

    public void setCreateusr(Integer createusr) {
        this.createusr = createusr;
    }

    public Integer getUpdateusr() {
        return updateusr;
    }

    public Memtdconfig updateusr(Integer updateusr) {
        this.updateusr = updateusr;
        return this;
    }

    public void setUpdateusr(Integer updateusr) {
        this.updateusr = updateusr;
    }

    public Mematchmethod getMethodcode() {
        return methodcode;
    }

    public Memtdconfig methodcode(Mematchmethod mematchmethod) {
        this.methodcode = mematchmethod;
        return this;
    }

    public void setMethodcode(Mematchmethod mematchmethod) {
        this.methodcode = mematchmethod;
    }

    public Meconfig getConfigcode() {
        return configcode;
    }

    public Memtdconfig configcode(Meconfig meconfig) {
        this.configcode = meconfig;
        return this;
    }

    public void setConfigcode(Meconfig meconfig) {
        this.configcode = meconfig;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Memtdconfig)) {
            return false;
        }
        return id != null && id.equals(((Memtdconfig) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Memtdconfig{" +
            "id=" + getId() +
            ", memid=" + getMemid() +
            ", createdt='" + getCreatedt() + "'" +
            ", updatedt='" + getUpdatedt() + "'" +
            ", createusr=" + getCreateusr() +
            ", updateusr=" + getUpdateusr() +
            "}";
    }
}
