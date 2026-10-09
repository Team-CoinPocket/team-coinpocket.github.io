// 팀원 목록. 위에서부터 순서대로 보인다. 새 팀원은 배열에 하나 더 추가하면 된다.
// 사진(image)이 없으면 이름 첫 글자를 넣은 동전 그림이 대신 나온다.
// 사진을 쓸 때는 src/assets/team/ 에 넣고 위에서 import 한다 (정사각형 권장).
import type { ImageMetadata } from 'astro';
import type { Lang } from './i18n';

export interface Member {
	name: Record<Lang, string>;
	roles: Record<Lang, string[]>;
	image?: ImageMetadata;
}

export const team: Member[] = [
	{
		name: { ko: '프로포폴', en: 'Propofol' },
		roles: { ko: ['대표', '유니티 개발자'], en: ['Team Lead', 'Unity Developer'] },
	},
];
