package com.mdsap.samplehr.domain.model;


/**
 * A WlmwldataFind.
 */
public class WlmwldataFind {



    private String namedata;
    private String addressdata;
    private String citydata;
    private String countrydata;
    private String tinnumberdata;

    public WlmwldataFind() {
        namedata=null;
        addressdata=null;
        citydata=null;
        countrydata=null;
        tinnumberdata=null;
    }

    public String getNamedata() {
        return namedata;
    }

    public String getAddressdata() {
        return addressdata;
    }

    public String getCitydata() {
        return citydata;
    }

    public String getCountrydata() {
        return countrydata;
    }

    public String getTinnumberdata() {
        return tinnumberdata;
    }

    public void setNamedata(String namedata) {
        this.namedata = namedata;
    }

    public void setAddressdata(String addressdata) {
        this.addressdata = addressdata;
    }

    public void setCitydata(String citydata) {
        this.citydata = citydata;
    }

    public void setCountrydata(String countrydata) {
        this.countrydata = countrydata;
    }

    public void setTinnumberdata(String tinnumberdata) {
        this.tinnumberdata = tinnumberdata;
    }

    public void updateifblank() {
        if(namedata.length()==0)
            namedata=null;
        if(tinnumberdata.length()==0)
            tinnumberdata=null;
        if(countrydata.length()==0)
            countrydata=null;
        if(addressdata.length()==0)
            addressdata=null;
        if(citydata.length()==0)
            citydata=null;


    }
}
