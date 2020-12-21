package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Itxcustaddress.
 */
@Entity
@Table(schema = "WLF", name = "itxcustaddress")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Itxcustaddress implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
	@JoinColumn(name="custid")
    @JsonIgnoreProperties(value = "itxcustaddresses", allowSetters = true)
    private Itxcustinfo custid;

    @ManyToOne
	@JoinColumn(name="addrid")
    @JsonIgnoreProperties(value = "itxcustaddresses", allowSetters = true)
    private Itxcustadressinfo addrid;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Itxcustinfo getCustid() {
        return custid;
    }

    public Itxcustaddress custid(Itxcustinfo itxcustinfo) {
        this.custid = itxcustinfo;
        return this;
    }

    public void setCustid(Itxcustinfo itxcustinfo) {
        this.custid = itxcustinfo;
    }

    public Itxcustadressinfo getAddrid() {
        return addrid;
    }

    public Itxcustaddress addrid(Itxcustadressinfo itxcustadressinfo) {
        this.addrid = itxcustadressinfo;
        return this;
    }

    public void setAddrid(Itxcustadressinfo itxcustadressinfo) {
        this.addrid = itxcustadressinfo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Itxcustaddress)) {
            return false;
        }
        return id != null && id.equals(((Itxcustaddress) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Itxcustaddress{" +
            "id=" + getId() +
            "}";
    }
}
