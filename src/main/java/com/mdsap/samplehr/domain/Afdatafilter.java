package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

import com.mdsap.samplehr.domain.enumeration.Datafiltertype;

/**
 * A Afdatafilter.
 */
@Entity
@Table(schema = "WLF", name = "afdatafilter")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afdatafilter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    private Long id;

    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "descr")
    private String descr;

    @NotNull
    @Column(name = "appscript", nullable = false)
    private String appscript;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private Datafiltertype type;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Afdatafilter code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Afdatafilter name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescr() {
        return descr;
    }

    public Afdatafilter descr(String descr) {
        this.descr = descr;
        return this;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getAppscript() {
        return appscript;
    }

    public Afdatafilter appscript(String appscript) {
        this.appscript = appscript;
        return this;
    }

    public void setAppscript(String appscript) {
        this.appscript = appscript;
    }

    public Datafiltertype getType() {
        return type;
    }

    public Afdatafilter type(Datafiltertype type) {
        this.type = type;
        return this;
    }

    public void setType(Datafiltertype type) {
        this.type = type;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afdatafilter)) {
            return false;
        }
        return id != null && id.equals(((Afdatafilter) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afdatafilter{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", name='" + getName() + "'" +
            ", descr='" + getDescr() + "'" +
            ", appscript='" + getAppscript() + "'" +
            ", type='" + getType() + "'" +
            "}";
    }
}
