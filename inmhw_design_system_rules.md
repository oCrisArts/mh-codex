# INMHW Design System Rules
## Monster Hunter Local Codex – Design System Documentation for Figma MCP Integration

---

## 📋 Project Overview

**Project Name:** INMHW (Monster Hunter Local Codex)  
**Framework:** Astro (SSG) + Bulma + Sass  
**Data Format:** Markdown (.md) / JSON  
**Accessibility:** WCAG AA Standard  
**Hosting:** XAMPP Local Server  
**Output:** Pure HTML/CSS (minimal JavaScript)

---

## 1. 🎨 Token Definitions

### Color System

#### Primary Colors (Monster/Category System)
- **Low Rank:** `#8B7355` (Bronze) – Indicates entry-level content
- **High Rank:** `#C0A080` (Silver) – Indicates intermediate content  
- **Master Rank (Iceborne):** `#FFD700` (Gold) – Indicates advanced content

#### Element Weakness Colors (Elemental System)
These colors correspond to Monster weakness indicators:
- **Fire:** `#FF4500` (OrangeRed) – Used in cards, badges, and weakness indicators
- **Water:** `#4A90E2` (Blue) – Aquatic element indicator
- **Thunder:** `#FFD700` (Gold) – Electric element indicator
- **Ice:** `#87CEEB` (SkyBlue) – Freezing element indicator
- **Dragon:** `#9B59B6` (Purple) – Dragon element indicator

#### Neutral Colors
- **Background:** `#F5F5F5` (Light Gray) – Main page background
- **Card Background:** `#FFFFFF` (White) – Individual card backgrounds
- **Text Primary:** `#2C3E50` (Dark Blue-Gray) – Main text content
- **Text Secondary:** `#7F8C8D` (Medium Gray) – Secondary information
- **Border:** `#ECF0F1` (Light Border Gray) – Subtle borders and dividers

#### Interactive States
- **Hover:** `rgba(0, 0, 0, 0.08)` – Subtle overlay on card hover
- **Active/Focus:** `#3498DB` (Bright Blue) – Focus indicators for accessibility
- **Disabled:** `#BDC3C7` (Muted Gray) – Disabled elements

### Typography System

#### Font Stack
```scss
// Primary font for body and UI elements
$font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

// Secondary font for headings (Monster names, titles)
$font-heading: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

#### Font Sizes (in `rem`)
- **H1 (Page Title):** `2.5rem` (40px) – Monster Codex main title
- **H2 (Section Heading):** `2rem` (32px) – "Low Rank", "High Rank" category headers
- **H3 (Card Title):** `1.5rem` (24px) – Monster name on cards and detail pages
- **Body Large:** `1.125rem` (18px) – Description text
- **Body Regular:** `1rem` (16px) – Standard paragraph text, card information
- **Body Small:** `0.875rem` (14px) – Secondary information, labels
- **Label/Badge:** `0.75rem` (12px) – Weakness badges, element indicators

#### Font Weights
- **Light:** `300` – Secondary text
- **Regular:** `400` – Body text (default)
- **Medium:** `500` – Labels, secondary headings
- **Semi-Bold:** `600` – Card titles, emphasis
- **Bold:** `700` – Main headings, hero text

#### Line Heights
- **Heading:** `1.2` – Tight line height for titles
- **Body:** `1.6` – Comfortable reading for longer text
- **Label:** `1.4` – Medium density for labels

### Spacing System (Modular Scale: 8px base)

```scss
$spacing-unit: 0.5rem; // 8px

