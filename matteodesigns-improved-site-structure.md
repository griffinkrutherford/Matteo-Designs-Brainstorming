# Mattéo Designs - Improved Site Structure

## Overview
This document outlines the recommended site structure incorporating SEO optimization, conversion improvements, and content strategy while maintaining the existing Squarespace platform.

---

## 🏠 Homepage (/)
**Purpose:** Convert visitors with clear value proposition and strong CTAs
**Key Elements:**
- Hero with "Schedule Consultation" CTA (sticky header)
- Service overview with links to dedicated pages
- Featured portfolio projects (3-4 best projects)
- Trust indicators (reviews, certifications, "As Featured In")
- Email capture form in footer
- Clear local + national positioning statement

---

## 📁 Main Navigation Structure

```
matteodesigns.com/
│
├── 🏡 SERVICES (/services)
│   ├── Overview (main services page - keep existing)
│   │
│   ├── 🏠 Residential Interior Design (/services/residential)
│   │   ├── Custom Home Design
│   │   ├── Kitchen Remodeling
│   │   ├── Bathroom Design
│   │   ├── Living Spaces
│   │   ├── Bedroom & Closet Design
│   │   └── Home Office Design
│   │
│   ├── 🏢 Commercial Interior Design (/services/commercial)
│   │   ├── Office Design
│   │   ├── Medical Offices
│   │   ├── Retail Spaces
│   │   ├── Restaurants & Hospitality
│   │   └── Corporate Branding Integration
│   │
│   ├── 🏗️ Real Estate Development (/services/real-estate-development)
│   │   ├── New Construction Consultation
│   │   ├── Historic Renovation
│   │   ├── Property Value Enhancement
│   │   └── Architectural Design Services
│   │
│   ├── 🌿 LEED Certified Sustainable Design (/services/leed-certified-design)
│   │   ├── LEED Certification Process
│   │   ├── Sustainable Materials Selection
│   │   ├── Energy-Efficient Design
│   │   ├── Green Building Consulting
│   │   └── LEED Portfolio Case Studies
│   │
│   └── 💎 Design Packages & Pricing (/services/packages)
│       ├── Consultation Package (Starting Point)
│       ├── Design Package (Full Service)
│       ├── Implementation Package (Turn-Key)
│       └── Request Custom Quote (Form)
│
├── 🎨 PORTFOLIO (/portfolio)
│   ├── Overview (main portfolio page - keep existing)
│   │
│   ├── By Project Type:
│   │   ├── Residential Projects (/portfolio/residential)
│   │   ├── Commercial Projects (/portfolio/commercial)
│   │   ├── LEED Certified Projects (/portfolio/sustainable)
│   │   └── Historic Renovations (/portfolio/historic)
│   │
│   └── Individual Project Pages (ENHANCED):
│       ├── Coastal Farmhouse (/portfolio/coastal-farmhouse)
│       │   └── [Add: Challenge, Solution, Results, Testimonial, Related Projects]
│       ├── Urban Garage (/portfolio/urban-garage)
│       ├── Cordova (/portfolio/cordova)
│       ├── Rustic Ranch (/portfolio/rustic-ranch)
│       ├── Doctor's Office (/portfolio/doctors-office)
│       ├── Maryland (/portfolio/maryland)
│       ├── Tudor Home (/portfolio/tudor-home)
│       ├── Community Center (/portfolio/community-outreach)
│       └── Louise Bath (/portfolio/louis-bath)
│
├── 📝 BLOG (/blog) **[NEW]**
│   ├── Blog Home (category overview)
│   │
│   ├── Categories:
│   │   ├── Design Tips (/blog/design-tips)
│   │   ├── Sustainable Design (/blog/sustainable-design)
│   │   ├── Santa Fe Design (/blog/santa-fe-design)
│   │   ├── Before & After (/blog/before-after)
│   │   ├── Project Spotlights (/blog/projects)
│   │   └── Industry Insights (/blog/insights)
│   │
│   └── Initial Blog Posts (Examples):
│       ├── "5 Principles of Sustainable Interior Design in Santa Fe"
│       ├── "How to Choose an Interior Designer: Complete Guide"
│       ├── "What is LEED Certification and Why Does It Matter?"
│       ├── "Kitchen Design Trends for Santa Fe Homes in 2025"
│       ├── "The ROI of Professional Interior Design"
│       ├── "Historic Home Renovation: Preserving Character While Modernizing"
│       ├── "Color Psychology in Interior Design"
│       ├── "Maximizing Small Spaces: Design Solutions"
│       └── "Commercial Office Design: Creating Productive Workspaces"
│
├── 📍 LOCATIONS **[NEW SECTION]**
│   ├── Santa Fe Interior Designer (/santa-fe-interior-designer) **[HIGH PRIORITY]**
│   │   ├── About Our Santa Fe Studio
│   │   ├── Local Portfolio Projects
│   │   ├── Santa Fe Design Aesthetic
│   │   ├── Service Areas Map
│   │   ├── Local Testimonials
│   │   └── "Schedule Local Consultation" CTA
│   │
│   ├── Serving New Mexico (/locations/new-mexico)
│   │   ├── Albuquerque
│   │   ├── Taos
│   │   ├── Las Cruces
│   │   └── Surrounding Areas
│   │
│   └── National Services (/services/nationwide)
│       ├── Virtual Design Consultations
│       ├── Remote Project Management
│       ├── How We Work Remotely
│       └── National Portfolio Projects
│
├── 📚 RESOURCES **[NEW SECTION]**
│   ├── Free Guides (/resources/guides)
│   │   ├── Kitchen Planning Guide (Lead Magnet) (/guides/kitchen-planning)
│   │   ├── Bathroom Remodel Checklist (/guides/bathroom-checklist)
│   │   ├── Home Office Design Guide (/guides/home-office)
│   │   ├── Sustainable Design Guide (/guides/sustainable-design)
│   │   └── Hiring an Interior Designer Guide (/guides/hiring-designer)
│   │
│   ├── Case Studies (/resources/case-studies)
│   │   ├── [Detailed case studies with before/after, budget, timeline]
│   │   └── [Link to portfolio project pages]
│   │
│   ├── Design Process (/resources/design-process)
│   │   ├── Step 1: Discovery & Consultation
│   │   ├── Step 2: Concept Development
│   │   ├── Step 3: Design & Planning
│   │   ├── Step 4: Implementation
│   │   └── Step 5: Final Reveal
│   │
│   ├── FAQs (/resources/faq)
│   │   ├── Pricing & Budget
│   │   ├── Process & Timeline
│   │   ├── Working with Mattéo
│   │   ├── Sustainable Design
│   │   └── Remote Services
│   │
│   └── Testimonials (/resources/testimonials)
│       ├── Client Reviews (Google reviews embed)
│       ├── Video Testimonials
│       ├── Written Testimonials by Project Type
│       └── Leave a Review (links to Google/Yelp/Houzz)
│
├── 📰 MEDIA (/media)
│   ├── Keep existing page
│   └── Add: Press mentions, awards, publications, speaking engagements
│
├── 👤 ABOUT (/about)
│   ├── Keep existing page
│   └── Enhance with:
│       ├── Matteo's Story
│       ├── Design Philosophy
│       ├── LEED Credentials
│       ├── Awards & Recognition
│       ├── Team (if applicable)
│       └── "Work With Us" CTA
│
├── 📞 CONTACT (/contact)
│   ├── Keep existing page
│   └── Enhance with:
│       ├── Enhanced contact form (project type, budget, timeline)
│       ├── Click-to-call phone number
│       ├── Business hours
│       ├── Google Maps embed
│       ├── Alternative contact methods
│       └── "Prefer to talk? Schedule a call" (Calendly link)
│
├── 📅 FREE CONSULTATION (/free-consultation)
│   ├── Keep existing page
│   └── Enhance as primary conversion page:
│       ├── Benefits of consultation
│       ├── What to expect
│       ├── Preparation checklist
│       ├── Calendly scheduler (embedded)
│       ├── OR enhanced contact form
│       └── Testimonials from past consultations
│
└── ⚙️ UTILITY PAGES **[NEW]**
    ├── Thank You Pages:
    │   ├── /thank-you/consultation (after booking)
    │   ├── /thank-you/contact (after contact form)
    │   ├── /thank-you/guide (after downloading lead magnet)
    │   └── /thank-you/newsletter (after email signup)
    │
    ├── /leave-a-review **[NEW]**
    │   ├── Thank you message
    │   ├── Direct links to Google Reviews
    │   ├── Links to Yelp, Houzz
    │   └── Testimonial submission form
    │
    ├── /sitemap (automated by Squarespace)
    ├── /privacy-policy
    └── /terms-of-service
```

