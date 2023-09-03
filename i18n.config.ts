import en from '@/locales/en.json';
import id from '@/locales/id.json';

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en,
		id,
	},
	datetimeFormats: {
		'en-US': {
			short: {
				year: 'numeric', month: 'short', day: 'numeric'
			},
			long: {
				year: 'numeric', month: 'short', day: 'numeric',
				weekday: 'short', hour: 'numeric', minute: 'numeric'
			}
		},
	},
}));