$spacing: (
  'xs': $spacing-unit * 1,      // 8px
  'sm': $spacing-unit * 2,      // 16px
  'md': $spacing-unit * 3,      // 24px
  'lg': $spacing-unit * 4,      // 32px
  'xl': $spacing-unit * 5,      // 40px
  'xxl': $spacing-unit * 6,     // 48px
  'xxxl': $spacing-unit * 8,    // 64px
);
```

#### Common Spacing Applications
- **Card Padding:** `1.5rem` (24px)
- **Section Gap:** `2rem` (32px)
- **Grid Gap:** `1.5rem` (24px) for cards
- **Header Padding:** `1rem` (16px) vertical, `1.5rem` (24px) horizontal

### Sizing Scale

#### Container Widths
- **Max Width (Content):** `1200px` – Maximum readable width
- **Container Padding:** `1.5rem` (24px) on sides
- **Sidebar Width:** `350px` – For detail page right column

#### Card Dimensions (Grid System)
- **Card Width (Desktop):** `300px` – Monster cards in grid
- **Card Height (Desktop):** `400px` – With image overlay area
- **Card Image Height:** `250px` – Maintains aspect ratio
- **Card Padding:** `1.5rem` (24px)

#### Responsive Breakpoints (Mobile-First)
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px,
);
```

- **Mobile (320px - 767px):** Single column cards, full-width
- **Tablet (768px - 1023px):** Two columns, adjusted spacing
- **Desktop (1024px - 1439px):** Three columns, full spacing
- **Wide (1440px+):** Four columns with constrained max-width

### Border & Radius System

- **Default Border Radius:** `0.5rem` (8px) – Cards, buttons
- **Subtle Radius:** `0.25rem` (4px) – Slight emphasis on elements
- **Large Radius:** `1rem` (16px) – Hero sections, badges
- **Border Width (Default):** `1px` – Subtle borders
- **Border Width (Focus):** `2px` – Accessibility focus indicators

### Shadow System

- **Elevation 1 (Cards):** `0 2px 8px rgba(0, 0, 0, 0.1)` – Subtle card shadow
- **Elevation 2 (Hover):** `0 4px 16px rgba(0, 0, 0, 0.15)` – Elevated hover state
- **Elevation 3 (Modal):** `0 8px 32px rgba(0, 0, 0, 0.2)` – Maximum depth

### Animation & Transitions

- **Transition Speed (Default):** `0.3s` – Standard interactions
- **Transition Timing:** `ease-in-out` – Smooth easing function
- **Hover Effect:** Scale `1.02` + shadow elevation increase

---

## 2. 🧩 Component Library

### Core Components (Astro Components)

#### Monster Card Component (`MonsterCard.astro`)
```astro
---
interface Props {
  name: string;
  image: string;
  rank: 'low' | 'high' | 'master';
  weakness: string;
  elementType: 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';
  link: string;
}

const { name, image, rank, weakness, elementType } = Astro.props;
---

<article class="monster-card" data-rank={rank} data-element={elementType}>
  <figure class="card-image">
    <img src={image} alt={name} loading="lazy" />
    <figcaption class="weakness-overlay">
      <span class="weakness-badge">{weakness}</span>
    </figcaption>
  </figure>
  <div class="card-content">
    <h3 class="card-title">{name}</h3>
    <a href={link} class="card-link">View Details →</a>
  </div>
</article>
```

**Styling:** Bulma-based with custom `.scss` mixins
- Base card: `1px solid $border-color`
- Hover state: Shadow elevation + background lighten
- Weak overlay: Positioned absolutely with `opacity: 0` → `opacity: 1` on hover

#### Badge Component (`WeaknessBadge.astro`)
```astro
---
interface Props {
  element: 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';
  label: string;
}

const { element, label } = Astro.props;
---

<span class="badge badge--{element}">{label}</span>
```

**Styling:** 
- Inline-block display
- Padding: `0.5rem 1rem`
- Border-radius: `0.5rem`
- Font-weight: `600`
- Color mapped to element weakness color system

#### Tab Component (`TabSystem.astro`)
For the detail page (Ecology, Physiology, Materials)
```astro
---
interface Props {
  tabs: Array<{ id: string; label: string; content: string }>;
}

const { tabs } = Astro.props;
---

<div class="tabs">
  <ul class="tabs-list">
    {tabs.map(tab => (
      <li class="tabs-item">
        <button class="tabs-button" data-tab={tab.id}>{tab.label}</button>
      </li>
    ))}
  </ul>
  {tabs.map(tab => (
    <div class="tab-content" data-tab={tab.id}>
      <Fragment set:html={tab.content} />
    </div>
  ))}
</div>
```