---

## 🔍 SEO-Focused Landing Pages (Priority Pages)

### High Priority (Weeks 1-2)
1. **Santa Fe Interior Designer** (`/santa-fe-interior-designer`)
   - Target: "interior designer santa fe", "santa fe interior design"
   - Content: 1,500+ words optimized for local SEO
   - CTAs: Schedule consultation, view local portfolio

2. **LEED Certified Design** (`/services/leed-certified-design`)
   - Target: "leed certified interior designer", "sustainable design"
   - Content: Credentials, process, portfolio, benefits
   - CTAs: View sustainable projects, schedule consultation

3. **Design Packages & Pricing** (`/services/packages`)
   - Target: "interior design cost", "interior design packages"
   - Content: 3-4 service tiers, what's included, pricing ranges
   - CTAs: Request custom quote, schedule consultation

### Medium Priority (Weeks 3-4)
4. **Residential Interior Design** (`/services/residential`)
5. **Commercial Interior Design** (`/services/commercial`)
6. **Kitchen Remodeling** (`/services/residential/kitchen-remodeling`)
7. **Bathroom Design** (`/services/residential/bathroom-design`)

### Lower Priority (Months 2-3)
8. Location-specific pages for nearby cities
9. Service sub-pages (home office, living spaces, etc.)
10. Niche pages (medical office design, retail design, etc.)

