let getPortStatus = require("./get-port-status");
let { portRange } = getPortStatus;

getPortStatus(portRange(3000, 10000)).then(result => {
    console.log(result.filter(result => !result.available));
});