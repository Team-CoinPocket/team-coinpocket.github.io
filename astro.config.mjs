// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://coinpocket.studio',

	// 한국어가 기본(/), 영어는 /en/ 아래에 둔다.
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko', 'en'],
		routing: { prefixDefaultLocale: false },
	},
});