---

## 📝 Content Calendar: First 30 Days

### Week 1: Foundation Pages
- **Monday:** Santa Fe Interior Designer landing page
- **Wednesday:** LEED Certified Design page
- **Friday:** Design Packages & Pricing page

### Week 2: Service Pages
- **Monday:** Residential Interior Design page
- **Wednesday:** Commercial Interior Design page
- **Friday:** Real Estate Development page

### Week 3: Blog Launch
- **Monday:** Blog setup + "How to Choose an Interior Designer"
- **Wednesday:** "5 Principles of Sustainable Design in Santa Fe"
- **Friday:** "What is LEED Certification and Why It Matters"

### Week 4: Resources & Lead Magnets
- **Monday:** Kitchen Planning Guide (lead magnet)
- **Wednesday:** Design Process page
- **Friday:** FAQs page + Testimonials page

---

## 🎯 Conversion Optimization Elements

### Every Page Should Include:
- [ ] Clear H1 with target keyword
- [ ] Meta title and description optimized
- [ ] At least one CTA (Schedule Consultation / Contact / Download)
- [ ] Internal links to related content
- [ ] Trust indicators (reviews, certifications, awards)
- [ ] Mobile-optimized layout
- [ ] Fast loading images (compressed, WebP)
- [ ] Schema markup where applicable

### Primary CTAs by Page Type:
- **Service Pages:** "Schedule Free Consultation" (primary), "View Portfolio" (secondary)
- **Portfolio Pages:** "Start Your Project" (primary), "View Similar Projects" (secondary)
- **Blog Posts:** "Download Free Guide" (primary), "Schedule Consultation" (secondary)
- **Resource Pages:** Email capture for guides, consultation booking

---

## 📊 Analytics & Tracking Setup

### Goal Tracking (Google Analytics 4):
1. **Form Submissions:**
   - Contact form
   - Consultation booking
   - Quote requests
   - Lead magnet downloads

2. **Engagement Events:**
   - Phone number clicks
   - Email clicks
   - Social media clicks
   - PDF downloads
   - Video plays (if testimonials)

3. **Conversion Funnels:**
   - Homepage → Service Page → Contact
   - Blog Post → Lead Magnet → Consultation
   - Portfolio → Related Project → Contact

---

## 🚀 Implementation Priority

### Phase 1: Critical (Weeks 1-2)
✅ Add "Schedule Consultation" to header
✅ Update SEO settings on all existing pages
✅ Create Santa Fe landing page
✅ Create LEED landing page
✅ Create Packages/Pricing page
✅ Install analytics and tracking

### Phase 2: Foundation (Weeks 3-4)
✅ Launch blog with 4 initial posts
✅ Enhance top 5 portfolio pages
✅ Create lead magnet + landing page
✅ Add email signup forms
✅ Setup review request page

### Phase 3: Expansion (Weeks 5-8)
✅ Create remaining service pages
✅ Add location pages
✅ Build resource section
✅ Create utility pages (thank you pages, etc.)
✅ Develop case study pages

### Phase 4: Optimization (Months 3-6)
✅ A/B test CTAs
✅ Create additional blog content (2x/week)
✅ Add video testimonials
✅ Expand to additional location pages
✅ Create seasonal/trending content

---

## 🔗 Internal Linking Strategy

### Hub Pages (Most Internal Links):
1. Homepage
2. Services overview page
3. Portfolio overview page
4. Blog home page
5. Santa Fe landing page

### Link Each Portfolio Project To:
- Related projects (3-4 similar projects)
- Relevant service page
- "Start Your Project" CTA
- Blog posts about that project type

