# Artist Portfolio WebApp PRD (Product Requirements Document)

## 1. 프로젝트 개요

### 1.1 제품명
**[작가명] Artist Portfolio Web Application**

### 1.2 비전
온라인을 통해 작가의 작품 세계와 예술적 철학을 생생하게 전달하며, 관람객, 큐레이터, 기관과의 연결 통로를 만드는 **인터랙티브 예술 포트폴리오 플랫폼** 구현

### 1.3 목표
- 사진, 영상, 설치 등 다양한 매체의 작업을 감각적으로 소개
- 작가의 작업 연대기, 전시 이력, 협업 프로젝트 아카이브화
- 관람객 및 관계자와의 소통 창구 확보 (문의/링크 등)
- 모바일 친화적 + 감각적 + 미니멀한 디자인 UX

### 1.4 개발 방식
- **VibeCoding 기반 Claude 협업 개발 프로세스 적용**
- **Tech Stack**: Next.js, TypeScript, Tailwind CSS, Supabase
- **개발 기간**: 3–5주 (포트폴리오 MVP 기준)

---

## 2. 핵심 기능 요구사항

### 2.1 작품 소개 (Works)
- 이미지 기반 작업 (사진, 드로잉 등): 상세 보기 + 캡션
- 영상 작업: 비디오 스트리밍 (YouTube/Vimeo or 직접 업로드)
- 설치/공간 작업: 슬라이드 갤러리 + 공간 설명
- 작업 필터: 장르, 연도, 매체 등

### 2.2 전시/활동 이력 (Exhibitions & Activities)
- 연도별 전시 리스트 (단체/개인 구분)
- 프로젝트 기반 협업 이력 (기관/페어 등)
- 외부 링크 삽입 (보도자료, 비평문, 기사 등)

### 2.3 작가 소개 (About)
- 작가 프로필 사진 + 소개글 (한글/영문 가능)
- 아티스트 스테이트먼트
- CV 다운로드 (PDF)

### 2.4 미디어 아카이브 (Media Archive)
- 전시 전경 사진 및 영상 저장소
- 보도자료, 인터뷰, 영상 링크 정리
- 슬라이드 보기 + SNS 공유 기능

### 2.5 연락 및 연결 (Contact & Link)
- 이메일 문의 폼 (Bot 방지 기능 포함)
- SNS 링크, Behance, Vimeo 등 외부 포트폴리오 연동
- QR 코드 다운로드 (명함/전시장 활용)

---

## 3. 기술 요구사항

### 3.1 프론트엔드
```ts
{
  framework: "Next.js",
  language: "TypeScript",
  styling: "Tailwind CSS",
  animation: "Framer Motion",
  image: "Next/Image",
  video: "HTML5 Video 또는 Vimeo API"
}
```

### 3.2 백엔드
```ts
{
  database: "Supabase",
  storage: "Supabase Storage (이미지/영상)",
  auth: "Supabase Auth",
  form: "Next.js API + Nodemailer or Formspree"
}
```

---

## 4. UI/UX 디자인 가이드

### 4.1 디자인 방향
- 작품이 돋보이도록 하는 미니멀리즘
- 다크/라이트 모드 선택 가능
- 반응형 레이아웃 (모바일 최적화)
- 자연스러운 페이지 전환 애니메이션 (Framer Motion)

### 4.2 주요 화면 구성
- Home: 대표 영상/작업 + 문구 + 소셜 링크
- Works: 썸네일 그리드 + 필터 + 상세 보기
- Exhibitions: 연표 형식 리스트 + 상세
- About: 프로필 이미지 + 소개문 + CV 다운로드
- Archive: 전시 사진/영상 리스트 + 상세 보기
- Contact: 메일 폼 + 링크 아이콘

---

## 5. 데이터 스키마 요약

- `works`: id, title, media_type, description, year, tags[], images[], video_url, featured:boolean
- `exhibitions`: id, title, role, location, date, description, external_links[]
- `profile`: id, bio_ko, bio_en, profile_image, cv_file_url, social_links
- `media_archive`: id, type, title, images[], video_urls[], description

---

## 6. API 예시
```ts
GET  /api/works               // 작품 목록
GET  /api/works/:id           // 작품 상세
GET  /api/exhibitions         // 전시 목록
POST /api/contact             // 문의 폼 제출
GET  /api/profile             // 작가 소개 정보
```

---

## 7. 개발 로드맵

### Phase 1 (Week 1–2): 기본 구성
- UI 설계 (홈/작품/전시/소개)
- Supabase DB 연동 및 콘텐츠 입력
- 반응형 UI 구성

### Phase 2 (Week 3–4): 고도화 + 배포
- 영상 스트리밍 연동 / 미디어 아카이브
- 문의 기능 구현 / SEO 설정
- 테스트 및 Vercel 배포

---

## 8. 성공 지표 (KPI)
- 월 방문자 수 1000+ / 평균 체류시간 3분 이상
- 포트폴리오 공유 클릭 수 증가
- 이메일 문의 전환율 (초기 목표: 5%)
- 모바일 접속률 > 70%

---

*Version 1.0 / 작성일: 2025.11.18 / 작성자: Artist Portfolio PM Team*
## 모든 답변은 짧고 간결하게 해주세요.