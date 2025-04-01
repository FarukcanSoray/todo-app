import { http, HttpResponse } from 'msw';

const allTasks: Task[] = [];
let taskIdCounter = 0;

export interface Task {
	id: number;
	title: string;
	description: string;
	dueDate: string; // ISO 8601 string
}

function isTask(obj: Task): obj is Task {
	return (
		obj &&
		typeof obj.title === 'string' &&
		typeof obj.description === 'string' &&
		typeof obj.dueDate === 'string'
	);
}

export const handlers = [
	http.get('/tasks', () => {
		console.log('Captured a "GET /tasks" request');
		return HttpResponse.json([]);
	}),
	http.post('/tasks', async ({ request }) => {
		const newTask = (await request.json()) as Task;
		if (!isTask(newTask)) {
			return HttpResponse.json({ error: 'Invalid request body' }, { status: 400 });
		}
		const id = ++taskIdCounter;
		const taskWithId = { ...newTask, id };
		allTasks.push(taskWithId);
		return HttpResponse.json(taskWithId, { status: 201 });
	}),
	http.delete('/tasks/:id', ({ params }) => {
		console.log(`Captured a "DELETE /tasks/${params.id}" request`);
	})
];
