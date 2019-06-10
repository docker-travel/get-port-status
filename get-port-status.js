const net = require('net');

function portIsAvailable(option) {
    return new Promise((resolve, reject) => {
        let server = net.createServer();
        server.unref();
        server.on("error", reject);
        server.listen(option, () => {
            server.close(resolve);
        });
    });
}

module.exports = async function getPort(ports, option = {}) {
    let result = [];

    for (let port of ports) {
        option.port = port;

        try {
            await portIsAvailable(option);
            result.push({ port, available: true });
        } catch (error) {
            if (error.code !== 'EADDRINUSE') {
                throw e;
            }
            result.push({ port, available: false });
        }
    }

    return result;
};

module.exports.portRange = function* portRange(start = 1024, end = 65535) {
    for (let i = start; i <= end; i++) yield i;
};