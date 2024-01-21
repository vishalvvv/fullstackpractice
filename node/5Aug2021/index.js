var events = require('events');
var eventEmitter = new events.EventEmitter();
var date = new Date();
function timeStamp(){
    return date.getHours() +":"+ date.getMinutes()+":"+ date.getSeconds();
}
eventEmitter.on('connect',function(uname){
    console.log(uname +" connected -" +"    "+timeStamp());
})
eventEmitter.on('sendMessage',function(data){
    console.log(data.username+":" + data.message + "  -"+timeStamp());
})
eventEmitter.on('disconnect',function(uname){
    console.log(uname+" disconnected" +"   -"+timeStamp());
})
function connectUser(username){
    eventEmitter.emit('connect',username);
}
 function sendMessage(data){
     eventEmitter.emit('sendMessage',data);
 }

function disconnectUser(username){
    eventEmitter.emit('disconnect',username);
}
connectUser("chirag");
sendMessage({"username":"chirag", "message":"good evening all"});
connectUser("trishna");
sendMessage({"username":"trishna", "message":"good evening chirag"});

disconnectUser("chirag");
disconnectUser("vishal");