const push = require('./pushApi')

module.exports = async (pushes, title, text, url) => 
{
	for(let i = 0; i < pushes.length; i++) { await push(pushes[i], title, text, url) }
}