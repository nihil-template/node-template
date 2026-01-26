# PLAN: Node.js Typescript 프로젝트 초기화 및 구성
> **Date:** 2026-01-27
> **Task ID:** 001_UPDATE_InitProject
> **Language:** Korean

## 1. Objective
Node.js TypeScript 기반의 프로젝트를 초기화하고, 사용자 요구사항에 맞춰 ESLint 설정, 유틸리티 라이브러리 설치, 디렉토리 구조(src, PRD)를 구성합니다.

## 2. Context Analysis
- **Target Directory:** `c:\Users\nihil\coding\template\node-template`
- **Requirements:**
    - 패키지 매니저: `pnpm`
    - 언어: TypeScript
    - 린터: 제공된 `eslint.config.mjs` 사용 및 관련 의존성 설치
    - 필수 라이브러리: `uuid`, `lodash`, `luxon`
    - 구조: `src` 폴더 내 개발, `PRD` 폴더 내 문서 관리

## 3. Strategy
1.  **초기화**: `pnpm init`으로 `package.json` 생성.
2.  **의존성 설치**:
    - **Dev**: `typescript`, `ts-node`, `@types/node`
    - **Lint**: `eslint`, `typescript-eslint`, `@eslint/js`, `@stylistic/eslint-plugin`, `eslint-plugin-import-x`, `eslint-import-resolver-typescript`
    - **Libs**: `uuid`, `lodash`, `luxon` 및 각각의 `@types/*`
3.  **설정 파일 구성**:
    - `tsconfig.json`: `src` 디렉토리 기준 설정, path alias 등 모던 환경에 맞게 구성.
    - `eslint.config.mjs`: 이미 존재하므로 의존성만 맞추면 동작 확인 가능.
    - `package.json`: `scripts` 추가 (build, lint, start 등).
4.  **디렉토리 구조**:
    - `src/index.ts` (진입점)
    - `PRD/` (기획 문서 폴더)

## 4. Impact Analysis
- **Affected Files:** `package.json`, `tsconfig.json`, `src/*`, `PRD/*`, `eslint.config.mjs` (검증)
- **Side Effects:** 기존 파일이 없다면 사이드 이펙트는 없으나, `eslint.config.mjs`가 올바르게 동작하는지 확인 필요.

## 5. Task List
- [ ] `pnpm init` 실행 및 `package.json` 기본 설정
- [ ] TypeScript 및 TS Node, Node Types 설치
- [ ] 유틸리티 라이브러리 (`uuid`, `lodash`, `luxon`) 및 타입 정의 설치
- [ ] ESLint 관련 플러그인 및 패키지 설치 (config 파일 분석 기반)
- [ ] `tsconfig.json` 생성 및 설정
- [ ] `src` 디렉토리 생성 및 `index.ts` 샘플 파일 작성
- [ ] `package.json` 스크립트 설정 (`dev`, `build`, `lint`)
- [ ] `PRD` 디렉토리 생성 및 표준 문서 3종 생성 (`PRD.md`, `Coding Rules & Guidelines.md`, `Development Task List.md`)
- [ ] ESLint 실행 및 검증

## 6. Verification Plan
- `pnpm lint` 실행 시 에러 없이 통과하거나 규칙에 따른 경고 발생 확인.
- `pnpm build` (tsc) 실행 시 `dist` (또는 `build`) 폴더에 결과물 생성 확인.
- `src/index.ts`에서 설치된 라이브러리(`uuid` 등) import 후 실행 확인.
