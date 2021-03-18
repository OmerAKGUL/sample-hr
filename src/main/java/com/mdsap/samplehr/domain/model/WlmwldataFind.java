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

    public void update() {
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

        namedata=replaceTurkishCharSet(namedata);
        tinnumberdata=replaceTurkishCharSet(tinnumberdata);
        countrydata=replaceTurkishCharSet(countrydata);
        citydata=replaceTurkishCharSet(citydata);
        addressdata=replaceTurkishCharSet(addressdata);


    }

    private String replaceTurkishCharSet(String val)
    {
        if(val == null) return null;
        val=val.replace("ç","C");
        val=val.replace("Ç","C");
        val=val.replace("ö","O");
        val=val.replace("Ö","O");
        val=val.replace("ğ","G");
        val=val.replace("Ğ","G");
        val=val.replace("ü","U");
        val=val.replace("Ü","u");
        val=val.replace("ı","I");
        val=val.replace("İ","I");
        val=val.replace("ş","S");
        val=val.replace("Ş","S");
        val=val.toUpperCase();

        return val;
    }

    @Override
    public String toString() {
        return "WlmwldataFind{" +
            "namedata='" + namedata + '\'' +
            ", addressdata='" + addressdata + '\'' +
            ", citydata='" + citydata + '\'' +
            ", countrydata='" + countrydata + '\'' +
            ", tinnumberdata='" + tinnumberdata + '\'' +
            '}';
    }
}
