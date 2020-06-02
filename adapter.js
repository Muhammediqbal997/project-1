const net = require("net");
const port = 7070;
const host = "127.0.0.1";
const { loginPacket ,loginPacketResponse, heartbeatPacketResponse} = require('./packets');
const server = net.createServer();
const { PacketType } = require('./packetTypes')
server.listen(port, host, () => {
console.log("TCP Server is running on port " + port + ".");
});

let sockets =[];
server.on("connection", function(sock) {
console.log("Client Connected: " + sock.remoteAdress + ":" + sock.remoteport);
sock.on("data", function(data) {
console.log(data);
let protocolNumber = data.slice(3,4);
console.log(protocolNumber.toString('hex'));

switch (protocolNumber.toString('hex')) {
case PacketType.LoginInformation:
console.log('Login Packet received');
sock.write(
loginPacketResponse
);
break;

