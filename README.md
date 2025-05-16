# 🎯 심플한 칸반 보드

외부 라이브러리 없이 드래그 앤 드랍 기능을 구현한 미니멀한 칸반 보드입니다.

## ✨ 주요 기능

- 🔄 컬럼 간 카드 드래그 앤 드랍
- ➕ 모든 컬럼에 새 카드 추가
- 🗑️ 휴지통으로 드래그하여 카드 삭제
- 💾 로컬 스토리지를 통한 데이터 저장

## 🛠️ 기술 스택

- React 19
- TypeScript 5.7
- Tailwind CSS 4.1
- Vite 6.2
- pnpm (패키지 매니저)

## 📋 요구사항

```
node >= 20.0.0
pnpm >= 9.12.3
```

## 🚀 시작하기

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format
````

## 🏗️ 디렉토리 구조

```
src/
├── components/
│   ├── add-card.tsx       # 새로운 카드 추가
│   ├── board.tsx          # 메인 보드 레이아웃
│   ├── card.tsx           # 카드 컴포넌트
│   ├── column.tsx         # 컬럼 컴포넌트
│   ├── delete-card.tsx    # 카드 삭제
│   └── drop-indicator.tsx # 드랍 위치 표시
├── types.ts
├── App.tsx
└── main.tsx
```
