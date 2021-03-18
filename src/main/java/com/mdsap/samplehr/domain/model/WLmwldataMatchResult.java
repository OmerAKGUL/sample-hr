package com.mdsap.samplehr.domain.model;

import com.mdsap.samplehr.domain.Wlmwldata;

import java.util.ArrayList;
import java.util.List;

public class WLmwldataMatchResult {

    private int matchScore;
    private boolean matchStatus;
    private String matchMessage;
    private List<WlmwldataFind> matchResult;

    public WLmwldataMatchResult() {

        matchScore=0;
        matchStatus=false;
        matchMessage="No match result found";
        matchResult= null;


    }


    public int getMatchScore() {
        return matchScore;
    }

    public boolean isMatchStatus() {
        return matchStatus;
    }

    public String getMatchMessage() {
        return matchMessage;
    }

    public List<WlmwldataFind> getMatchResult() {
        return matchResult;
    }

    public void setMatchScore(int matchScore) {
        this.matchScore = matchScore;
    }

    public void setMatchStatus(boolean matchStatus) {
        this.matchStatus = matchStatus;
    }

    public void setMatchMessage(String matchMessage) {
        this.matchMessage = matchMessage;
    }

    public void setMatchResult(List<WlmwldataFind> matchResult) {
        this.matchResult = matchResult;
    }

    public void addMatchData(List<Wlmwldata> wlmwldataList)
    {

        if(wlmwldataList==null || wlmwldataList.size()<=0)
            return ;

        matchResult = new ArrayList<WlmwldataFind>();
        for (Wlmwldata data:wlmwldataList) {

            WlmwldataFind val = new WlmwldataFind();

            val.setNamedata(data.getNamedata());
            val.setAddressdata(data.getAddressdata());
            val.setCitydata(data.getCitydata());
            val.setTinnumberdata(data.getTinnumberdata());
            val.setCountrydata(data.getCountrydata());

            matchResult.add(val);

        }

        this.setMatchScore(100);
        this.setMatchStatus(true);
        this.setMatchMessage("Number of match result is : "+wlmwldataList.size());

    }
}
