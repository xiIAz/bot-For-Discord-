module.exports = {
    name: 'l',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("لازم تكون فروم ياليل الحمار ");
        await voiceChannel.leave();
        await message.channel.send('يلا طالع :smiling_face_with_tear:')
 
    }
}