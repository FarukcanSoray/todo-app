<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<form data-testid="create-task-form">
	<input
		data-testid="create-task-title-input"
		type="text"
		placeholder={t('CreateTask.Form.Title.Placeholder')}
		name="title"
		required
	/>
	<input
		data-testid="create-task-description-input"
		type="text"
		name="description"
		placeholder={t('CreateTask.Form.Description.Placeholder')}
	/>
	<input data-testid="create-task-due-date-input" type="date" name="dueDate" />
	<button data-testid="create-task-submit-button" type="submit" disabled
		>{t('CreateTask.Form.Submit.Label')}</button
	>
</form>
