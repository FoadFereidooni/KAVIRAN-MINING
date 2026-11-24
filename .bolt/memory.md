# Project memory

## Product intent & audience

- Corporate website for **Kaviran Mining**, an Iranian mining company
- Target audience: potential clients, investors, partners, stakeholders
- Key features: photography-rich layout, interactive project galleries, machinery showcase, sustainability section

## Brand personality & voice

- Luxurious, professional corporate identity
- Content primarily in **Persian (Farsi)** with **RTL layout**
- User communicates in Persian; respond in Persian

## Visual design & UX direction

- Vite + React + Tailwind CSS + Lucide React icons
- RTL Persian layout throughout
- Photography-heavy visual approach; images are central to the experience
- Interactive galleries for projects and machinery display

## Decisions, constraints & rationale

- **Local images required**: Preview environment cannot access external URLs (Pexels API / remote image hosts). Remote image URLs returned HTTP 200 but failed to render in the preview browser.
- All project images downloaded and stored locally in `public/images/` (~24-25 mining images).
- Image path references centralized in a `data.ts` file; updated to use local paths (`/images/...`).
- Build verified successful; all images confirmed copied into build output.
- No external UI/icon packages beyond Lucide React.

## Open questions & assumptions

- Whether the downloaded stock images accurately represent Kaviran's actual projects and machinery
- Final image count and coverage sufficiency across all site sections not yet confirmed
- User may need to manually refresh preview to see image changes reflected