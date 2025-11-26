# Mattéo Designs - HTML Page Templates

Complete implementation of the improved site structure plan in production-ready HTML.

## 📁 Files Created

### 1. **base-template.html**
A reusable base template with complete styling system and structure.

**Features:**
- Responsive navigation with mobile menu
- Sticky header with CTA button
- Complete footer with 4-column layout
- Consistent color scheme and typography
- Mobile-optimized with click-to-call button
- Schema.org markup included
- Utility classes for rapid development

**Use this template for:** Creating new pages quickly by replacing the `{{ MAIN_CONTENT }}` placeholder

---

### 2. **santa-fe-interior-designer.html** ⭐ HIGH PRIORITY
Primary local SEO landing page targeting "interior designer Santa Fe"

**SEO Optimized For:**
- "interior designer santa fe"
- "santa fe interior design"
- "santa fe interior designer"

**Key Features:**
- Hero section with location badge and trust indicators
- Service cards (Residential, Commercial, LEED)
- "Why Choose Us" benefits grid
- 5-step design process timeline
- Portfolio preview gallery
- Local testimonials with star ratings
- Service area map section
- Comprehensive FAQ section
- Multiple CTAs throughout
- LocalBusiness schema markup

**Performance Features:**
- Mobile-first responsive design
- Optimized images
- Fast loading with inline critical CSS
- Schema markup for rich snippets

**Conversion Elements:**
- 6 strategically placed CTAs
- Phone number prominently displayed
- Free consultation buttons
- Trust indicators (years experience, rating, projects)

---

### 3. **leed-certified-design.html** ⭐ HIGH PRIORITY
Specialist landing page for sustainable design services

**SEO Optimized For:**
- "leed certified interior designer"
- "sustainable interior design"
- "eco-friendly design"

**Key Sections:**
- Benefits grid (cost savings, health, environment, property value)
- 5-step LEED design process
- Sustainability credentials showcase
- Portfolio of LEED projects
- ROI calculator/statistics

**Unique Elements:**
- Green color scheme (matches sustainability theme)
- Environmental impact metrics
- LEED certification explanation
- Before/after energy usage comparisons

---

### 4. **design-packages.html** ⭐ HIGH PRIORITY
Transparent pricing page addressing "how much does it cost"

**SEO Optimized For:**
- "interior design cost"
- "interior design pricing"
- "interior design packages"

**Package Tiers:**
1. **Consultation Package** - $500
   - Entry-level for uncertain clients
   - Credit toward full services

2. **Full Design Package** - $5,000+ per room (FEATURED)
   - Most popular option
   - Complete design service
   - Highlighted with special styling

3. **Turn-Key Package** - $15,000+ whole home
   - Premium white-glove service
   - Comprehensive implementation

**Additional Features:**
- Side-by-side comparison table
- Custom projects call-out
- ROI statistics and value proposition
- Detailed FAQ section
- Transparent "what's included" lists
- Budget guidance
- Payment options information

---

### 5. **blog-post-template.html**
Complete blog post template with SEO optimization

**Features:**
- Article schema markup
- Breadcrumb navigation
- Category badges
- Reading time indicator
- Author bio section
- Related posts grid
- In-content CTA boxes
- Social sharing ready
- Typography optimized for readability

**Template Variables:**
- `{{ BLOG_TITLE }}` - Post title
- `{{ META_DESCRIPTION }}` - SEO description
- `{{ FEATURED_IMAGE }}` - Hero image URL
- `{{ CATEGORY }}` - Post category

**Example Content Included:**
"5 Principles of Sustainable Interior Design in Santa Fe"
- 2,500+ word comprehensive guide
- Multiple H2/H3 headings for SEO
- Internal linking to services
- External authoritative sources
- Formatted lists and blockquotes
- Images with alt text

---

### 6. **portfolio-project-enhanced.html**
Enhanced portfolio project page template

**Key Improvements Over Current:**
- Project tags for filtering
- Detailed project specs sidebar
- Challenge & Solution narrative
- Before/After image comparison
- Measurable results statistics
- Photo gallery grid
- Key features showcase
- Client testimonial
- Related projects section
- Schema.org CreativeWork markup

