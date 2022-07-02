module.exports = {
	name: 'BAN',
	description: 'This command BAN a Member!',
	execute(message, args){
		if(message.member.roles.cache.has('The role that has permission to the command')){
			const member = message.mentions.users.first();
			if(member){
				const memberTarger = message.guild.members.cache.get(member.id);
				memberTarger.ban();
				message.channel.send('User has been Banned');
			}else{
				message.channel.send('You coudt BAN that member');
			}
		}else{
			message.channel.send('You do not have permissions to use this command')
		}
	}
}