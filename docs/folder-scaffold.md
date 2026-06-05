# Exact Folder Scaffold (Next.js 15 MVP)

```text
/
├── app/
│   ├── globals.css          # Tailwind and global styles
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   ├── page.tsx             # Homepage
│   └── builder/
│       └── page.tsx         # Single-page resume builder
├── components/
│   ├── ui/                  # Reusable low-level components (buttons, inputs)
│   ├── layout/              # Header, Footer, Container
│   ├── builder/             # Editor-specific components
│   │   ├── EditorShell.tsx
│   │   ├── SectionCard.tsx
│   │   ├── forms/           # Form sections (Contact, Experience, etc.)
│   │   └── ATSScore.tsx     # ATS checker UI
│   └── resume/              # Resume template components
│       ├── ClassicTemplate.tsx
│       └── PrintWrapper.tsx
├── lib/
│   ├── utils.ts             # Tailwind merge, clsx, helpers
│   ├── ats-scorer.ts        # Pure functions for ATS rules
│   └── store.ts             # React state/context for resume data
├── types/
│   └── resume.ts            # TypeScript interfaces (Resume, Experience, etc.)
├── docs/
│   ├── sitemap.md
│   ├── homepage-wireframe.md
│   └── folder-scaffold.md
├── public/
│   └── ...                  # Static assets (images, icons)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
