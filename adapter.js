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
  case PacketType.HeartbeatPacket:
    console.log('heartbeat packet received');
    sock.Write(
      heartbeatPacketResponse
      );
    break;
  case PacketType.GPSPositioningData:
    console.log('gps location received');
    break;
  default:
    console.log('default');
    break;
}
});
  
  sock.on("close", function(data) {
    let index = sockets.findIndex(function(0) {
      return (
        o.remoteAdress === sock.remoteAddress && 
        o.remotePort === sock.remotePort
        );
    });
    if (index ! == -1);
    console.log("CLOSED: " + sock.remoteAdress + " " + sock.remotePort);
  });
});
function isLoginPacket(incomingPacket) {
  return Buffer.compare(loginpacket, incomingpPacket) ? false : true;
}
        
    
      
    
    
 
    
    

