# 동전지갑(CoinPocket) 팀 사이트

https://coinpocket.studio 에 올라가는 팀 사이트입니다. [Astro](https://astro.build)로 만든 정적 사이트이고, 한국어(`/`)와 영어(`/en/`)를 지원합니다.

## 내 PC에서 보기

```
npm install      # 처음 한 번
npm run dev      # http://localhost:4321 에서 미리보기
npm run build    # 공개용 파일을 dist/ 에 만든다
```

## 고칠 곳

| 무엇 | 파일 |
|---|---|
| 팀 이름, 한 줄 소개, 화면 문구 | `src/i18n.ts` |
| 프로젝트 목록 | `src/projects.ts` (이미지는 `src/assets/projects/`) |
| 공통 틀(머리말·꼬리말·색) | `src/layouts/Base.astro` |

## 공개 저장소 주의

- 비밀번호, API 키, `.env` 파일은 올리지 않는다.
- 아직 발표하지 않은 게임 정보는 올리지 않는다. 화면에 안 보여도 저장소에서는 보인다.
