# FreeTutor YEG

Free online Math and English tutoring for Edmonton students in grades K-6, matched with vetted high-school volunteer tutors.

## Live site

Deployed on Vercel from this repo's `main` branch.

## Tech stack

- Next.js (App Router)
- Plain CSS (no framework)
- Google Forms for parent and tutor sign-ups (no backend required)

## Getting started locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

- `app/page.tsx` - landing page (hero, how it works, subjects, sign-up links)
- `app/layout.tsx` - root layout and page metadata
- `app/globals.css` - all styling

## Sign-up forms

The "Request free tutoring" and "Volunteer as a tutor" buttons link directly to Google Forms. To change which forms they point to, update `parentForm` and `tutorForm` in `app/page.tsx`.

## Deployment

Connected to Vercel for automatic deploys on every push to `main`.
