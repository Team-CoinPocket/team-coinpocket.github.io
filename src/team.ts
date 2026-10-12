// 팀원 목록. 위에서부터 순서대로 보인다. 새 팀원은 배열에 하나 더 추가하면 된다.
// - roles: 원래 맡은 일 (이름 아래 한 줄로 보인다)
// - now:   현재 프로젝트에서 맡은 일 (없으면 그 칸이 숨겨진다)
// - badge: 동전 옆 금색 표시 (대표 등, 없으면 숨김)
// 사진(image)이 없으면 이름 첫 글자를 넣은 동전 그림이 대신 나온다.
// 사진을 쓸 때는 src/assets/team/ 에 넣고 위에서 import 한다 (정사각형 권장).
import type { ImageMetadata } from 'astro';
import type { Lang } from './i18n';

type Text = Record<Lang, string>;
type TextList = Record<Lang, string[]>;

export interface Member {
	name: Text;
	roles: TextList;
	now?: TextList;
	badge?: Text;
	image?: ImageMetadata;
}

export const team: Member[] = [
	{
		name: { ko: '프로포폴', en: 'Propofol' },
		badge: { ko: '대표', en: 'CEO' },
		roles: { ko: ['유니티 클라이언트 개발자'], en: ['Unity Client Developer'] },
	},
	{
		name: { ko: '깔륨:B', en: 'Kalium:B' },
		roles: { ko: ['배경 디자인'], en: ['Background Art'] },
	},
	{
		name: { ko: '자구미', en: 'Jagumi' },
		roles: { ko: ['3D 이펙트', '아트 디렉터'], en: ['3D VFX', 'Art Director'] },
		now: { ko: ['도트', 'UI'], en: ['Pixel Art', 'UI'] },
	},
	{
		name: { ko: '서우', en: 'Seowoo' },
		roles: { ko: ['3D 모델링'], en: ['3D Modeling'] },
		now: { ko: ['도트'], en: ['Pixel Art'] },
	},
	{
		name: { ko: '리릴리', en: 'Ririlly' },
		roles: { ko: ['일러스트'], en: ['Illustration'] },
		now: { ko: ['마케팅'], en: ['Marketing'] },
	},
	{
		name: { ko: '폴블', en: 'Polble' },
		roles: { ko: ['사운드'], en: ['Sound'] },
		now: { ko: ['팀장', '마케팅'], en: ['Lead', 'Marketing'] },
	},
	{
		name: { ko: 'Rei', en: 'Rei' },
		roles: { ko: ['스토리'], en: ['Story'] },
	},
	{
		name: { ko: '주원', en: 'Juwon' },
		roles: { ko: ['기획'], en: ['Game Design'] },
	},
];
