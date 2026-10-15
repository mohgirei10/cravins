# CRAVINS ICE CREAM

Premium, responsive Next.js website for CRAVINS ICE CREAM and its food menu brand, Cravings N More.

## Requirements
- Node.js 20.9+ recommended
- npm

## Install and run
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. Update `.env.local` with the real WhatsApp number and contact details before launch.

## Build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js build settings.
4. Add environment variables from `.env.example` in Project Settings → Environment Variables. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Deploy.

## Images
The provided reference photos are in `public/images/reference/`. Move/copy approved, high-resolution business photography into `public/images/` for use on the live site. Reference screenshots are used only as local visual references.

## Menu note
Pasta and rice prices come from the supplied menu. Other categories are marked as sample/confirm items so you can verify the final prices before taking orders.
