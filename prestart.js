var os = require('os')
var ip = require('ip')
var firebase = require('firebase')
firebase.initializeApp({
    apiKey: 'AIzaSyAW3UVM7GX3PAm8XVm2IHYNSajrZpTSMyQ',
    authDomain: 'iplist-bcdc7.firebaseapp.com',
    databaseURL: 'https://iplist-bcdc7.firebaseio.com',
    projectId: 'iplist-bcdc7',
    storageBucket: 'iplist-bcdc7.appspot.com',
    messagingSenderId: '404579352688'
})
var db = firebase.database()
var ref = db.ref('ip').child(ip.address().split('.').join('-'))
ref.set({
    ip: ip.address(),
    name: os.hostname()
},function() {
    process.exit()
})