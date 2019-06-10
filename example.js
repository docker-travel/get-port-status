let getPortStatus = require("./get-port-status");
let { portRange } = getPortStatus;

(await getPortStatus(
    portRange(3000, 10000)
)).filter(result => !result.available);