#### Search Bar Component (`SearchBar.astro`)
Header search functionality
```astro
<form class="search-form" role="search">
  <input 
    type="search" 
    class="search-input" 
    placeholder="Search monsters..."
    aria-label="Search monsters by name"
  />
  <button type="submit" class="search-button" aria-label="Submit search">
    🔍
  </button>
</form>
```

#### Category Filter Component (`CategoryFilter.astro`)
Horizontal category selector in header
```astro
---
const categories = ['Low Rank', 'High Rank', 'Master Rank', 'All'];
---

<nav class="category-filter" aria-label="Filter by rank">
  {categories.map(cat => (
    <button class="filter-button" data-category={cat.toLowerCase()}>
      {cat}
    </button>
  ))}
</nav>
```

### Component Spacing Specifications

**Card Grid:**
- Column gap: `1.5rem` (24px)
- Row gap: `2rem` (32px)
- Mobile: `1rem` single column
- Tablet: `2 columns` with `1.5rem` gap
- Desktop: `3 columns` with `1.5rem` gap

**Details Page Layout:**
- Left column width: `60%` (image + basic info)
- Right column width: `40%` (tabs)
- Gap between columns: `3rem` (48px)
- Mobile stacking: Columns stack at `<768px`

---

## 3. 🛠️ Frameworks & Libraries

### Build System & Framework
- **SSG Framework:** Astro 4.x
  - Configuration: `astro.config.mjs`
  - Output mode: `static`
  - Build command: `npm run build` → outputs `/dist` directory

### Styling Framework
- **Primary:** Bulma CSS Framework (customized)
- **Preprocessor:** Sass (SCSS)
- **Installation:** `npm install bulma sass`

#### Bulma Customization (`styles/variables.scss`)
```scss
// Override Bulma variables before importing
$primary: #3498DB;
$info: #4A90E2;
$success: #27AE60;
$warning: #F39C12;
$danger: #E74C3C;

$family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$size-1: 3rem;
$size-2: 2.5rem;
$size-3: 2rem;
$size-4: 1.5rem;
$size-5: 1.25rem;
$size-6: 1rem;
$size-7: 0.875rem;

// Import Bulma after variable overrides
@import '../../node_modules/bulma/bulma';
```

### Build Configuration (`astro.config.mjs`)
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'file',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/styles/variables.scss';`,
        },
      },
    },
  },
});
```

---

## 4. 📁 Asset Management

### Image Organization

**Directory Structure:**
```
src/assets/
├── images/
│   ├── monsters/
│   │   ├── low-rank/
│   │   ├── high-rank/
│   │   └── master-rank/
│   ├── elements/
│   │   ├── fire.svg
│   │   ├── water.svg
│   │   ├── thunder.svg
│   │   ├── ice.svg
│   │   └── dragon.svg
│   └── ui/
│       ├── logo.svg
│       └── background-pattern.svg
```

### Image Specifications

**Monster Card Images:**
- Format: `.webp` (primary) + `.jpg` (fallback)
- Dimensions: `400px × 300px` (4:3 aspect ratio)
- File size: `<100KB` (optimized)
- Compression: Quality 80% for WebP, 85% for JPG

**Monster Detail Images:**
- Dimensions: `600px × 500px` (high resolution for detail view)
- Format: `.webp` primary format
- File size: `<150KB`

**Element Icons:**
- Format: `.svg` (scalable, lightweight)
- Dimensions: `24px × 24px` base (scalable)
- File size: `<5KB` per icon

### Asset Optimization

- **Lazy Loading:** All monster images use `loading="lazy"` attribute
- **Responsive Images:** Use Astro's `<Image />` component for automatic optimization
- **Cache Strategy:** Static assets cached with hash-based filenames
- **CDN Ready:** Assets structured for future CDN migration

### Image Component Usage (Astro)
```astro
---
import { Image } from 'astro:assets';
import monsterImage from '../assets/images/monsters/rathalos.webp';
---

