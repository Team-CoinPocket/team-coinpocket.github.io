# 동전지갑(CoinPocket) 팀 사이트

https://team-coinpocket.github.io (나중에 https://coinpocket.studio) 에 공개되는 팀 사이트. Astro 정적 사이트, 한국어 `/` + 영어 `/en/`.

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
| 카드 모양 | `src/components/ProjectCard.astro` |
| 공통 틀(머리말·꼬리말·색·글꼴) | `src/layouts/Base.astro` (색은 맨 아래 `:root` 의 `--` 값들) |
| 첫 화면 모양 | `src/components/Home.astro` |
| 로고 동전 / 첫 화면 동전 그림 | `src/components/CoinMark.astro` / `HeroCoins.astro` (탭 아이콘은 `public/favicon.svg`) |
| 도메인 | `astro.config.mjs` 의 `site`, `public/CNAME` |

## 도메인 coinpocket.studio (아직 연결 전)

Google Workspace 가입 때 산 도메인이라 **Squarespace Domains** 에서 관리한다. 같은 도메인을 팀 메일(Gmail)이 쓴다.

| 레코드 | 지금 | 연결할 때 |
|---|---|---|
| `A` 4개 (`@`) | Squarespace "곧 출시 예정" 화면 | GitHub Pages IP 4개로 교체 |
| `CNAME` (`www`) | `ext-sq.squarespace.com` | `team-coinpocket.github.io` 로 교체 |
| `MX` | `smtp.google.com` | **절대 건드리지 않는다** (메일이 끊긴다) |
| `TXT` (`v=spf1 include:_spf.google.com ~all`) | 메일 스팸 방지 | **절대 건드리지 않는다** |

연결 순서: 조직 설정에서 도메인 인증(TXT `_github-pages-challenge-…` 추가) → Squarespace 에서 A·www 교체 → 저장소 Pages 설정에 `coinpocket.studio` 등록 → HTTPS 강제. 사용자가 화면을 따라 할 수 있게 한 단계씩 안내한다. 작업 전후로 `Resolve-DnsName coinpocket.studio -Type MX` 로 메일 레코드가 그대로인지 확인한다.

## 남은 일

- 도메인 연결 (사용자가 "나중에" 로 미룸)
- 팀 소개 칸, 연락처 칸 (내용 미정이라 숨김)

## Astro

개발 서버는 백그라운드로 띄운다: `npx astro dev --background` (관리: `astro dev stop` / `status` / `logs`).
문서: https://docs.astro.build — 페이지·라우팅, 콘텐츠 컬렉션, 다국어(i18n) 가이드를 작업 전에 참고한다.
