package com.mdsap.samplehr.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Afmenuchild.
 */
@Entity
@Table(schema = "WLF", name = "afmenuchild")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Afmenuchild implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "afmid")
    private Long afmid;

    @ManyToOne
	@JoinColumn(name="menuitemcode")
    @JsonIgnoreProperties(value = "afmenuchildren", allowSetters = true)
    private Afmenuitem menuitemcode;

    @ManyToOne
	@JoinColumn(name="childcode")
    @JsonIgnoreProperties(value = "afmenuchildren", allowSetters = true)
    private Afmenuitem childcode;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAfmid() {
        return afmid;
    }

    public Afmenuchild afmid(Long afmid) {
        this.afmid = afmid;
        return this;
    }

    public void setAfmid(Long afmid) {
        this.afmid = afmid;
    }

    public Afmenuitem getMenuitemcode() {
        return menuitemcode;
    }

    public Afmenuchild menuitemcode(Afmenuitem afmenuitem) {
        this.menuitemcode = afmenuitem;
        return this;
    }

    public void setMenuitemcode(Afmenuitem afmenuitem) {
        this.menuitemcode = afmenuitem;
    }

    public Afmenuitem getChildcode() {
        return childcode;
    }

    public Afmenuchild childcode(Afmenuitem afmenuitem) {
        this.childcode = afmenuitem;
        return this;
    }

    public void setChildcode(Afmenuitem afmenuitem) {
        this.childcode = afmenuitem;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Afmenuchild)) {
            return false;
        }
        return id != null && id.equals(((Afmenuchild) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Afmenuchild{" +
            "id=" + getId() +
            ", afmid=" + getAfmid() +
            "}";
    }
}
