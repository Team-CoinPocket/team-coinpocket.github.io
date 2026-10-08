// 사이트에 들어가는 글자는 모두 여기서 고친다.
export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const t = {
	ko: {
		teamName: '동전지갑',
		// 한 줄 소개. 비워 두면 화면에 나오지 않는다.
		tagline: '동전처럼 작은 아이디어를 모아 게임을 만듭니다',
		// 첫 화면 아래 칸들. 위에서부터 순서대로 보인다. (팀 소개 칸은 내용이 정해지면 추가)
		sections: {
			projects: { title: '프로젝트', body: '' },
			contact: { title: '연락처', body: '' },
		},
		released: '출시',
		viewOn: (store: string) => `${store}에서 보기`,
		footer: '내용을 하나씩 채워 가는 중이에요.',
	},
	en: {
		teamName: 'CoinPocket',
		tagline: 'Collecting small ideas, like coins, to make games',
		sections: {
			projects: { title: 'Projects', body: '' },
			contact: { title: 'Contact', body: '' },
		},
		released: 'Released',
		viewOn: (store: string) => `View on ${store}`,
		footer: 'This site is a work in progress.',
	},
} satisfies Record<Lang, unknown>;

// 연락처 칸에 보이는 메일 주소 (Google Workspace 별칭)
export const contactEmail = 'contact@coinpocket.studio';

// 각 언어 첫 화면 주소
export const homePath: Record<Lang, string> = { ko: '/', en: '/en/' };
