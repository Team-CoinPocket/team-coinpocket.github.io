// 프로젝트 목록. 새 프로젝트는 아래 배열에 하나 더 추가하면 된다.
import type { ImageMetadata } from 'astro';
import type { Lang } from './i18n';
import potionPortion from './assets/projects/potion-portion.jpg';

export interface Project {
	name: Record<Lang, string>;
	summary: Record<Lang, string>;
	image: ImageMetadata;
	released: string; // YYYY-MM-DD
	platforms: string[];
	link: { label: string; url: string };
}

export const projects: Project[] = [
	{
		name: { ko: '포션 하실래요?', en: 'Potion Portion' },
		summary: {
			ko: '할머니의 오래된 포션 가게를 물려받은 초보 마녀가 되어 냄비를 젓고, 포션을 팔고, 잃어버린 레시피를 모으는 방치형 클리커 게임.',
			en: "An idle clicker where you play a novice witch reviving Grandma's old potion shop: stir the cauldron, sell potions, and recover her lost recipes.",
		},
		image: potionPortion,
		released: '2026-05-18',
		platforms: ['Windows'],
		link: { label: 'Steam', url: 'https://store.steampowered.com/app/4559180/' },
	},
];
