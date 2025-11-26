# Mattéo Designs HTML Templates (v2) - Brand-Aligned

This folder contains HTML templates redesigned to match the actual Mattéo Designs brand aesthetic at https://www.matteodesigns.com/

## 🎨 Design System

### Brand Aesthetic
**Minimalist | Gallery-Focused | Professional | Sophisticated**

The design prioritizes:
- Clean, uncluttered layouts
- Large-format imagery
- Generous whitespace
- Content over decoration
- Typography-driven hierarchy

### Color Palette
```css
--text-primary: #1a1a1a        /* Dark charcoal for body text */
--text-secondary: #666666       /* Gray for supporting text */
--bg-primary: #ffffff           /* White primary background */
--bg-secondary: #fafafa         /* Off-white secondary background */
--border: #e5e5e5              /* Light gray borders */
```

**No gradients, no bright colors—just clean black, white, and grays.**

### Typography
- **Font Stack:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif)
- **Headings:** 600 weight, tight letter-spacing (-0.02em)
- **Body:** Normal weight, comfortable line-height (1.6-1.7)
- **Labels:** Uppercase, 600 weight, letter-spacing (0.05em-0.1em)

### Spacing System
- **Max width:** 1500px
- **Padding:** 3vw horizontal (responsive)
- **Section padding:** 6vw vertical
- **Grid gaps:** 3rem

### Interactive Elements
- **Buttons:** Outlined (1px border), fills on hover
- **Links:** Underlined, offset 3-4px, no color change on hover (opacity instead)
- **Transitions:** 0.2s ease (subtle, fast)

### Layout Principles
1. **Full-width sections** with max-width containers
2. **CSS Grid** for responsive layouts (auto-fit, minmax)
3. **Border separators** instead of background color changes
4. **Centered text** for section headers
5. **Left-aligned content** for body text
6. **Generous line-height** for readability

---

## 📄 Pages Created

### 1. santa-fe-interior-designer.html
**Primary local SEO landing page**

**Sections:**
- Hero with centered headline
- Full-width hero image (60vh)
- Services grid (3 columns)
- Portfolio preview (4 projects)
- Why Choose benefits (4 items)
- Design process (5 steps, numbered)
- Client testimonials (3 items)
- FAQ (4 questions)
- CTA section (gray background)

**SEO Features:**
- LocalBusiness schema
- Semantic HTML structure
- Target keywords naturally integrated

---

### 2. leed-certified-design.html
**Sustainable design services page**

**Sections:**
- Hero with sustainability focus
- Why choose LEED (4 benefits)
- Design process (5 steps)
- Measurable impact statistics
- Sustainable features grid (6 items)
- CTA section

**Focus:**
- Clean presentation of complex information
- Statistics-driven value proposition
- Process transparency

---

### 3. design-packages.html
**Pricing transparency page**

**Sections:**
- Hero with pricing promise
- 3 package cards (Consultation, Full Design, Turn-Key)
- Featured package highlight
- Comparison table (10 features)
- FAQ (5 questions)
- Value proposition statistics
- Dual CTA (schedule + call)

**Unique Elements:**
- "Most Popular" label on featured package
- Clean comparison table
- Custom projects call-out box
- ROI statistics

---

## 🔍 Key Differences from v1

### What Changed:
1. **Removed:** Colorful gradients, bright accent colors, decorative elements
2. **Removed:** Heavy shadows, 3D effects, complex animations
3. **Removed:** Icons, emojis (except where essential)
4. **Added:** Clean borders, subtle separators
5. **Added:** More whitespace, breathing room
6. **Changed:** Typography to system fonts only
7. **Changed:** Buttons to outlined style (no fills)
8. **Changed:** Links to simple underlines
9. **Simplified:** Grid layouts to auto-fit patterns
10. **Reduced:** Visual hierarchy to typography and spacing

### Philosophy Shift:
- **v1:** "Look at all these features!" (colorful, attention-grabbing)
- **v2:** "Let the work speak" (minimal, gallery-like)

