
import { Userdata } from '../../api/userdata/userdata.js';
import { Tradedata } from '../../api/tradedata/tradedata.js';

Meteor.setInterval(function() {
    if(Userdata.find().count() > 4) {
        Meteor.call('getbalance', 'KMD');
        Meteor.call('getbalance', 'OOT');
        Meteor.call('getbalance', 'BTC');
        Meteor.call('getbalance', 'ZEC');
        Meteor.call('getbalance', 'LTC');
        Meteor.call('getbalance', 'DASH');
        Meteor.call('getbalance', 'BCH');
    }
    if(Userdata.find().count() > 4 && Tradedata.find().count() > 0) {
    Meteor.call('getprice', 'KMD');
    Meteor.call('getprice', 'BTC');
    Meteor.call('getprice', 'ZEC');
    Meteor.call('getprice', 'DASH');
    Meteor.call('getprice', 'LTC');
    Meteor.call('getprice', 'BCH');
  

    Meteor.call("checkswapstatus");
    }
}, 60000);

Meteor.setInterval(function() {
    if(Userdata.find().count() > 6) {
        Meteor.call('listtransactions', "KMD");
        Meteor.call('listtransactions', "ZEC");
        Meteor.call('listtransactions', "OOT");
        Meteor.call('listtransactions', "BTC");
        Meteor.call('listtransactions', "BCH");
        Meteor.call('listtransactions', "DASH");
        Meteor.call('listtransactions', "LTC");



    }

}, 90000);
