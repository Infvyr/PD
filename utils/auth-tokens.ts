function parseJwt(token: string) {
	try {
		return JSON.parse(atob(token.split('.')[1]));
	} catch (e) {
		return null;
	}
}

function decodeToken(token: string) {
	return parseJwt(token);
}

export { parseJwt, decodeToken };
