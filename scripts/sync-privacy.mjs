// 게임 저장소의 개인정보처리방침 원본을 이 사이트로 가져온다. 본문은 여기서 손으로 고치지 않는다.
// 원본 형식: 내부용 머리말 → `---` → 영어 본문 → `---` → 한국어 본문.
// 결과: src/privacy/<게임>/en.md, ko.md → https://coinpocket.studio/<게임>/privacy/
//
// 사용 (프로젝트 폴더에서): node scripts/sync-privacy.mjs <게임> <원본 경로> [커밋]
//   예: node scripts/sync-privacy.mjs malachite D:/Projects/Games/Malachite/docs/privacy-policy.md
//   커밋을 주면 작업 폴더 대신 그 커밋의 원본을 가져온다 (다른 브랜치의 판도 된다).
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname } from 'node:path';

const [game, source, commit] = process.argv.slice(2);
if (!game || !source || !/^[a-z0-9-]+$/.test(game)) {
	console.error('사용: node scripts/sync-privacy.mjs <게임(영문 소문자)> <원본 경로> [커밋]');
	process.exit(1);
}

const git = (...a) => execFileSync('git', ['-C', dirname(source), ...a], { encoding: 'utf8' }).trim();
const raw = commit ? git('show', `${commit}:./${basename(source)}`) : readFileSync(source, 'utf8');
const lines = raw.replace(/\r\n/g, '\n').split('\n');
const cuts = lines.flatMap((l, i) => (l.trim() === '---' ? [i] : []));
if (cuts.length !== 2) {
	console.error(`원본에서 '---' 줄을 2개(머리말 끝, 영어·한국어 사이) 찾아야 하는데 ${cuts.length}개를 찾았다. 원본 형식을 확인할 것.`);
	process.exit(1);
}
const part = (from, to) => lines.slice(from + 1, to).join('\n').trim() + '\n';
const body = { en: part(cuts[0], cuts[1]), ko: part(cuts[1], lines.length) };

// 어느 판을 가져왔는지 남긴다 (화면에는 안 나온다).
let version = '커밋 정보 없음';
try {
	version = git('log', '-1', '--format=%h %cs', ...(commit ? [commit] : []), '--', basename(source));
	if (!commit && git('status', '--porcelain', '--', basename(source))) {
		console.warn('주의: 원본에 커밋하지 않은 수정이 있다. 원본 저장소에서 먼저 커밋할 것.');
		version += ' + 커밋 안 한 수정';
	}
} catch {}

mkdirSync(`src/privacy/${game}`, { recursive: true });
for (const [lang, text] of Object.entries(body)) {
	writeFileSync(`src/privacy/${game}/${lang}.md`, `---\nsource: ${JSON.stringify(version)}\n---\n\n${text}`);
}
console.log(`src/privacy/${game}/en.md, ko.md 갱신 (원본 ${version})`);

const blanks = [...new Set(Object.values(body).join('\n').match(/\[[^\]\n]+\](?!\()/g) ?? [])];
if (blanks.length) console.warn(`아직 채우지 않은 빈칸: ${blanks.join(', ')} — 채워지기 전에는 사이트 메뉴에 링크를 걸지 않는다.`);
