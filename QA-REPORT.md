# Final stabilization QA - 12 September 2026

Completed source and scripted QA. Rendered-browser QA remains outstanding because the in-app browser returned `Browser is not available: iab`. No Lighthouse scores or live form delivery are claimed.

## Files changed in this pass

- `index.html`: native navigation (Experience, Skills, Projects, Contact, separate CV link), skip link, focusable section targets, footer outside main, decorative icon semantics, responsive About images, removal of preloader/theme controls/animation attributes and obsolete comments, earlier discovery of existing Google font stylesheets via head links and preconnects. Existing font families/weights and display=swap preserved.
- `css/style.css`: conservative pruning of absent template components; consistent section spacing, responsive section headings, card radii/shadows, readable orange text/button contrast, visible focus, header offsets, reduced motion, mobile menu sizing, long-text wrapping, portrait styling and tablet About image sizing.
- `css/skins/default-color.css`: pruning of unused component rules, retaining the default theme.
- `js/main.js`: vanilla header and native scrolling integration, Bootstrap mobile menu closure and Escape focus recovery, active navigation indication, unchanged Netlify submission handler.
- `img/bg/ibne-sayad-about-480.jpg`: new optimized 480 x 640 image (66,289 bytes).
- `img/bg/ibne-sayad-about-800.jpg`: new optimized 800 x 1067 image (174,211 bytes).
- `img/bg/ibne-sayad-about.jpg`: new optimized 1200 x 1600 image (379,651 bytes).
- `QA-REPORT.md`: this report.

Previous uncommitted changes, including resume, SEO files, and hero image assets, remain in place.

## Performance and cleanup

The original About image was 4,802,118 bytes. Its largest replacement is about 92% smaller; smaller screens can select smaller sources. Original photos remain on disk. Below-fold lazy loading, explicit image dimensions, and hero high fetch priority remain intact.

Removed loading of Animate.css, jQuery, WOW, jQuery Easing and ScrollIt: 155,680 uncompressed bytes in total. Bootstrap and Font Awesome remain because active components use them. Vendor files were retained on disk. App JavaScript is now 3,441 bytes.

Removed the rendering-blocking preloader, theme/RTL controls, hover-dropdown initialization, numeric scrolling and arrow-key section interception, unused background-image/video initialization, and WOW reveals. Removed 359 CSS rules rooted in absent services, counters, skill meters/images, portfolio filters/overlays, testimonial carousel, theme controls, RTL and demo components, plus the unused particle layer rule. Shared styles and other uncertain legacy rules were retained. Earlier carousel/filter/popup/counter script removals remain intact.

## Appearance and accessibility

The actual hero portrait now uses a subtle 24px rounded rectangle without the orange ring. It preserves the photo's proportions and remains secondary to the name and headline. Card radius/shadow tokens unify completed sections while preserving the flagship, recent role and current degree emphasis.

Added skip navigation, native fragment destinations with fixed-header offsets, section focus targets, visible focus styles, an accessible back-to-top name, keyboard Escape menu closure, a proper footer landmark and reduced-motion overrides. Decorative icons are hidden from assistive technology. About text is left aligned. Form labels, required fields, email type, honeypot, live status and accessible select remain intact.

Targeted contrast checks: white on readable orange #b83a00 = 5.76:1; dark #171718 on bright orange = 5.21:1; body gray on white = 4.96:1 and on pale orange = 4.66:1. These checks cover selected source color pairs, not a complete rendered contrast audit.

## Responsive source review

| Widths | Expected CSS behavior (not browser-rendered verification) |
| --- | --- |
| 1440, 1200, 1024 | Bounded content width, expanded concise navigation, two-column hero/flagship/contact, readable two-column card grids. |
| 820, 768 | Collapsible menu; hero, flagship, recommendations and contact stack. Skills/projects/writing retain two columns where specified. About photo capped at 420px. |
| 480, 390, 360 | Single-column cards, full-width stacked hero CTAs, visible professional links, compact portrait, reduced section/card padding. |

Long text and tags wrap, grids use flexible minimum widths, mobile menu height is viewport-bounded, and primary menu items have comfortable tap spacing. Actual clipping, font rendering, zoom, touch behavior and viewport appearance require browser verification at all eight widths.

## Checks performed

Passed HTML nesting, unique IDs, heading progression/exactly one H1, local resources (including loaded CSS font/image URLs), internal anchors, image alt/dimensions/srcset targets, visible field label associations, ARIA references, safe new-tab links, JavaScript syntax and git whitespace checks. CSS brace checks passed; these are not a full standards-validator run.

All nine completed content sections were compared against the pre-pass snapshot with normalized whitespace: no visible content changed, including recommendation quotations and project disclosures. JSON-LD was compared exactly and remains unchanged. One title, unique meta fields, description, canonical, ProfilePage/Person, image data, Open Graph/Twitter, sameAs, robots and sitemap checks passed. The existing alternateName `Ibn Saad` was preserved.

Mocked form checks passed: success resets fields; HTTP/network/timeout failures preserve input and restore the button; duplicate submissions are suppressed; invalid input sends no request; encoded Netlify form-name is included. Backend and honeypot attributes remain unchanged. No real messages were sent.

Full-script mocks passed initialization without a contact form, header/back-to-top scroll state, mobile link closure and Escape focus recovery. This does not substitute for testing Bootstrap animation and actual keyboard focus in a browser.

## External links

Retrieved successfully:
- [GitHub profile](https://github.com/Ibne-Sayad)
- [RuleKit](https://github.com/Ibne-Sayad/Rule-Based-Learning-RuleKit)
- [Daily Star article](https://www.thedailystar.net/business/economy/news/how-does-social-media-know-what-i-am-thinking-3166231)

Unverified externally; kept unchanged:
- [LinkedIn](https://www.linkedin.com/in/ibne-sayad/) - robots restriction.
- [AI QA Studio](https://ai-qa-studio-plum.vercel.app/) - retrieval tool refused the URL.
- [People Analytics](https://github.com/Ibne-Sayad/People-Anaytics-Digital-HRM) - cache miss.
- [Login load test](https://github.com/Ibne-Sayad/Authentication-Login-load-test-using-JMeter-BlazeMeter) - cache miss.
- [App performance test](https://github.com/Ibne-Sayad/App-Performance-Test-Using-Jmeter) - cache miss.
- [QA research PDF](https://github.com/Ibne-Sayad/Research-on-Software-Quality-Assurance-And-Testing/blob/main/A%20Framework%20to%20Diminish%20Software%20Development%20Cost%20by%20Implementing%20Smoke%20and%20Sanity%20Testing%20by%20Ibne%20Sayad%20(Released%20Version).pdf) - cache miss.
- [Requirements Analysis article](https://medium.com/@ibne_sayad/requiment-analysis-the-bread-and-butter-for-software-development-b1d8e011d646) - cache miss.
- [Bengali article](https://medium.com/@ibne_sayad/does-the-word-unbiased-really-exist-on-earth-01470fda2672) - cache miss.

No external URL was confirmed broken. The local CV file and mailto destinations pass source checks; PDF browser display and configured mail-client behavior remain manual checks.

## Deployment verification still needed

After deployment, verify Netlify form detection is enabled, a controlled submission reaches the dashboard/notification destination, and success/error behavior works against the actual host. Verify the deployed CV/images, canonical homepage, robots.txt, sitemap.xml and sharing preview. Run browser QA at the eight requested widths, keyboard/zoom/reduced-motion checks and Lighthouse on the deployment. No deployment or new feature additions were performed.
