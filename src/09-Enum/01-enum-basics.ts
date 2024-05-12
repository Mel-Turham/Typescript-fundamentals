enum ServerResponseStatus {
	Success = 200,
	Error = 'Error',
	Status = 400,
}

console.log(ServerResponseStatus);

interface ServerResponse {
	result: ServerResponseStatus;
	data: string[];
}

function getServerResponse(): ServerResponse {
	return {
		result: ServerResponseStatus.Status,
		data: ['First item', 'second items'],
	};
}

const response = getServerResponse();
console.log(response.result);
