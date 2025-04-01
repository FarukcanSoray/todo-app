<script lang="ts">
	import { t } from '$lib/i18n';
	let title = $state('');
	let isSubmitting = $state(false);
	let isButtonDisabled = $derived(!title.trim() || isSubmitting);
	const onsubmit = (e: Event) => {
		e.preventDefault();
		isSubmitting = true;
	};
	$effect(() => {
		console.log('isButtonDisabled', isButtonDisabled);
	});
</script>

<form data-testid="create-task-form" {onsubmit}>
	<input
		data-testid="create-task-title-input"
		type="text"
		placeholder={t('CreateTask.Form.Title.Placeholder')}
		name="title"
		bind:value={title}
		required
	/>
	<input
		data-testid="create-task-description-input"
		type="text"
		name="description"
		placeholder={t('CreateTask.Form.Description.Placeholder')}
	/>
	<input data-testid="create-task-due-date-input" type="date" name="dueDate" />
	<button data-testid="create-task-submit-button" type="submit" disabled={isButtonDisabled}
		>{t('CreateTask.Form.Submit.Label')}</button
	>
</form>
