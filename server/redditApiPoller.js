/**
 * Created by Yanis on 2015-03-31.
 */

    MinimumPollingInterval = 10*60*1000;
var pollingInterval = 10*60*1000;

Meteor.setInterval(function(){
    //For each subbredit to poll
    SubReddits.find().forEach(function(){

        //Poll reddit api

        //Parse results

        //Persist
        
    });

}, pollingInterval);