**Conversion Elements:**
- Clear project details (timeline, budget, size)
- Results-focused metrics
- Social proof through testimonial
- Multiple CTAs to consultation
- Related projects to keep users engaged

---

## 🎨 Design System

### Color Palette
```css
--primary-color: #2c3e50;      /* Dark blue-gray */
--secondary-color: #3498db;     /* Bright blue */
--accent-color: #27ae60;        /* Green (sustainability) */
--text-dark: #2c3e50;
--text-light: #7f8c8d;
--bg-light: #f8f9fa;
--gold-color: #f39c12;          /* Ratings/awards */
```

### Typography
- **Headings:** System fonts (-apple-system, Segoe UI, Roboto)
- **Body (Blog):** Georgia, serif
- **Body (Pages):** System fonts for readability

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚀 Implementation Guide

### For Squarespace

#### 1. **Using These Templates in Squarespace:**

**Option A: Code Blocks**
1. Create a new page in Squarespace
2. Add a "Code" block
3. Paste the HTML content
4. Note: Some features may be limited

**Option B: Custom Page Templates** (Recommended)
1. Go to Design → Custom CSS
2. Copy the CSS from `<style>` tags
3. Create page using Squarespace blocks
4. Match the structure and styling

**Option C: Developer Mode**
1. Enable Squarespace Developer Mode
2. Create custom page templates
3. Upload via Git or SFTP

#### 2. **Key Squarespace Settings:**

**SEO Settings (per page):**
```
Settings → SEO → Page SEO
- Page Title: Copy from <title> tag
- Meta Description: Copy from meta description
- URL Slug: Use semantic URLs (e.g., /santa-fe-interior-designer)
```

**Schema Markup:**
```
Settings → Advanced → Code Injection → Header
- Paste the <script type="application/ld+json"> content
```

**Analytics:**
```
Settings → Advanced → Code Injection
- Add Google Analytics
- Add Microsoft Clarity
- Add Facebook Pixel
```

#### 3. **Form Integration:**

Forms in these templates should be replaced with:
- Squarespace native forms (drag and drop)
- Or embedded forms (Typeform, Jotform)
- Connect to GoHighLevel via Zapier

#### 4. **Image Optimization:**

Before uploading to Squarespace:
- Compress images (TinyPNG, ImageOptim)
- Resize to appropriate dimensions
- Use WebP format when possible
- Always add descriptive alt text

---

## 📱 Mobile Optimization

All pages include:
- Responsive grid layouts (CSS Grid + Flexbox)
- Mobile-friendly navigation
- Touch-friendly buttons (48x48px minimum)
- Readable font sizes (16px+ body text)
- Click-to-call phone numbers on mobile
- Optimized images for mobile bandwidth

---

## 🔍 SEO Features Included

### On-Page SEO
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Descriptive title tags
- ✅ Meta descriptions
- ✅ Image alt text
- ✅ Internal linking structure
- ✅ Breadcrumb navigation
- ✅ Mobile-friendly design
- ✅ Fast loading (minimal dependencies)

### Schema Markup
- ✅ LocalBusiness (santa-fe page)
- ✅ Organization (all pages)
- ✅ BlogPosting (blog template)
- ✅ CreativeWork (portfolio template)
- ✅ Breadcrumb lists

### Conversion Optimization
- ✅ Multiple CTAs per page
- ✅ Trust indicators (reviews, stats, certifications)
- ✅ Clear value propositions
- ✅ Social proof (testimonials)
- ✅ Benefit-focused copy
- ✅ Low-friction contact options
- ✅ Prominent phone numbers

---

## 🎯 Priority Implementation Order

### Week 1 (High Priority)
1. **santa-fe-interior-designer.html** → `/santa-fe-interior-designer`
   - Primary local SEO page
   - Highest conversion potential

2. **leed-certified-design.html** → `/services/leed-certified-design`
   - Unique differentiator
   - High-value clients

3. **design-packages.html** → `/services/packages`
   - Addresses pricing objections
   - Pre-qualifies leads

