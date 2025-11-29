# 프로젝트 구조 및 파일 설명 (Project Structure)

이 문서는 **Artist Portfolio Web Application** (`ArtistGo`) 프로젝트의 폴더 구조와 주요 파일들의 역할에 대해 설명합니다.

## 📂 루트 디렉토리 (Root)

프로젝트의 최상위 설정 파일 및 문서들이 위치합니다.

| 파일/폴더 | 설명 |
| :--- | :--- |
| `package.json` | 프로젝트의 의존성(라이브러리), 스크립트(`dev`, `build` 등), 메타데이터를 관리합니다. |
| `tsconfig.json` | TypeScript 컴파일러 설정 파일입니다. 경로 별칭(`@/`) 등이 정의됩니다. |
| `tailwind.config.ts` | Tailwind CSS의 테마(색상, 폰트) 및 플러그인 설정 파일입니다. |
| `postcss.config.mjs` | Tailwind CSS v4 적용을 위한 PostCSS 설정 파일입니다. |
| `next.config.js` | Next.js 설정 파일입니다. **GitHub Pages 배포를 위해 `output: 'export'` 및 이미지 최적화 해제 설정이 추가되었습니다.** |
| `.env.example` | 환경 변수 예시 파일입니다. 실제 값은 `.env.local`에 저장해야 합니다. |
| `GEMINI.md` | AI 에이전트(Gemini)가 프로젝트 컨텍스트를 이해하기 위한 참조 문서입니다. |
| `doc/` | 기획서(PRD), 구현 계획 등 프로젝트 문서들이 저장된 폴더입니다. |
| `supabase/` | 백엔드(Supabase) 관련 설정 및 SQL 스키마 파일이 위치합니다. |

---

## 📂 소스 코드 (`src/`)

실제 애플리케이션 코드가 위치하는 메인 디렉토리입니다.

### 1. `src/app/` (App Router)
Next.js 13+ App Router 기반의 라우팅 및 페이지 구조입니다.

| 파일/폴더 | 설명 |
| :--- | :--- |
| `layout.tsx` | 애플리케이션의 최상위 레이아웃입니다. `<html>`, `<body>`, 그리고 공통 레이아웃 컴포넌트(`Navbar`, `Sidebar`, `Footer`)가 이곳에 정의됩니다. |
| `page.tsx` | 메인 홈페이지(`http://localhost:3000/`)의 UI입니다. |
| `globals.css` | 전역 스타일 시트입니다. Tailwind directives(`@import "tailwindcss";`)가 포함되어 있습니다. |
| `template.tsx` | 페이지 전환 시 상태를 초기화하거나 애니메이션을 적용할 때 사용하는 템플릿입니다. |
| `about/` | `/about` 경로에 해당하는 페이지 폴더입니다. |
| `works/` | `/works` 경로에 해당하는 작품 갤러리 페이지 폴더입니다. |
| `works/[id]/` | `/works/123` 처럼 개별 작품의 상세 페이지를 위한 동적 라우트 폴더입니다. 이 폴더에는 `page.tsx` (서버 컴포넌트)와 `WorkDetailClient.tsx` (클라이언트 컴포넌트)가 포함되어 있습니다. `page.tsx`는 `generateStaticParams`를 사용하여 정적 페이지를 생성하고, `WorkDetailClient.tsx`는 클라이언트 측에서 상호작용을 처리합니다. |
| `exhibitions/` | `/exhibitions` 경로에 해당하는 전시 이력 페이지 폴더입니다. |
| `contact/` | `/contact` 경로에 해당하는 문의 페이지 폴더입니다. |

### 2. `src/components/` (UI 컴포넌트)
재사용 가능한 UI 컴포넌트들이 모여 있습니다.

| 폴더 | 설명 |
| :--- | :--- |
| `layout/` | 페이지 레이아웃을 구성하는 주요 컴포넌트 (`Navbar.tsx`, `Footer.tsx`, `Sidebar.tsx`) |
| `ui/` | 버튼, 카드, 입력창 등 작고 재사용 가능한 기본 UI 컴포넌트 (`WorkCard.tsx` 등) |
| `features/` | 특정 기능에 종속적인 복합 컴포넌트들이 위치합니다. (예: 갤러리 필터, 문의 폼 등) |
| `providers/` | React Context Provider 컴포넌트 (`ThemeProvider.tsx` 등) |

### 3. `src/lib/` (유틸리티)
외부 라이브러리 설정 및 헬퍼 함수들입니다.

| 파일 | 설명 |
| :--- | :--- |
| `supabase.ts` | Supabase 클라이언트 초기화 및 설정 파일입니다. |
| `utils.ts` | 클래스 이름 병합(`cn`) 등 전역적으로 사용되는 헬퍼 함수 모음입니다. |

### 4. `src/types/` (타입 정의)
TypeScript 인터페이스 및 타입 정의 파일들이 위치합니다.
(데이터베이스 스키마에 따른 `Artist`, `Work` 등의 타입 정의 예정)

---

## 📊 데이터베이스 (`supabase/schema.sql`)

Supabase PostgreSQL 데이터베이스의 초기 테이블 구조가 정의된 SQL 파일입니다.
- `works`: 작품 정보
- `exhibitions`: 전시 이력
- `profile`: 작가 프로필
- `media_archive`: 미디어 자료

---

## 🚀 배포 환경 (Deployment)

### GitHub Pages
이 프로젝트는 GitHub Pages에 정적 사이트로 배포되도록 설정되었습니다.
- **설정 변경**: `next.config.js`에서 `output: 'export'` 설정됨.
- **이미지**: `next/image`의 최적화 기능이 비활성화(`unoptimized: true`)되었습니다.

## GitHub 리포지토리 설정
GitHub 리포지토리 설정(Settings)에서 다음 두 가지를 반드시 해주셔야 배포가 성공합니다.

   1. Secrets 등록:
       * GitHub 리포지토리 -> Settings -> Secrets and variables -> Actions -> New repository secret
       * NEXT_PUBLIC_SUPABASE_URL: (Supabase URL 값)
       * NEXT_PUBLIC_SUPABASE_ANON_KEY: (Supabase Anon Key 값)

   2. GitHub Pages 활성화:
       * GitHub 리포지토리 -> Settings -> Pages
       * Source: GitHub Actions 선택 (이 옵션이 없다면 Deploy from a branch 대신 GitHub Actions 베타/옵션을 찾아보시거나,
         워크플로우가 한 번 실행된 후 자동으로 감지될 수도 있습니다. Source를 GitHub Actions로 설정하는 것이 핵심입니다.)