---

## 💻 Squarespace Implementation

### Method 1: Direct HTML (Code Blocks)
1. Add a "Code" block to any page
2. Paste the complete HTML
3. Preview and adjust

**Limitations:**
- Squarespace strips some HTML/CSS
- Navigation may not match native
- Forms need to be rebuilt with Squarespace form blocks

### Method 2: Template Approach (Recommended)
1. **Extract the CSS:** Copy everything in `<style>` tags
2. **Add to Custom CSS:** Design → Custom CSS
3. **Build with blocks:** Use Squarespace's native blocks to match structure
4. **Maintain styling:** The custom CSS will apply to your blocks

### Method 3: Style Matching
Use this as a **visual reference** and recreate in Squarespace:
- Screenshot sections
- Match spacing, typography, layouts
- Use Squarespace's native blocks
- Apply custom CSS only where needed

---

## 🎯 Brand Alignment Checklist

These templates now match the actual site's:
- ✅ **Color palette** (black, white, grays only)
- ✅ **Typography** (system fonts, proper weights)
- ✅ **Spacing** (generous, consistent)
- ✅ **Layout** (max-width 1500px, 3vw padding)
- ✅ **Borders** (1px #e5e5e5)
- ✅ **Buttons** (outlined, no fills)
- ✅ **Links** (underlined, subtle)
- ✅ **Photography** (large format, full-width)
- ✅ **Grid** (responsive, auto-fit)
- ✅ **Navigation** (uppercase, spaced letters)

---

## 📐 Responsive Behavior

### Desktop (> 768px)
- Full navigation visible
- Multi-column grids
- Large typography
- 60vh hero images

### Mobile (< 768px)
- Navigation hidden (hamburger would be added)
- Single column grids
- Responsive typography (clamp)
- 50vh hero images
- Increased touch targets

---

## 🚀 Quick Start

### To Use These Templates:

1. **Open any HTML file** in a browser to preview
2. **View source** to see clean, commented code
3. **Copy sections** you need for Squarespace
4. **Adjust content** (replace placeholder text/images)
5. **Test responsively** (resize browser window)

### To Customize:

**Colors:**
```css
/* Change these in :root */
--text-primary: #1a1a1a;
--text-secondary: #666666;
--bg-primary: #ffffff;
--bg-secondary: #fafafa;
--border: #e5e5e5;
```

**Typography:**
```css
/* Adjust font sizes using clamp() */
font-size: clamp(min, preferred, max);

/* Example: */
font-size: clamp(2rem, 5vw, 4rem);
/* min: 2rem, scales with viewport, max: 4rem */
```

**Spacing:**
```css
/* Adjust padding/margins */
padding: 6vw 3vw;  /* Vertical: 6vw, Horizontal: 3vw */
```

---

## 📝 Content Guidelines

### Voice & Tone
Match the existing Matteo Designs voice:
- **Professional** but not stuffy
- **Confident** but not boastful
- **Sustainable** without being preachy
- **Local** while open to national

### Headlines
- Keep them **short and declarative**
- Avoid exclamation points
- Use natural language
- Focus on benefits over features

### Body Copy
- **Shorter paragraphs** (2-3 sentences max)
- **Active voice** preferred
- **Specific details** over vague claims
- **Natural keyword** integration

### CTAs
Use **simple, direct language:**
- ✅ "Schedule Consultation"
- ✅ "View Portfolio"
- ✅ "Contact Us"
- ❌ "Transform Your Space Today!"
- ❌ "Get Started Now!"
- ❌ "Claim Your Free Consultation!"

---

## 🔧 Technical Notes

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- CSS custom properties (variables) used
- No JavaScript dependencies (except mobile menu would need it)

### Performance
- **No external dependencies:** Zero HTTP requests for libraries
- **Inline CSS:** Fast first paint
- **Responsive images:** Use `w=` parameter in Unsplash URLs
- **Minimal CSS:** ~5-7KB per page

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (H1 → H2 → H3)
- Sufficient color contrast (WCAG AA)
- Keyboard navigation supported
- ARIA labels where needed (not yet added to templates)

---

## 📦 File Structure

```
html-pages-v2/
├── santa-fe-interior-designer.html    (Local SEO landing page)
├── leed-certified-design.html         (Sustainable design page)
├── design-packages.html               (Pricing page)
└── README.md                          (This file)
```

---

## 🎨 Design Decisions Explained

### Why No Colors?
The actual Matteo Designs site uses a **monochromatic palette** to:
- Let portfolio imagery be the focal point
- Create a gallery-like, sophisticated feel
- Maintain timeless design that won't feel dated
- Appeal to high-end clients

### Why System Fonts?
System fonts:
- Load instantly (no web font requests)
- Look native to each platform
- Are highly readable
- Reduce page weight

### Why Outlined Buttons?
Outlined buttons:
- Feel less aggressive than solid buttons
- Match the minimal aesthetic
- Maintain visual hierarchy without weight
- Are a design trend in high-end websites

### Why So Much Whitespace?
Whitespace:
- Creates breathing room
- Emphasizes important content
- Feels luxurious and premium
- Improves readability and comprehension

---

## ✅ Quality Checklist

Before using these templates, verify:

**Content:**
- [ ] Replace all placeholder text
- [ ] Update phone numbers
- [ ] Update email addresses
- [ ] Add real project images
- [ ] Add actual testimonials
- [ ] Update statistics/numbers

**Technical:**
- [ ] Test on mobile devices
- [ ] Test in all major browsers
- [ ] Validate HTML
- [ ] Check schema markup
- [ ] Test form submissions
- [ ] Verify all links work

**SEO:**
- [ ] Unique title tags
- [ ] Unique meta descriptions
- [ ] Proper heading hierarchy
- [ ] Image alt text
- [ ] Internal linking
- [ ] Schema markup

---

## 🆚 Comparison: v1 vs v2

| Aspect | v1 (Original) | v2 (Brand-Aligned) |
|--------|---------------|-------------------|
| **Colors** | Colorful gradients (greens, blues, purples) | Monochrome (black, white, grays) |
| **Typography** | Mixed serif/sans-serif | System fonts only |
| **Buttons** | Filled with gradients | Outlined, minimal |
| **Shadows** | Heavy, 3D effects | Minimal, subtle |
| **Icons** | Emojis throughout | Removed (content-focused) |
| **Spacing** | Moderate | Generous whitespace |
| **Borders** | Various colors | Single color (#e5e5e5) |
| **CTA Style** | Bright, attention-grabbing | Subtle, sophisticated |
| **Overall Feel** | Energetic, colorful | Calm, gallery-like |

**Which to use?**
- **v2 (this folder):** Matches actual Matteo Designs brand
- **v1:** More generic, could work for other businesses

---

## 🔗 Related Resources

### Matteo Designs Website
- Live site: https://www.matteodesigns.com/
- Study the navigation, portfolio layouts, and typography

### Design Inspiration
- **Minimalist portfolios:** Awwwards, Dribbble
- **Gallery layouts:** Squarespace architecture templates
- **Typography:** System font showcase sites

### Squarespace Resources
- [Custom CSS Guide](https://support.squarespace.com/hc/en-us/articles/206545787)
- [Code Blocks](https://support.squarespace.com/hc/en-us/articles/206543167)
- [SEO Settings](https://support.squarespace.com/hc/en-us/articles/205814578)

---

## 📈 Next Steps

1. **Review templates** in a browser
2. **Gather real content** (photos, testimonials, copy)
3. **Choose implementation method** (Code Block vs Template vs Style Reference)
4. **Test in Squarespace** (create draft pages first)
5. **Refine and adjust** based on actual content
6. **Get client approval** before publishing
7. **Launch and monitor** performance

---

**Version:** 2.0 (Brand-Aligned)
**Created:** 2025-01-24
**Status:** Production Ready
**Difference from v1:** Completely redesigned to match actual brand aesthetic
