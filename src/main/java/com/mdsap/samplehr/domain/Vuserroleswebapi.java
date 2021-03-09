package com.mdsap.samplehr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Vuserroleswebapi.
 */
@Entity
@Table(schema = "WLF", name = "v_userroleswebapi")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Vuserroleswebapi implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "actionname")
    private String actionName;

    @Column(name = "modulename")
    private String moduleName;

    @Column(name = "menuname")
    private String menuName;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActionName() {
        return actionName;
    }

    public Vuserroleswebapi actionName(String actionName) {
        this.actionName = actionName;
        return this;
    }

    public void setActionName(String actionName) {
        this.actionName = actionName;
    }

    public String getModuleName() {
        return moduleName;
    }

    public Vuserroleswebapi moduleName(String moduleName) {
        this.moduleName = moduleName;
        return this;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }

    public String getMenuName() {
        return menuName;
    }

    public Vuserroleswebapi menuName(String menuName) {
        this.menuName = menuName;
        return this;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vuserroleswebapi)) {
            return false;
        }
        return id != null && id.equals(((Vuserroleswebapi) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Vuserroleswebapi{" +
            "id=" + getId() +
            ", actionName='" + getActionName() + "'" +
            ", moduleName='" + getModuleName() + "'" +
            ", menuName='" + getMenuName() + "'" +
            "}";
    }
}