### Link Each Blog Post To:
- Related blog posts (3-4)
- Relevant service page
- Related portfolio project
- Lead magnet download
- Consultation booking

### Link Each Service Page To:
- Related service pages
- Portfolio projects showcasing that service
- Blog posts about that service
- Packages/pricing page
- Consultation booking

---

## 📱 Mobile Optimization Checklist

- [ ] Sticky "Call Now" button on mobile
- [ ] Click-to-call phone number in header
- [ ] Simplified forms (fewer fields on mobile)
- [ ] Large tap targets (48x48px minimum)
- [ ] Compressed images for mobile
- [ ] Readable font sizes (16px minimum)
- [ ] Easy navigation (hamburger menu)
- [ ] Fast loading (under 3 seconds)

---

## 🎨 Footer Structure (Site-Wide)

```
Footer:
├── Column 1: About
│   ├── About Mattéo Designs
│   ├── Design Philosophy
│   ├── LEED Certification
│   └── Meet the Team
│
├── Column 2: Services
│   ├── Residential Design
│   ├── Commercial Design
│   ├── Real Estate Development
│   ├── LEED Certified Design
│   └── View All Services
│
├── Column 3: Resources
│   ├── Portfolio
│   ├── Blog
│   ├── Free Guides
│   ├── FAQs
│   └── Testimonials
│
├── Column 4: Contact
│   ├── Phone: (XXX) XXX-XXXX
│   ├── Email: info@matteodesigns.com
│   ├── Address: Santa Fe, NM
│   ├── Schedule Consultation (CTA button)
│   └── Newsletter Signup Form
│
└── Bottom Bar:
    ├── Social Media Icons (Instagram, Facebook)
    ├── © 2025 Mattéo Designs
    ├── Privacy Policy | Terms of Service
    └── Trust Badges (LEED Certified, Awards, etc.)
```

---

## 🌐 URL Structure Best Practices

### Good URL Examples:
✅ `/santa-fe-interior-designer`
✅ `/services/leed-certified-design`
✅ `/portfolio/coastal-farmhouse`
✅ `/blog/sustainable-design-tips`
✅ `/guides/kitchen-planning`

### Avoid:
❌ `/page-1` or `/services-page`
❌ URLs with dates `/2025/01/blog-post`
❌ Special characters `?id=123&type=service`
❌ Excessive folders `/a/b/c/d/page`

### Rules:
- Use hyphens (not underscores)
- Keep URLs short and descriptive
- Include target keywords where natural
- Use lowercase only
- Avoid changing URLs (use 301 redirects if necessary)

---

## 📈 Success Metrics by Page Type

### Service Pages:
- Time on page: >2 minutes
- Bounce rate: <50%
- Conversion rate: 3-5% (to consultation booking)
- Internal link clicks: Average 2-3 per session

### Portfolio Pages:
- Images viewed: Average 5-8 per visit
- Related project clicks: 20-30%
- Conversion rate: 2-4% (to consultation)

### Blog Posts:
- Time on page: >3 minutes
- Lead magnet downloads: 5-10% of visitors
- Email signups: 2-5% of visitors
- Internal link clicks to services: 10-15%

### Landing Pages (Santa Fe, LEED):
- Bounce rate: <40%
- Conversion rate: 5-8% (high intent traffic)
- Form submissions + phone calls combined

---

## 🔄 Ongoing Maintenance Schedule

### Weekly:
- Publish 2 new blog posts
- Post to Google Business Profile (2-3 times)
- Monitor Google Analytics
- Respond to form submissions within 1 hour
- Request reviews from completed projects
- Update portfolio with new project photos

### Monthly:
- Review top-performing content
- Update old blog posts with new info
- Check and fix broken links
- Review heatmaps and session recordings
- Optimize underperforming pages
- Send monthly newsletter
- A/B test different CTAs

### Quarterly:
- Full SEO audit
- Competitive analysis
- Review and update service packages/pricing
- Refresh homepage with latest projects
- Update schema markup
- Site speed optimization
- Review and renew any directory listings

---

## 📝 Notes

1. **Preserve Existing URLs:** Use 301 redirects if restructuring
2. **Squarespace Limitations:** Some advanced features require workarounds (Zapier, Code Injection)
3. **Content Quality:** Better to have 10 excellent pages than 50 mediocre ones
4. **User Experience First:** SEO is important, but don't sacrifice UX
5. **Test Everything:** Forms, CTAs, mobile experience before launching

---

**Document Version:** 1.0
**Last Updated:** 2025-01-24
**Status:** Draft for Review
