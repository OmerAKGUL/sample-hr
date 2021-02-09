package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Afsroleuser.
 */
@Entity
@Table(schema = "WLF", name = "afsroleuser")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afsroleuser implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
	@JoinColumn(name="usrid")
    @JsonIgnoreProperties(value = "afsroleusers", allowSetters = true)
    private User usrid;

    @ManyToOne
	@JoinColumn(name="rolecode")
    @JsonIgnoreProperties(value = "afsroleusers", allowSetters = true)
    private Afsrole rolecode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUsrid() {
        return usrid;
    }

    public Afsroleuser usrid(User jhiuser) {
        this.usrid = jhiuser;
        return this;
    }

    public void setUsrid(User jhiuser) {
        this.usrid = jhiuser;
    }

    public Afsrole getRolecode() {
        return rolecode;
    }

    public Afsroleuser rolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
        return this;
    }

    public void setRolecode(Afsrole afsrole) {
        this.rolecode = afsrole;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afsroleuser)) {
            return false;
        }
        return id != null && id.equals(((Afsroleuser) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afsroleuser{" +
            "id=" + getId() +
            "}";
    }
}
