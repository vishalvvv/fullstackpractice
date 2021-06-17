var config=Object.freeze({
    port:9011,
    base_url: "http://www.abc.com",
    path:"/index.js"
})
console.log(config);

config.port=0000;
config.newkey="data";

console.log(config);
console.log(Object.isFrozen(config));
