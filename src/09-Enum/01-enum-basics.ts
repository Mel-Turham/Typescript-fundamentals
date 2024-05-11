enum ServerResponseStatus {
	Success,
	Error,
}

console.log(ServerResponseStatus);

interface ServerResponse {
	result: ServerResponseStatus;
	data: string[];
}

function getServerResponse(): ServerResponse {
	return {
		result: ServerResponseStatus.Success,
		data: ['First item', 'second items'],
	};
}


