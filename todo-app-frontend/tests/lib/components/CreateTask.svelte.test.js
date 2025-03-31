import { render } from '@testing-library/svelte';
import { beforeEach, expect, it } from 'vitest';
import CreateTask from '$lib/components/CreateTask.svelte';

let getByTestId;
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
	expect(button.textContent).toBe('Submit');
});
it('should render a disabled submit button initially', async () => {
	const button = getByTestId('create-task-submit-button');
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
	const input = getByTestId('create-task-title-input');
	expect(input.required).toBe(true);
});
it('should render a title input field with the correct placeholder text', async () => {
	const input = getByTestId('create-task-title-input');
	expect(input.getAttribute('placeholder')).toBe('Enter task title');
});
