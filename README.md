This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Club Website Frontend Structure (2024 Refactor)

## Overview
The frontend codebase has been refactored for clarity, scalability, and maintainability. All components and pages are now organized by feature and UI type.

## Folder Structure

```
club-website/
  components/
    book/
      bookComponent.tsx
    carousel/
      carousel.tsx
      CaruselUsage.tsx
      Imageslider.tsx
      ImgeSlider.tsx
    certificate/
      certificate.tsx
    chat/
      chatbot.tsx
      chatComp.tsx
    clubsite.tsx
    event/
      eventTicket.tsx
    footer/
      page.tsx
    hero/
      Hero.tsx
    map/
      googlemap.tsx
    navbar/
      navbar2.tsx
    page.tsx
    section/
      section4.tsx
      section5.tsx
      section6.tsx
    toggle/
      toggleSwitch.tsx
    tutorial/
      OverleafTutorial.tsx
      tutoralComp.tsx
    ui/
      button.tsx
      card.tsx
      input.tsx
      textarea.tsx
    video/
      video.tsx
  app/
    certificate/
      page.tsx
    entry/
      page.tsx
    scanner/
      page.tsx
    test/
      page.tsx
    ticket/
      page.tsx
    layout.tsx
    page.tsx
    providers/
      providers.tsx
```

## Guidelines
- **UI components** go in `components/ui/`.
- **Feature-specific components** go in their own folder under `components/`.
- **Pages** are organized by feature under `app/` (e.g., `app/certificate/page.tsx`).
- **No deep or unclear nesting**: Each folder is named for its feature or UI type.
- **Imports** should use the new paths (e.g., `@/components/hero/Hero`).

## Maintenance
- When adding new features, create a new folder under `components/` and/or `app/` as needed.
- Keep UI elements generic and reusable in `ui/`.
- Update this documentation if the structure changes.

---

_Last updated: 2024-08-11_