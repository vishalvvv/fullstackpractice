const repl = require("repl");
const local = repl.start("the node console started");

local.on('exit',()=>{
    console.log("exiting REPL");
    Process.exit();
});