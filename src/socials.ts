// 팀 SNS 주소. 주소를 비워 두면 그 아이콘은 화면에 나오지 않는다.
export interface Social {
	name: string;
	icon: 'x' | 'instagram' | 'youtube';
	url: string;
}

export const socials: Social[] = [
	{ name: 'X', icon: 'x', url: 'https://x.com/coinpocketgames' },
	{ name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/coinpocket_official/' },
	{ name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@CoinPocketGames' },
];

export const activeSocials = socials.filter((s) => s.url);
