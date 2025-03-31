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
	<button data-testid="create-task-submit-button" type="submit" disabled
		>{t('CreateTask.Form.Submit.Label')}</button
	>
</form>