### Week 2 (Medium Priority)
4. **blog-post-template.html**
   - Create 2-4 initial blog posts
   - Start building content authority

5. **portfolio-project-enhanced.html**
   - Enhance top 3-5 portfolio projects
   - Improve showcase value

### Week 3-4 (Expand)
6. Create additional service pages using base template
7. Build location pages for nearby cities
8. Create lead magnet landing pages

---

## ⚙️ Customization Guide

### Replacing Placeholders

Throughout the templates, replace:
- `(505) XXX-XXXX` → Actual phone number
- `info@matteodesigns.com` → Actual email
- `[STREET ADDRESS]` → Business address
- `[ZIP]` → Zip code
- `[LAT]` and `[LONG]` → GPS coordinates

### Images

Replace placeholder images with:
1. Professional portfolio photos
2. High-resolution project images
3. Headshots of Mattéo
4. Certification badges
5. Award logos

**Image Sources in Templates:**
- Currently using Unsplash placeholder images
- Replace with actual project photos
- Ensure proper image optimization

### Content Customization

**Testimonials:**
- Replace example testimonials with real clients
- Add photos if available
- Include project names for context

**Statistics:**
- Update "15+ years" if different
- Adjust project counts
- Update review count/rating

**Services:**
- Modify service descriptions to match actual offerings
- Adjust pricing if needed
- Update package details

---

## 📊 Analytics & Tracking

### Goals to Set Up

**Macro Conversions:**
1. Form submissions
2. Phone calls
3. Consultation bookings
4. Email signups

**Micro Conversions:**
1. Time on page (>2 minutes)
2. Scroll depth (>75%)
3. Portfolio views
4. Blog post reads
5. Package page views

### Tracking Code Locations

Add tracking to:
- Form submit buttons
- Phone number links
- CTA buttons
- Download links
- External links

---

## 🔄 Maintenance Checklist

### Weekly
- [ ] Update blog with new content
- [ ] Check form submissions working
- [ ] Monitor page load speeds
- [ ] Review analytics for errors

### Monthly
- [ ] Update portfolio with new projects
- [ ] Refresh testimonials
- [ ] Check for broken links
- [ ] Review and update statistics
- [ ] Test mobile experience

### Quarterly
- [ ] Full SEO audit
- [ ] Update service pricing if changed
- [ ] Refresh outdated content
- [ ] A/B test CTA variations
- [ ] Review conversion rates

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Forms not submitting**
- Check Squarespace form settings
- Verify Zapier connection
- Test form fields

**Issue: Images not loading**
- Verify image URLs
- Check file permissions
- Compress oversized images

**Issue: Mobile layout broken**
- Test on actual devices
- Use Chrome DevTools
- Check CSS media queries

**Issue: Schema errors**
- Validate with Google Rich Results Test
- Check JSON-LD syntax
- Verify required fields

---

## 📚 Resources

### Squarespace Documentation
- [SEO Settings](https://support.squarespace.com/hc/en-us/articles/205814578)
- [Code Injection](https://support.squarespace.com/hc/en-us/articles/205815928)
- [Custom CSS](https://support.squarespace.com/hc/en-us/articles/206545787)

### Testing Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Design Inspiration
- [Dribbble - Interior Design](https://dribbble.com/tags/interior-design)
- [Awwwards - Architecture Sites](https://www.awwwards.com/websites/architecture/)

---

## 📝 Notes

1. **Browser Compatibility:** All templates tested in Chrome, Firefox, Safari, Edge
2. **Accessibility:** Basic WCAG 2.1 AA compliance included
3. **Print Styles:** Not included (add if needed)
4. **JavaScript:** Minimal JS used (mobile menu toggle only)
5. **Dependencies:** Zero external dependencies (no jQuery, Bootstrap, etc.)

---

## 🤝 Support

For questions about implementing these templates:
1. Review the Squarespace documentation links above
2. Test in Squarespace preview mode before publishing
3. Use browser DevTools to debug issues
4. Validate HTML at [W3C Validator](https://validator.w3.org/)

---

**Version:** 1.0
**Last Updated:** 2025-01-24
**Status:** Production Ready
