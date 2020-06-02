const PacketType = {
LoginInformation: '01',
GPSPositioningData: '22',
HeartbeatPacket: '23'
};
Object.freeze(PacketType);
module.exports = { PacketType }
