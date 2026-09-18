# Blimp Tech Cyber Hub

Could you install website dev skills for python programming language for blimp tech website I would like you to build: I would like to build a website for my cyber cafe business call it BLIMP TECH CYBER. I would like to include personal skills that I have harness over time. (Cyber Security Expert, website development, brand creation & expansion and anyother technological solution..Build a complete full-stack web application called "Blimp Tech Cyber" — a modern 

tech hub and cyber cafe based in Nairobi, Kenya. The site must serve both as a 

public marketing site and a lightweight operations platform for the business owner.

TECH STACK (strictly follow):

- Backend: FastAPI (Python 3.11+)

- Templating: Jinja2

- Database: SQLite via SQLAlchemy

- Styling: Tailwind CSS via CDN

- Interactivity: Alpine.js via CDN + vanilla JS

- Forms: FastAPI form handling with Pydantic validation

- Auth (admin only): Session-based using itsdangerous + passlib (bcrypt)

- Email: SMTP via smtplib (configurable via .env)

- Server: Uvicorn, deployable via Gunicorn with Uvicorn workers

- Config: python-dotenv for .env files

PROJECT STRUCTURE:

blimp-tech-cyber/

├── app/

│   ├── main.py

│   ├── config.py

│   ├── database.py

│   ├── models.py

│   ├── schemas.py

│   ├── auth.py

│   ├── routers/

│   │   ├── public.py

│   │   ├── admin.py

│   │   └── api.py

│   ├── templates/

│   │   ├── base.html

│   │   ├── index.html

│   │   ├── services.html

│   │   ├── service_detail.html

│   │   ├── pricing.html

│   │   ├── about.html

│   │   ├── contact.html

│   │   ├── booking.html

│   │   ├── blog.html

│   │   ├── blog_post.html

│   │   ├── faq.html

│   │   ├── admin/

│   │   │   ├── login.html

│   │   │   ├── dashboard.html

│   │   │   ├── bookings.html

│   │   │   ├── services_crud.html

│   │   │   └── messages.html

│   │   └── partials/

│   │       ├── navbar.html

│   │       ├── footer.html

│   │       ├── whatsapp_button.html

│   │       └── seo_meta.html

│   ├── static/

│   │   ├── css/custom.css

│   │   ├── js/main.js

│   │   └── img/

│   └── utils/

│       ├── email.py

│       └── seo.py

├── data/

│   └── blimp.db

├── .env.example

├── requirements.txt

├── gunicorn_conf.py

├── blimp.service

├── Caddyfile

├── vercel.json

├── README.md

└── DEPLOYMENT.md

BUSINESS CONTEXT:

- Name: Blimp Tech Cyber

- Tagline: "A Tech Hub Full of Modern Tech Solutions"

- Location: Nairobi, Kenya

- Target customers: students, job seekers, small business owners, walk-in clients

SERVICES TO INCLUDE (with categories):

1. Secretarial Services

   - Typing & document formatting

   - Printing, scanning, photocopying

   - Laminating & binding

   - CV / resume writing & redesign

   - Cover letter & application letter writing

2. Government Services (eCitizen & related)

   - KRA PIN registration & returns

   - NTSA services (driving license, TLB, vehicle transfer)

   - HELB loan application & compliance

   - NHIF/SHIF registration

   - Passport & ID application assistance

   - Good Conduct application

   - Birth & marriage certificate applications

3. Non-Government Services

   - Job applications (online portals)

   - Email account creation & recovery

   - Online form filling (universities, scholarships)

   - TSC, KNEC, and college applications

   - Freelancer account setup (Upwork, Fiverr)

4. Tech Consultation

   - Laptop & phone purchase advisory

   - Software installation & troubleshooting

   - Website & domain setup for small businesses

   - Digital marketing starter packs

   - Cyber security basics for individuals

5. E-Learning Materials

   - Past papers (KCSE, KCPE, college)

   - Coding tutorials & bootcamp info

   - Digital skills courses (basic computer, MS Office)

   - Research & thesis formatting help

6. Office & Tech-Electronic Products (for sale)

   - Flash disks, memory cards, external HDDs

   - Printers, toners, cartridges

   - Laptops & accessories (chargers, mice, keyboards)

   - Phone accessories (cables, earphones, power banks)

   - Office stationery (paper, files, pens)

PUBLIC SITE FEATURES:

- Sticky top navbar with logo, links, and a prominent WhatsApp CTA button

- Hero section with tagline, subheading, and 2 CTAs (Book a Service, Chat on WhatsApp)

- Services grid (6 categories above) with icons and short descriptions

- Each service category has its own detail page listing sub-services with prices (KES)

- Pricing table page

- "Why Choose Us" section (fast turnaround, affordable, tech-savvy, trusted)

- Testimonials carousel (placeholder content, editable from admin)

- Booking form: name, phone, email, service, preferred date/time, notes

- Contact page with: phone, WhatsApp, email, Google Maps embed, business hours

- FAQ accordion

- Blog / News section (for SEO — "How to apply for KRA PIN", "HELB deadlines", etc.)

- Floating WhatsApp button (bottom-right, always visible)

- Footer with quick links, social, M-Pesa till/paybill placeholder, and copyright

- Fully mobile-responsive (Tailwind)

- SEO: proper meta tags, Open Graph, Twitter cards, JSON-LD LocalBusiness schema

- Sitemap.xml and robots.txt generation

ADMIN PANEL (login-protected at /admin):

- Secure login (bcrypt-hashed password, session cookie)

- Dashboard: today's bookings, unread messages, quick stats

- Bookings: view, mark as completed, filter by service/date

- Messages: view contact form submissions, mark as read

- Services CRUD: add/edit/delete services and prices

- Testimonials CRUD

- Blog posts CRUD (title, slug, content in markdown, publish toggle)

- Site settings: phone, WhatsApp number, email, hours, M-Pesa details

API ENDPOINTS (for future mobile app or external use):

- GET /api/services

- GET /api/services/{slug}

- GET /api/blog

- POST /api/booking

- POST /api/contact

SECURITY & BEST PRACTICES:

- Input validation with Pydantic on all forms

- CSRF protection on admin forms (simple token)

- Rate limiting on booking/contact (slowapi)

- Environment variables for secrets (.env)

- No hardcoded credentials anywhere

- HTTPS-ready (behind reverse proxy)

DESIGN AESTHETIC:

- Modern, tech-forward, but warm and approachable

- Color palette: deep navy (#0A192F), electric cyan (#00E5FF), warm amber accent 

  (#FFB703), clean white backgrounds

- Font: Inter for body, Space Grotesk for headings (Google Fonts)

- Rounded cards, soft shadows, subtle hover animations

- Icons: Lucide or Heroicons via CDN

- Dark-mode toggle (optional but appreciated)

DELIVERABLES:

1. All files above, fully written and functional

2. requirements.txt with pinned versions

3. .env.example with all required keys

4. Seed script (seed.py) that populates the DB with the 6 service 

   categories and sample sub-services

5. README.md with local setup instructions

6. DEPLOYMENT.md with steps for:

   - Running on a Linux server (systemd + Gunicorn + Caddy)

   - Cloudflare Tunnel setup

   - Deploying frontend to Vercel as a static fallback

7. Inline comments explaining non-obvious logic

Start by generating the file tree, then each file's full contents one by one. 

Do not skip any file. Use clean, PEP8-compliant Python.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/19f65d6c-938b-4d22-9902-f7a2d7563076).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
