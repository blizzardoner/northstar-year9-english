# Northstar English

A mobile-first Year 9 English coach designed for daily reading, writing and vocabulary practice. It installs as a Progressive Web App on iPhone and keeps learner data on the device.

The built-in lessons are independent practice material, not official curriculum assessment or teacher grading.

## Features

- Ninety evidence-rich Year 9 reading lessons with a 90-day no-repeat rotation
- Four comprehension questions with explanations per lesson
- 140–180 word writing prompts
- Transparent local draft-readiness feedback for length, structure, linking phrases and prompt relevance
- Learner-selected vocabulary with spaced review
- Streak, time, reading accuracy and vocabulary progress
- Offline shell and local draft recovery
- iPhone-safe layout, home-screen icon and standalone display

## Privacy

Drafts, scores and vocabulary progress remain in the browser's local storage. This version does not upload student writing and contains no API keys. Its writing review is a local structural check, not teacher or AI marking.

## Development

```bash
npm install
npm test
npm run build
npm run serve
npm run qa
```

The production build is written to `dist/`.

## Install on iPhone

1. Open the GitHub Pages URL in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. Launch Northstar from the new icon.
