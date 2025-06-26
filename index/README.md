# Ray Zhang - Personal Website (HTML Version)

This is a modern HTML/CSS/JavaScript version of Ray Zhang's personal website, converted from the original Jekyll-based site.

## Features

### 🎨 Modern Design
- Clean, responsive design with modern UI/UX principles
- Gradient backgrounds and smooth animations
- Card-based layout for better content organization
- Interactive hover effects and transitions

### 📱 Responsive Layout
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized for all screen sizes (desktop, tablet, mobile)
- Touch-friendly interface elements

### ⚡ Interactive Elements
- Smooth scrolling navigation
- Animated hero section with typing effect
- 3D flip animation for avatar
- Parallax scrolling effects
- Card tilt effects on hover
- Active navigation highlighting

### 🚀 Performance Optimized
- Pure HTML/CSS/JavaScript (no framework dependencies)
- Optimized images and assets
- Smooth animations with CSS transforms
- Lazy loading for images
- Minimal external dependencies

## File Structure

```
new-index/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Image assets (copied from original)
│   ├── avatar.jpg      # Profile picture
│   ├── bg.jpg          # Background image
│   └── ...             # Other images
└── README.md           # This file
```

## Content Sections

### 1. Hero Section
- Animated introduction with gradient background
- Interactive 3D avatar with flip animation
- Call-to-action buttons
- Typing animation for the main title

### 2. About Section
- Four-card layout with icons
- Personal information organized by categories:
  - Who? (Professional links)
  - Where? (Location)
  - What? (Interests and hobbies)
  - Anything Else? (Additional notes)

### 3. Projects Section
- Showcase of three main projects:
  - **TelcoAIO**: Web-based telecom tools suite
  - **NetpackAIO**: Python network tools package
  - **Memo Sticky**: iOS note-taking app
- Each project card includes description and external links

### 4. Blog Section
- Grid layout of latest blog posts
- Post metadata (date and author)
- Excerpts from original Jekyll posts:
  - Ideas Explosion
  - Learn the basic stuff (Markdown tutorial)
  - Technical posts (CDN, DNS, Routing, SDN)

### 5. Footer
- Social media links (Email, GitHub, LinkedIn)
- Copyright information
- Consistent with original site's contact information

## Key Improvements Over Jekyll Version

### Design Enhancements
- **Modern Color Scheme**: Updated with contemporary gradients and color palette
- **Better Typography**: Using Inter font for improved readability
- **Enhanced Visual Hierarchy**: Clear section separation and improved spacing
- **Interactive Elements**: Hover effects, animations, and micro-interactions

### User Experience
- **Faster Loading**: No Jekyll build process, direct HTML serving
- **Better Mobile Experience**: Optimized touch interactions and responsive design
- **Smooth Navigation**: Animated scrolling and active section highlighting
- **Accessibility**: Improved contrast ratios and keyboard navigation

### Technical Improvements
- **No Dependencies**: Removed Jekyll dependency, pure HTML/CSS/JS
- **Modern CSS**: Flexbox and Grid layouts, CSS custom properties
- **ES6 JavaScript**: Modern JavaScript features and best practices
- **Performance**: Optimized animations using CSS transforms and GPU acceleration

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage

1. Open `index.html` in any modern web browser
2. No build process or server required
3. All assets are self-contained in the folder

## Customization

### Colors
The main theme color can be changed by modifying the CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #5cacee;
  --primary-hover: #4a9bd1;
}
```

### Content
Update the content directly in `index.html`:
- Personal information in the About section
- Project details in the Projects section
- Blog posts in the Blog section

### Styling
Modify `styles.css` to customize:
- Layout and spacing
- Colors and typography
- Animations and effects
- Responsive breakpoints

## Original Jekyll Site Preservation

This HTML version preserves all the original content from the Jekyll site:
- Personal information and bio
- Project descriptions and links
- Blog post titles and excerpts
- Contact information and social links
- Overall site structure and navigation

The conversion maintains the essence of the original site while providing a more modern, interactive, and performant user experience.