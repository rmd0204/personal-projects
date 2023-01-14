var quotes = [
	'Toby is in HR, which technically means he works for corporate, so he\'s really not a part of our family. Also, he\'s divorced, so he\'s really not a part of his family',
	'Sometimes I\'ll start a sentence, and I don\'t even know where it\'s going. I just hope I find it along the way. Like an improv conversation. An improversation.',
	'I DECLARE BANKRUPTCY!',
	'Abraham Lincoln once said, "If you are a racist, I will attack you with the North" and those are the principles I carry with me in the workplace',
	'You don\'t call retarded people retards. It\'s in bad taste. You call your friends retards when they\'re acting retarded.',
	'I\'m not superstitious... But I am a little stitious.',
	'If I had a gun, with two bullets, and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.',
	'I want to be married and have a hundred kids so I can have a hundred friends, and no one can say no to being my friend.',
	'You miss 100% of the shots you don\'t take. - Wayne Gretzky',
	'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
	'I love inside jokes. I’d love to be a part of one someday.',
	'I don’t understand. We have a day honoring Martin Luther King, but he didn’t even work here.',
	'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.'
	]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}