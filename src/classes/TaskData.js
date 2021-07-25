import axios from 'axios';

export default class TaskData
{
	constructor(text) {
		this.id = Date.now();
		this.text = text;
		this.status = "todo";
	}

	static getFromFile(file = "./tasks.json") {
		return axios.get(file);
	}
}