<Image 
  src={monsterImage} 
  alt="Rathalos - Flying Wyvern"
  width={400}
  height={300}
  format="webp"
/>
```

---

## 5. 🎯 Icon System

### Icon Library
- **Source:** Custom SVG icons + optional `lucide-react` for UI icons (stripped in build)
- **Storage:** `/src/assets/icons/`
- **Format:** SVG with `currentColor` for theming

### Element Icons (Weakness Indicators)
Each element has a dedicated icon following Monster Hunter conventions:

```
icons/elements/
├── fire.svg        → Flame symbol (red)
├── water.svg       → Wave symbol (blue)
├── thunder.svg     → Lightning bolt (yellow)
├── ice.svg         → Snowflake (cyan)
└── dragon.svg      → Dragon symbol (purple)
```

### Icon Sizing Scale
- **Small (Label):** `16px`
- **Medium (Badge):** `20px`
- **Large (Section Header):** `32px`

### Icon Integration in Components
```astro
---
import FireIcon from '../assets/icons/elements/fire.svg?raw';
---

<span class="element-badge element-badge--fire">
  <Fragment set:html={FireIcon} />
  <span>Fire</span>
</span>
```

### Icon Styling (CSS)
```scss
.element-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  &--fire {
    background-color: rgba(255, 69, 0, 0.1);
    color: #FF4500;
    
    svg { fill: #FF4500; }
  }

  &--water {
    background-color: rgba(74, 144, 226, 0.1);
    color: #4A90E2;
    
    svg { fill: #4A90E2; }
  }

  &--thunder {
    background-color: rgba(255, 215, 0, 0.1);
    color: #FFD700;
    
    svg { fill: #FFD700; }
  }

  &--ice {
    background-color: rgba(135, 206, 235, 0.1);
    color: #87CEEB;
    
    svg { fill: #87CEEB; }
  }

  &--dragon {
    background-color: rgba(155, 89, 182, 0.1);
    color: #9B59B6;
    
    svg { fill: #9B59B6; }
  }
}
```

---

## 6. 💅 Styling Approach

### CSS Architecture: BEM + SCSS Modules

**Methodology:** Block, Element, Modifier (BEM) with Sass nesting

```scss
// Example: Monster Card Component
.monster-card {
  // Block: main container
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: $white;
  transition: all 0.3s ease-in-out;

  // Modifier: rank variants
  &--low-rank {
    border-color: #8B7355;
  }

  &--high-rank {
    border-color: #C0A080;
  }

  &--master-rank {
    border-color: #FFD700;
  }

  // Element: card image container
  .monster-card__image {
    position: relative;
    overflow: hidden;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }
  }

  // Element: weakness overlay
  .monster-card__weakness {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  // Hover state
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);

    .monster-card__image img {
      transform: scale(1.05);
    }

    .monster-card__weakness {
      opacity: 1;
    }
  }

  // Element: card content
  .monster-card__content {
    padding: 1.5rem;
  }

  .monster-card__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .monster-card__link {
    color: $primary;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}
```

### Global Styles

**Base Reset (`styles/reset.scss`):**
```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: $font-body;
  line-height: 1.6;
  color: $text-primary;
  background-color: $bg-main;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
}
```

### Responsive Design Strategy (Mobile-First)

**Base Mobile Styles (320px):**
- Single column layout
- Full-width containers with side padding
- Stacked navigation

**Tablet Styles (768px+):**
```scss
@media (min-width: 768px) {
  .monster-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
```

**Desktop Styles (1024px+):**
```scss
@media (min-width: 1024px) {
  .monster-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .detail-page {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 3rem;
  }
}
```

**Wide Styles (1440px+):**
```scss
@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .monster-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### CSS Custom Properties (Variables for Theme)

```scss
:root {
  // Colors
  --color-primary: #3498DB;
  --color-fire: #FF4500;
  --color-water: #4A90E2;
  --color-thunder: #FFD700;
  --color-ice: #87CEEB;
  --color-dragon: #9B59B6;

  // Typography
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  // Spacing
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  // Transitions
  --transition-default: all 0.3s ease-in-out;
}
```

---

## 7. 🗂️ Project Structure

### Astro Project Architecture

```
INMHW/
├── src/
│   ├── components/
│   │   ├── Header.astro              # Main header with search and categories
│   │   ├── MonsterCard.astro         # Individual monster card component
│   │   ├── MonsterGrid.astro         # Grid layout for cards
│   │   ├── SearchBar.astro           # Search functionality
│   │   ├── CategoryFilter.astro      # Rank category filter
│   │   ├── TabSystem.astro           # Tab component for detail page
│   │   ├── WeaknessBadge.astro       # Element weakness badge
│   │   ├── Footer.astro              # Page footer
│   │   └── Navigation.astro          # Mobile navigation
│   │
│   ├── layouts/
│   │   ├── MainLayout.astro          # Default page layout
│   │   └── DetailLayout.astro        # Detail page specific layout
│   │
│   ├── pages/
│   │   ├── index.astro               # Home page (monster listing)
│   │   ├── monsters/
│   │   │   └── [slug].astro          # Dynamic monster detail page
│   │   └── 404.astro                 # 404 error page
│   │
│   ├── styles/
│   │   ├── variables.scss            # Bulma variable overrides
│   │   ├── reset.scss                # Global reset styles
│   │   ├── globals.scss              # Global utility styles
│   │   ├── components/
│   │   │   ├── card.scss             # Card component styles
│   │   │   ├── badge.scss            # Badge styles
│   │   │   ├── tabs.scss             # Tab system styles
│   │   │   ├── header.scss           # Header styles
│   │   │   └── grid.scss             # Grid layout styles
│   │   └── main.scss                 # Main stylesheet imports
│   │
│   ├── data/
│   │   ├── monsters.json             # Monster database
│   │   ├── monsters/
│   │   │   ├── low-rank.md           # Low rank monsters
│   │   │   ├── high-rank.md          # High rank monsters
│   │   │   └── master-rank.md        # Master rank monsters
│   │   ├── elements.json             # Element data and colors
│   │   └── search-index.json         # Pre-built search index
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── monsters/
│   │   │   │   ├── low-rank/
│   │   │   │   ├── high-rank/
│   │   │   │   └── master-rank/
│   │   │   ├── elements/
│   │   │   │   ├── fire.svg
│   │   │   │   ├── water.svg
│   │   │   │   ├── thunder.svg
│   │   │   │   ├── ice.svg
│   │   │   │   └── dragon.svg
│   │   │   └── ui/
│   │   │       ├── logo.svg
│   │   │       └── background.svg
│   │   └── icons/
│   │       └── elements/
│   │
│   ├── utils/
│   │   ├── searchMonsters.ts         # Search utility function
│   │   ├── filterByRank.ts           # Rank filtering logic
│   │   ├── elementWeakness.ts        # Element weakness mapping
│   │   └── formatData.ts             # Data formatting utilities
│   │
│   └── env.d.ts                      # TypeScript environment types
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── astro.config.mjs                  # Astro configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies
├── .gitignore
├── README.md
└── DESIGN_SYSTEM.md                  # This document
```

### Data Organization Pattern (Markdown + JSON)

**Monster Database Structure (`data/monsters.json`):**
```json
{
  "monsters": [
    {
      "id": "rathalos",
      "name": "Rathalos",
      "slug": "rathalos",
      "rank": "high",
      "weakness": {
        "primary": "thunder",
        "secondary": "water"
      },
      "image": "/images/monsters/high-rank/rathalos.webp",
      "description": "A flying wyvern known for its mastery of fire...",
      "ecology": "Rathalos nests in volcanic regions...",
      "materials": ["Rathalos Hide", "Rathalos Wing", "Rathalos Tail"],
      "recommendedWeapons": ["Empress Cane MR"],
      "recommendedArmor": "Rathalos MR"
    }
  ]
}
```

**Individual Monster File (`data/monsters/high-rank.md`):**
```markdown
---
id: rathalos
name: Rathalos
rank: high
weakness: thunder
image: /images/monsters/high-rank/rathalos.webp
---

## Rathalos

### Ecology
Rathalos is a flying wyvern that rules the skies with its superior flight...

### Materials
- Rathalos Hide+
- Rathalos Wing
- Rathalos Tail
```

### Feature-Based Organization Pattern

**Search Feature:**
- Utility: `/src/utils/searchMonsters.ts`
- Index: `/src/data/search-index.json` (pre-built for performance)
- Component: `<SearchBar.astro>`

**Category Filter Feature:**
- Utility: `/src/utils/filterByRank.ts`
- Component: `<CategoryFilter.astro>`

**Element System Feature:**
- Data: `/src/data/elements.json`
- Icons: `/src/assets/icons/elements/`
- Utility: `/src/utils/elementWeakness.ts`
- Styles: `/src/styles/components/badge.scss`

---

## 8. ♿ Accessibility (WCAG AA)

### Semantic HTML

All components use proper semantic HTML5:
```astro
<header role="banner">
  <!-- Header content -->
</header>

<main role="main">
  <!-- Page content -->
</main>

<section aria-labelledby="low-rank-heading">
  <h2 id="low-rank-heading">Low Rank Monsters</h2>
  <!-- Section content -->
</section>

<nav aria-label="Monster categories">
  <!-- Navigation items -->
</nav>
```

### ARIA Attributes

- **`aria-label`:** For icon-only buttons and descriptions
- **`aria-labelledby`:** Linking sections to their headings
- **`aria-describedby`:** Providing additional context
- **`role="search"`:** On search form
- **`role="main"`:** On main content area

### Keyboard Navigation

- All interactive elements: Accessible via `Tab` key
- Focus indicators: Clear 2px border with `outline: 2px solid $primary`
- Search: Can be accessed via `Ctrl+K` / `Cmd+K`

### Color Contrast

- Text on background: Minimum `4.5:1` ratio
- Element badges on backgrounds: Minimum `3:1` ratio
- Icons: Inherit from text color for proper contrast

### Form Accessibility

```astro
<form class="search-form" role="search">
  <label for="search-input" class="sr-only">Search monsters</label>
  <input 
    id="search-input"
    type="search" 
    placeholder="Search monsters..."
    aria-label="Search monsters by name or element"
  />
  <button type="submit">
    <span aria-hidden="true">🔍</span>
    <span class="sr-only">Submit search</span>
  </button>
</form>

<!-- Screen reader only utility class -->
<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
```

### Skip Links

Included in header for keyboard users to skip to main content:
```astro
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 9. 📊 Data Management

### Markdown Data Files (`data/monsters/`)

Each monster can have detailed markdown files:

```markdown
---
id: rathalos
name: Rathalos
rank: high
weakness:
  primary: thunder
  secondary: water
image: /images/monsters/high-rank/rathalos.webp
bestWeapons:
  - Empress Cane MR
  - Nergal Reaper
bestArmor: Rathalos MR
---

## Ecology
Rathalos nests in volcanic regions...

## Physiology
Known for its crimson scales and sharp talons...

## Materials
- Rathalos Hide+
- Rathalos Tail
- Rathalos Wing
```

### JSON Data Structure (`data/monsters.json`)

Centralized database for efficient searching and filtering:

```json
{
  "monsters": [
    {
      "id": "rathalos",
      "name": "Rathalos",
      "rank": "high",
      "weakness": ["thunder", "water"],
      "image": "/images/monsters/high-rank/rathalos.webp"
    }
  ],
  "ranks": ["low", "high", "master"],
  "elements": ["fire", "water", "thunder", "ice", "dragon"]
}
```

### Data Querying Pattern

```typescript
// src/utils/getMonsterData.ts
import monstersData from '../data/monsters.json';

export function getMonsterById(id: string) {
  return monstersData.monsters.find(m => m.id === id);
}

export function getMonstersByRank(rank: string) {
  return monstersData.monsters.filter(m => m.rank === rank);
}

export function getMonstersByWeakness(element: string) {
  return monstersData.monsters.filter(m => m.weakness.includes(element));
}
```

---

## 10. 🔌 Figma MCP Integration

### Design Tokens Connection

Figma components and variables should be structured to match this design system:

**Variable Structure in Figma:**
```
Colors/
├── Primary → #3498DB
├── Fire → #FF4500
├── Water → #4A90E2
├── Thunder → #FFD700
├── Ice → #87CEEB
└── Dragon → #9B59B6

Typography/
├── H1 → Font: 2.5rem, Weight: 700
├── H2 → Font: 2rem, Weight: 600
├── Body → Font: 1rem, Weight: 400
└── Label → Font: 0.875rem, Weight: 600

Spacing/
├── XS → 0.5rem
├── SM → 1rem
├── MD → 1.5rem
├── LG → 2rem
└── XL → 3rem
```

**Component Mapping:**
- Figma `MonsterCard` → Astro `MonsterCard.astro`
- Figma `WeaknessBadge` → Astro `WeaknessBadge.astro`
- Figma `TabSystem` → Astro `TabSystem.astro`

### Export Workflow

1. Update design in Figma
2. Run Figma MCP tool: `get_design_context` for component specs
3. Verify CSS variables match token definitions
4. Update component `.scss` files
5. Build with `npm run build`
6. Deploy to XAMPP local server

---

## 11. ⚙️ Build & Deployment

### Build Commands

```bash
# Install dependencies
npm install

# Development server (with live reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

### Build Output Structure

```
dist/
├── index.html                  # Home page
├── monsters/
│   ├── rathalos/index.html     # Monster detail pages
│   ├── legiana/index.html
│   └── ...
├── styles/
│   └── style.[hash].css        # Minified CSS bundle
├── images/
│   └── [optimized assets]
└── sitemap.xml
```

### XAMPP Local Server Setup

1. Copy `/dist` contents to `C:\xampp\htdocs\inmhw\` (Windows) or `/Applications/XAMPP/htdocs/inmhw/` (Mac)
2. Start Apache in XAMPP Control Panel
3. Access at `http://localhost/inmhw/`

### Performance Optimization

- CSS minification: Automatic via Astro build
- Image optimization: Automatic via Astro Image component
- JS removal: Only JavaScript required for interactivity included
- Caching: Static files cached with far-future expires headers

---

## 12. 📝 Implementation Checklist

- [ ] Define all tokens in `/src/styles/variables.scss`
- [ ] Create Astro components in `/src/components/`
- [ ] Organize monster data in `/src/data/`
- [ ] Create detail page template: `/src/pages/monsters/[slug].astro`
- [ ] Implement search functionality
- [ ] Implement category filter
- [ ] Set up responsive breakpoints
- [ ] Add accessibility attributes
- [ ] Configure Figma MCP integration
- [ ] Test build output
- [ ] Deploy to XAMPP server

---

## 13. 📚 References & Resources

- **Astro Documentation:** https://docs.astro.build
- **Bulma CSS:** https://bulma.io
- **WCAG 2.1 Standards:** https://www.w3.org/WAI/WCAG21/quickref/
- **Sass Documentation:** https://sass-lang.com/documentation
- **Web Accessibility Guidelines:** https://www.w3.org/WAI/fundamentals/

---

**Last Updated:** 2026-03-27  
**Version:** 1.0.0  
**Maintained By:** INMHW Development Team
