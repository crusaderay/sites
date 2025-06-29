# Memo Sticky - GitHub Pages Setup

This directory contains the files needed to set up GitHub Pages for Universal Link support in the Memo Sticky app.

## Files Structure

```
github-pages/
├── apple-app-site-association    # Universal Link configuration (no extension)
├── index.html                     # Main landing page for app download
├── u/
│   └── entry/
│       └── index.html            # Universal Link entry point
└── README.md                     # This file
```

## Setup Instructions

### 1. Create GitHub Repository

1. Create a new repository named `dongjiezhang.github.io` (replace with your GitHub username)
2. Make sure the repository is public

### 2. Upload Files

1. Copy all files from this `github-pages` directory to the root of your GitHub repository
2. Make sure the `apple-app-site-association` file has **no file extension**
3. Commit and push the files

### 3. Enable GitHub Pages

1. Go to your repository Settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### 4. Verify Setup

1. Wait a few minutes for GitHub Pages to deploy
2. Visit `https://yourusername.github.io` to see the main page
3. Visit `https://yourusername.github.io/.well-known/apple-app-site-association` to verify the association file
4. Test the Universal Link: `https://yourusername.github.io/u/entry?text=Hello%20World`

## How It Works

### Sharing Flow
1. User swipes right on a note in the app
2. Share sheet opens with message: "I wrote a new note, click to view: https://dongjiezhang.github.io/u/entry?text=..."
3. When shared link is clicked:
   - If app is installed: Opens app directly with the shared text
   - If app is not installed: Shows download page

### Universal Link Configuration
- Domain: `dongjiezhang.github.io`
- Path: `/u/entry*`
- App ID: `3HWBZVW7QW.com.dongjiezhang.Post-It-Notes`

## Important Notes

- Replace `dongjiezhang` with your actual GitHub username throughout all files
- Update the App Store URL in the HTML files with your actual app's App Store link
- The `apple-app-site-association` file must be accessible at `https://yourusername.github.io/.well-known/apple-app-site-association`
- GitHub Pages automatically serves the file from the root directory at the `.well-known` path

## Testing

1. Build and install the app on a device
2. Share a note and send the link to yourself
3. Click the link in Messages or another app
4. The app should open with the shared text pre-filled

## Troubleshooting

- If Universal Links don't work, check that the `apple-app-site-association` file is accessible
- Verify the App ID in the association file matches your app's bundle identifier and team ID
- Make sure Associated Domains are properly configured in Xcode
- Universal Links may take some time to be recognized by iOS after installation