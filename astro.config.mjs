// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 사이트 주소. 공유 미리보기·검색엔진용 전체 주소를 만들 때 쓴다.
	site: 'https://coinpocket.studio',

	// 한국어가 기본(/), 영어는 /en/ 아래에 둔다.
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko', 'en'],
		routing: { prefixDefaultLocale: false },
	},
});
