
import { Userdata } from '../../api/userdata/userdata.js';
import { Tradedata } from '../../api/tradedata/tradedata.js';

Meteor.setInterval(function() {
    if(Userdata.find().count() > 4) {
        Meteor.call('getbalance', 'KMD');
        Meteor.call('getbalance', 'OOT');
        Meteor.call('getbalance', 'BTC');
        Meteor.call('getbalance', 'LTC');
        Meteor.call('getbalance', 'ZEC');
    }
    if(Userdata.find().count() > 4 && Tradedata.find().count() > 0) {
    Meteor.call('getprice', 'KMD');
    Meteor.call('getprice', 'BTC');
    Meteor.call('getprice', 'LTC');
    Meteor.call("checkswapstatus");
    }
}, 60000);

Meteor.setInterval(function() {
    if(Userdata.find().count() > 6) {
        Meteor.call('listtransactions', "KMD");
        Meteor.call('listtransactions', "LTC");
        Meteor.call('listtransactions', "OOT");
        Meteor.call('listtransactions', "ZEC");
        Meteor.call('listtransactions', "BTC");
    }

}, 90000);
