export function log(...args) {
		console.log.apply(console, args); // eslint-disable-line no-console
}

export function isAgent(nick){
	return nick.startsWith('agent:');
}

export function isTrigger(nick) {
	return nick.startsWith('agent:trigger');
}

export * from'./PersistentStorage';
