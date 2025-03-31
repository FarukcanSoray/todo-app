import { render, type RenderResult } from '@testing-library/svelte';
import { beforeEach, expect, it } from 'vitest';
import CreateTask from '$lib/components/CreateTask.svelte';
import { translations } from '$lib/translations';

let getByTestId: RenderResult<typeof CreateTask>['getByTestId'];
beforeEach(() => {
	// Render the component before each test
	({ getByTestId } = render(CreateTask));
});

it('should render', async () => {
	const { container } = render(CreateTask);
	expect(container).toBeTruthy();
});

it('should render the form element', async () => {
	const form = getByTestId('create-task-form');
	expect(form.tagName).toBe('FORM');
});
it('should render a submit button', async () => {
	const button = getByTestId('create-task-submit-button');
	expect(button.tagName).toBe('BUTTON');
});
it('should render a submit button with submit type', async () => {
	const button = getByTestId('create-task-submit-button');
	expect(button.getAttribute('type')).toBe('submit');
});
it('should render a submit button with the correct name', async () => {
	const button = getByTestId('create-task-submit-button');
	expect(button.textContent).toBe(translations.en['CreateTask.Form.Submit.Label']);
});
it('should render a disabled submit button initially', async () => {
	const button = getByTestId('create-task-submit-button') as HTMLButtonElement;
	expect(button.disabled).toBe(true);
});
it('should render a title input field', async () => {
	const input = getByTestId('create-task-title-input');
	expect(input.tagName).toBe('INPUT');
});
it('should render a title input field with the correct name', async () => {
	const input = getByTestId('create-task-title-input');
	expect(input.getAttribute('name')).toBe('title');
});
it('should render a title input field with type text', async () => {
	const input = getByTestId('create-task-title-input');
	expect(input.getAttribute('type')).toBe('text');
});
it('should render a title input field as required', async () => {
	const input = getByTestId('create-task-title-input') as HTMLInputElement;
	expect(input.required).toBe(true);
});
it('should render a title input field with the correct placeholder text', async () => {
	const input = getByTestId('create-task-title-input');
	expect(input.getAttribute('placeholder')).toBe(
		translations.en['CreateTask.Form.Title.Placeholder']
	);
});
it('should render a due date input field', async () => {
	const input = getByTestId('create-task-due-date-input');
	expect(input.tagName).toBe('INPUT');
});
it('should render a due date input field with type date', async () => {
	const input = getByTestId('create-task-due-date-input');
	expect(input.getAttribute('type')).toBe('date');
});
it('should render a due date input field with correct name', async () => {
	const input = getByTestId('create-task-due-date-input');
	expect(input.getAttribute('name')).toBe('dueDate');
});
