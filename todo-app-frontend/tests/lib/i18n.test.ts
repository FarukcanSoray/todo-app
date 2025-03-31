import { t, setLanguage } from '$lib/i18n';
import { translations } from '$lib/translations';
import { describe, expect, it } from 'vitest';

describe('i18n utility', () => {
	it('should use the default language (en)', () => {
		expect(t('CreateTask.Form.Title.Placeholder')).toBe(
			translations.en['CreateTask.Form.Title.Placeholder']
		);
	});

	it('should retrieve the correct translation for a valid key', () => {
		setLanguage('en');
		expect(t('CreateTask.Form.Submit.Label')).toBe(translations.en['CreateTask.Form.Submit.Label']);
	});

	it('should switch to a different language', () => {
		setLanguage('tr');
		expect(t('CreateTask.Form.Title.Placeholder')).toBe(
			translations.tr['CreateTask.Form.Title.Placeholder']
		);
	});
});
