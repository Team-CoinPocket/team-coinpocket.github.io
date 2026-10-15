# 동전지갑(CoinPocket) 팀 사이트

https://coinpocket.studio 에 공개되는 팀 사이트 (예전 주소 https://team-coinpocket.github.io 는 이리로 넘어온다). Astro 정적 사이트, 한국어 `/` + 영어 `/en/`.

## 작업 방식

- 사용자와 팀원 대부분은 웹 개발 경험이 없다. 설명은 쉬운 한국어로, 용어는 처음 나올 때 풀어 쓴다.
- 내용은 사용자와 하나씩 정한다. 정하지 않은 문구를 지어내 공개하지 않는다. 비어 있는 칸은 숨긴다.
- 영어 문구는 한국어를 바탕으로 옮기고, 옮겼다고 알린다.
- 고친 뒤 `npm run build` 가 통과하고 개발 서버에서 두 언어 페이지가 열리는 것을 확인한 다음 커밋한다.

## 공개 흐름

`main` 에 push 하면 `.github/workflows/deploy.yml` (withastro/action) 이 빌드해 GitHub Pages 에 1분쯤 뒤 반영한다.
저장소 `Team-CoinPocket/team-coinpocket.github.io` 는 **공개**다.

- 비밀번호·API 키·`.env` 를 올리지 않는다.
- 아직 발표하지 않은 게임·서비스 정보는 올리지 않는다. 화면에서 숨겨도 저장소와 기록에는 남는다. 이런 메모는 `CLAUDE.local.md` (git 제외) 에 둔다.
- 이 저장소의 커밋 메일은 GitHub noreply 주소로 설정되어 있다 (`git config user.email`). 바꾸지 않는다.
- push 는 사용자에게 확인받고 한다.

## 고칠 곳

| 무엇 | 파일 |
|---|---|
| 팀 이름, 한 줄 소개, 화면 문구, 첫 화면 칸 | `src/i18n.ts` |
| 프로젝트 카드 | `src/projects.ts` (이미지는 `src/assets/projects/`) |
| SNS 주소 (X·Instagram·YouTube, 비우면 숨김) | `src/socials.ts` |
| 팀원 (이름·역할·사진) | `src/team.ts` (사진은 `src/assets/team/`, 없으면 이름 첫 글자 동전) |
| 카드 모양 | `src/components/ProjectCard.astro` |
| 공통 틀(머리말·꼬리말·색·글꼴) | `src/layouts/Base.astro` (색은 맨 아래 `:root` 의 `--` 값들) |
| 첫 화면 모양 | `src/components/Home.astro` |
| 로고 동전 / 첫 화면 동전 그림 | `src/components/CoinMark.astro` / `HeroCoins.astro` (탭 아이콘은 `public/favicon.svg`) |
| 공유 미리보기 이미지 (1200×630) | `public/og-ko.png`, `og-en.png`. 틀은 `scripts/og-image.html` (다시 찍는 명령이 맨 위에 있다). 팀 이름·한 줄 소개를 바꾸면 같이 고친다 |
| 도메인 | `astro.config.mjs` 의 `site`, `public/CNAME`. 실제 연결은 저장소 Pages 설정 (`gh api repos/Team-CoinPocket/team-coinpocket.github.io/pages`) |
| 게임 개인정보처리방침 `/<게임>/privacy/` | `src/privacy/<게임>/en.md` · `ko.md`. **손으로 고치지 않는다.** 원본은 게임 저장소 (Malachite: `D:/Projects/Games/Malachite/docs/privacy-policy.md`). 원본이 바뀌면 `node scripts/sync-privacy.mjs <게임> <원본 경로>` 로 다시 가져온다. 본문을 바꿔야 할 일이 보이면 게임 쪽에 알린다. 빈칸(`[보호책임자]` 등)이 남아 있으면 메뉴에 링크를 걸지 않는다 |
| `app-ads.txt` (광고 판매자 인증) | `public/app-ads.txt`. AdMob 계정이 하나라 한 줄이 모든 게임을 덮는다. 도메인 루트에서 `text/plain` 으로 열려야 한다 |

## 도메인 coinpocket.studio (2026-10-16 연결)

Google Workspace 가입 때 산 도메인이라 **Squarespace Domains** 에서 관리한다. 같은 도메인을 팀 메일(Gmail)이 쓴다.

| 레코드 | 연결 전 | 지금 |
|---|---|---|
| `A` 4개 (`@`) | Squarespace "곧 출시 예정" 화면 ("Squarespace 기본값" 묶음, `HTTPS` 레코드 포함) | 묶음을 지우고 GitHub Pages 의 `185.199.108.153` · `109` · `110` · `111.153` 4개 (사용자 지정 레코드) |
| `AAAA` 4개 (`@`) | 없음 | `2606:50c0:8000::153` · `8001` · `8002` · `8003::153` |
| `CNAME` (`www`) | `ext-sq.squarespace.com` | `team-coinpocket.github.io` |
| `MX` | `smtp.google.com` | **절대 건드리지 않는다** (메일이 끊긴다) |
| `TXT` (`v=spf1 include:_spf.google.com ~all`) | 메일 스팸 방지 | **절대 건드리지 않는다** |
| `TXT` (`google._domainkey`) | 메일 서명(DKIM) | **절대 건드리지 않는다** |
| `TXT` (`_github-pages-challenge-team-coinpocket`) | 없음 | 조직 Pages 도메인 인증 (verified). **지우지 않는다** |
| 그 밖의 하위 도메인 레코드, `CNAME` (`_domainconnect`) | 다른 용도 | 건드리지 않는다 (자세한 것은 `CLAUDE.local.md`) |

DNS 는 Squarespace Domains → coinpocket.studio → DNS 에서 고친다. 레코드를 바꿀 일이 생기면 사용자가 화면을 따라 할 수 있게 한 단계씩 안내하고, 작업 전후로 `Resolve-DnsName coinpocket.studio -Type MX` 로 메일 레코드가 그대로인지 확인한다. 다른 서버로 옮길 때는 `dist` 를 올리고 A·AAAA·www 만 바꾼 뒤 Pages 설정에서 도메인을 뺀다 (`/<게임>/privacy/`, `/app-ads.txt` 경로는 그대로 유지).

## 남은 일

- Malachite 개인정보처리방침의 빈칸(보호책임자 · 시행일)은 Malachite 쪽 원본에서 채운 뒤 다시 가져온다
- 팀원 사진 (지금은 이름 첫 글자 동전). 팀 칸 설명 문장도 미정이라 숨김
- 팀 카드에는 팀에서 맡은 일만 둔다. 프로젝트마다 바뀌는 역할(팀장·아트 디렉터 등)은 그 게임을 발표한 뒤 게임 소개나 프레스킷에 크레딧으로 넣는다

## Astro

개발 서버는 백그라운드로 띄운다: `npx astro dev --background` (관리: `astro dev stop` / `status` / `logs`).
문서: https://docs.astro.build — 페이지·라우팅, 콘텐츠 컬렉션, 다국어(i18n) 가이드를 작업 전에 참고한다.
