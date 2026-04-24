# Portable Hole Universal Link Setup

This folder mirrors the `post_it_note_share` Vercel pattern for Portable Hole.
Deploy this folder as the root of a standalone Vercel project.

## URLs

- Main page: `https://portable-hole-share.vercel.app/`
- Shared entry: `https://portable-hole-share.vercel.app/u/entry?payload=...`
- App Store: `https://apps.apple.com/us/app/portable-hole/id6752504688`

## iOS Configuration

- Bundle ID: `com.dongjiezhang.portableholeapp`
- Team ID: `3HWBZVW7QW`
- AASA appID: `3HWBZVW7QW.com.dongjiezhang.portableholeapp`
- Associated Domain in the app: `applinks:portable-hole-share.vercel.app`
- Universal Link path: `/u/entry*`

If the Team ID or domain changes, update:

- `apple-app-site-association`
- `.well-known/apple-app-site-association`
- `ios/Runner/Runner.entitlements`
- `PORTABLE_HOLE_SHARE_BASE_URL` dart-define or `PortableHoleShareCodec.defaultShareBaseUrl`

If Vercel gives you a different domain, update the associated domain and share base URL before shipping.

## Flow

1. Portable Hole shares a link like:
   `https://portable-hole-share.vercel.app/u/entry?payload=...`
2. If Portable Hole is installed and Associated Domains are valid, iOS opens the app directly.
3. If the app is not installed, this page shows a preview and a download button.
4. The page also exposes an "Open in Portable Hole" button using:
   `portablehole://import?payload=...`

## Test

Open:

`https://portable-hole-share.vercel.app/u/entry?payload=test`

Then install the app on a signed device and test a real shared link from Messages.
