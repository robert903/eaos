SEO Audit Report

**innerbalance.com Technical SEO Audit Report**

# **Priorities**

The goal behind these priorities is to fix foundational issues then improve crawling so that, once the crawling issues are resolved, the content will be optimized for Google’s index.

Please resolve the issues by priority and click the link for more details.

**Priority 0: Resolve crawling and indexing issues**

* [~~Issue: 404s in mobile navigation~~](#_diis8ugikm6n)
* [~~Issue: Multiple 308s caused by missing trailing slashes on internal navigation~~](#_5w7bwxpnizye)
* [~~Issue: Press pages missing trailing slash (/) on canonical links~~](#_t7v8luvex7zx)
* [~~Most pages (marketing pages and blog pages) are missing canonical links~~](#_uz963qi51a07)

**Priority 1: Resolve content issues**

* [~~Issue: Sitewide - All page titles should have site branding affixed~~](#_54y9c26c8qqi)
* [~~Issue: Marketing pages - All page titles should be optimized for CTR~~](#_b7lyqaokey0)
* [~~Issue: All blog pages have the same title “Inner Balance”~~](#_oo3wzfdghb2u)
* [Issue: Multiple H1 headings on the following pages](#_bf9d3ak6eps)
* [Issue: Incorrect H1-Hx formatting](#_expv4b4ox6ri)
* [Issue: Missing H1 Tags](#_vyj10zv7gik6)
* [Issue: Duplicate Page Titles & Descriptions](#_ugw1v6b88nu2)

**Priority 2: Optimize crawling and discovery**

* [~~Issue: Missing - robots.txt file~~](#_el2n1pwo42d)
* [~~Issue: Missing Sitemaps~~](#_lgjjqgp412uk)
* [Issue: Missing Structured data on blog, marketing and product pages](#_q2ybmj333ryz)
* [Issue: No Browser Caching or Compression techniques (like Gzip or Brotli).](#_n4vd1ahvpoi8)
* [Social metadata](#_lt5wkmns0gfj)
* [Google Discover](#_ata1frcz6cvo)

**Priority 3: General cleanup**

* [~~Issue: Duplicate - https://www.innerbalance.com/questionnaire/ and https://www.innerbalance.com/survey/~~](#_uodagfrqrsgs)
* [~~Issue: Broken CTA link in Weightloss page~~](#_6qiecke83spi)
* [~~Issue: Broken link on product page (on Desktop)~~](#_13ctl6dx1fjy)
* [~~Issue: Broken Image on Reviews page~~](#_crhro86cqg2y)
* [~~Issue: Broken image on Sexual Wellness page~~](#_do6rzi5ggrir)
* [Issue: Some images are too large, slowing down page load speed.](#_5hr3fhwvn9nn)

**Priority 4: Best Practices**

* [Issue: Images missing relevant alt text](#_xz7hz1rici1c)
* [~~Issue: Mobile nav creates soft 404s on blog pages~~](#_i8t39njkjd9l)
* [Issue: Sitewide - Many pages are missing meta descriptions](#_2pbxadfz6e7b)

## **Crawl**

### **Robots.txt**

A robots.txt file is to instruct web crawlers on which pages or sections of a website they are allowed or disallowed from accessing. It also directs crawlers to the site’s sitemap file.

#### ⚠️ Issue: Missing - robots.txt file

**⚒️Fix:** Add robots.txt file and reference all sitemaps and sitemap indexes

| User-agent: \*  Allow: /  Sitemap: https://www.innerbalance.com/sitemap.xml |
| --- |

### **Sitemaps**

A sitemap.xml provides search engines with a structured list of a website’s pages, helping them crawl and index the site more efficiently.

#### ⚠️ **Issue:** Sitemap coverage

The marketing site now has a sitemap at /sitemap.xml but there are not any references to the blog’s sitemap.

**⚒️Fix:** 301 /sitemap.xml to /sitemap-index.xml and create a sitemap index file that includes sitemaps from both sections’ sitemaps.

| <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  <sitemap>  <loc>**https://www.innerbalance.com/{{marketing-sitemap}}.xml**</loc>  </sitemap>  <sitemap>  <loc>**https://www.innerbalance.com/{{blog-sitemap}}.xml**</loc>  </sitemap>  </sitemapindex> |
| --- |

⚠️ The lp.innerbalance.com sitemap

Google is crawling unhelpful content on the lp.innerbalance.com sitemap (at <https://kiqpgpws.elementor.cloud/post-sitemap.xml>)

**⚒️Fix:** 404 this sitemap at <https://lp.innerbalance.com/sitemap_index.xml> and its constituent sitemaps (and probably all the lp.innerbalance.com pages as well).

#### Previous notes

The only sitemaps submitted to GSC are for the lp.innerbalance.com subdomain <https://lp.innerbalance.com/sitemap_index.xml>)

❓The post sitemap lists posts. I’m not sure what the intent is with these. <https://lp.innerbalance.com/post-sitemap.xml>

| **URL** | **Images** | **Last Mod.** |
| --- | --- | --- |
| <https://lp.innerbalance.com/collagen-caramels/> | 1 | 2024-12-22 18:36 +00:00 |
| <https://lp.innerbalance.com/gut-healing-smoothie/> | 1 | 2024-12-22 18:37 +00:00 |
| <https://lp.innerbalance.com/cocoa/> | 1 | 2024-12-22 18:38 +00:00 |
| <https://lp.innerbalance.com/matcha-latte/> | 1 | 2025-01-13 13:53 +00:00 |
| <https://lp.innerbalance.com/antioxidant-berry-smoothie/> | 1 | 2025-01-13 14:00 +00:00 |
| <https://lp.innerbalance.com/hormone-supportive-energy-balls/> | 1 | 2025-01-13 14:08 +00:00 |
| <https://lp.innerbalance.com/paleo-blueberry-pancakes/> | 1 | 2025-01-26 22:14 +00:00 |
| <https://lp.innerbalance.com/avocadochocolatemousse/> | 1 | 2025-02-08 20:29 +00:00 |

**⚒️Fix:** 404 this sitemap at <https://lp.innerbalance.com/sitemap_index.xml> and its constituent sitemaps (and probably all the lp.innerbalance.com pages as well).

Create a sitemap index file

| <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  <sitemap>  <loc>**https://www.innerbalance.com/{{marketing-sitemap}}.xml**</loc>  <lastmod>{{lastmod date}}</lastmod>  </sitemap>  <sitemap>  <loc>**https://www.innerbalance.com/{{blog-sitemap}}.xml**</loc>  <lastmod>{{lastmod date}}</lastmod>  </sitemap>  </sitemapindex> |
| --- |

### **Duplicate pages**

#### ⚠️ **Issue:** Duplicate - <https://www.innerbalance.com/questionnaire/> and <https://www.innerbalance.com/survey/>

**⚒️Fix:** These pages seem to serve the same purpose - Consolidate these pages

### **Canonical Links**

Canonical links help prevent duplicate content issues by telling search engines which version of a webpage is the preferred or original version.

#### ⚠️ **Issue:** Missing -Most pages (marketing pages and blog pages) are missing canonical links

**⚒️Fix:** Add these canonical links

#### ⚠️ **Issue:** Product section pages missing trailing slash (/) on canonical links

**⚒️Fix:** Add trailing slashes

| <head>  <link rel="canonical" href="https://www.innerbalance.com/p/product-page**/**" />  …  </head> |
| --- |

### **Internal Links**

Internal links help search engines understand the structure of your website, distribute link equity. Broken internal links can hurt SEO by creating a poor user experience, leading to lost traffic and crawl inefficiencies.

#### ⚠️ 🔝 **Issue:** 404s in mobile navigation

Mobile nav links to document-relative links which creates 100+ 404 errors (four per page on the site)

| **Label** | **Href** |
| --- | --- |
| About | href="about" |
| How it Works | href="science" |
| Articles | href="learn" |
| Login | href="sign-in" |

![](data:image/png;base64...)

**⚒️Fix:** Fix mobile navigation by adding - root-relative links

#### ⚠️ **Issue:** Broken CTA link in Weightloss page

![](data:image/png;base64...)

**⚒️Fix:** Add new link to Questionnaire

#### ⚠️ **Issue:** Mobile nav creates soft 404s on blog pages

Mobile nav issues create soft 404 pages:

* https://www.innerbalance.com/learn/about/
* https://www.innerbalance.com/learn/science/
* https://www.innerbalance.com/learn/learn/
* https://www.innerbalance.com/learn/sign-in/

This page also has a broken image but that’s ok because the page should not exist

**⚒️Fix:** Blog should use universal 404 pages

#### ⚠️ **Issue:** Broken link on product page (on Desktop)

Free shipping, always - points to a broken link

![](data:image/png;base64...)

**⚒️Fix:** Update the link with the correct URL or remove link

#### ⚠️ **Issue:** Broken Image on Reviews page

Link points to correct image, however it’s missing a leading slash ie.('/assets/images/woman\_3.webp’)

![](data:image/png;base64...)

**⚒️Fix:** Add correct image URL

#### ⚠️ **Issue:** Broken image on Sexual Wellness page

Link points to correct image, however it’s missing a leading slash ie ('/assets/images/woman\_8.webp')

![](data:image/png;base64...)

**⚒️Fix:** Add correct image URL

#### ⚠️ **Issue:** Multiple 308s caused by missing trailing slashes on internal navigation

![](data:image/png;base64...)

**⚒️Fix:** Add trailing slashes to all internal navigationlinks

## **Metadata**

Title tags and meta descriptions are important for SEO because they influence search rankings, improve click-through rates, and provide search engines and users with a concise summary of a page’s content.

### **Page Titles**

#### ⚠️ **Issue: Sitewide** - All page titles should have site branding affixed

**⚒️Fix:** Affix branding - eg “About | Inner Balance”

#### ⚠️ **Issue: Marketing pages -** All page titles should be optimized for CTR

**⚒️Fix:** Use CTR optimized titles

| **URL** | **Current Title** | **Suggested Title** |
| --- | --- | --- |
| https://www.innerbalance.com/p/product-page/ | PDP - Inner Balance | Oestra™ - Bioidentical Progesterone and Estradiol Vaginal Cream | Inner Balance |
| https://www.innerbalance.com/p/postpartum/ | Postpartum - Inner Balance | Postpartum Wellness - Support for New Moms | Inner Balance |
| https://www.innerbalance.com/p/perimenopause/ | Perimenopause - Inner Balance | Perimenopause Relief - Navigate Hormonal Changes | Inner Balance |
| https://www.innerbalance.com/p/pcos/ | PCOS - Inner Balance | PCOS Management - Balance Your Hormones Naturally | Inner Balance |
| https://www.innerbalance.com/p/menopause/ | Menopause - Inner Balance | Menopause Solutions - Thrive Through the Transition | Inner Balance |
| https://www.innerbalance.com/p/endometriosis/ | Endometriosis - Inner Balance | Endometriosis Care - Find Relief and Support | Inner Balance |

#### ⚠️ **Issue:** All blog pages have the same title “Inner Balance”

**⚒️Fix:** Each document title should be populated with the title of the the blog post URL

| **URL** | **Current Title** | **New Title** |
| --- | --- | --- |
| <https://www.innerbalance.com/learn/9-breast-tenderness-how-iodine-keeps-breasts-healthy/> | Inner Balance | Breast Tenderness: How Iodine Keeps Breasts Healthy | Inner Balance |
| <https://www.innerbalance.com/learn/8-debunking-the-myth-that-estradiol-causes-weight-gain/> | Inner Balance | Debunking the Myth That Estradiol Causes Weight Gain | Inner Balance |
| <https://www.innerbalance.com/learn/7-glp-1-and-estrogen-a-synergistic-path-to-metabolic-health/> | Inner Balance | GLP-1 and Estrogen: A Synergistic Path to Metabolic Health | Inner Balance |
| <https://www.innerbalance.com/learn/6-how-to-achieve-healthy-and-hydrated-skin-naturally/> | Inner Balance | How to Achieve Healthy and Hydrated Skin Naturally | Inner Balance |
| <https://www.innerbalance.com/learn/5-sexual-dysfunction-in-women-what-about-testosterone/> | Inner Balance | Sexual Dysfunction in Women: What About Testosterone? | Inner Balance |
| <https://www.innerbalance.com/learn/4-how-inner-balance-can-help-you-get-back-on-top-of-your-sex-drive/> | Inner Balance | How Inner Balance Can Help You Get Back on Top of Your Sex Drive | Inner Balance |
| <https://www.innerbalance.com/learn/3-estrogen-is-better-than-botox/> | Inner Balance | Estrogen Is Better Than Botox | Inner Balance |
| <https://www.innerbalance.com/learn/2-low-estrogen-and-progesterone-what-you-need-to-know/> | Inner Balance | Low Estrogen and Progesterone: What You Need to Know | Inner Balance |
| <https://www.innerbalance.com/learn/11-the-link-between-adhd-and-low-estrogen/> | Inner Balance | The Link Between ADHD and Low Estrogen | Inner Balance |
| <https://www.innerbalance.com/learn/10-mood-anxiety-depression/> | Inner Balance | Mood, Anxiety, and Depression | Inner Balance |
| <https://www.innerbalance.com/learn/1-lesser-known-symptoms-of-low-estrogen-and-progesterone/> | Inner Balance | Lesser-Known Symptoms of Low Estrogen and Progesterone | Inner Balance |

#### ⚠️ **Issue:** Duplicate Page Titles & Descriptions

⚒️ **Fix:** Ensure each title tag is unique and contains primary keywords relevant to the page. Write unique meta descriptions (150-160 characters) summarizing each page’s content to improve click-through rates (CTR).

#### ⚠️ **Issue:** Some title tags are too short, missing key information or keywords

**⚒️Fix:** Title tags should be 50-60 characters to maximize visibility in search results. Include relevant keywords and ensure readability for users.

Example Fix: ❌ "Services" → ✅ "Holistic Health Services | Inner Balance"

### **Meta descriptions**

#### ⚠️ **Issue: Sitewide -** Many pages are missing meta descriptions

**⚒️Fix:** Use custom descriptions for each pages to improve CTR and make sharing previews more inviting

### **Schema.org Structured Data**

#### ⚠️ **Issue:** Missing Structured data on blog, marketing and product pages

**⚒️Fix:** Trevor Fox will provide these templates

## **Content**

Following formatting best practices helps Google understand the structure and relevance of each page.

### **H1 Headings**

#### ⚠️ **Issue:** Multiple H1 headings on the following pages

* https://www.innerbalance.com/learn/
* https://www.innerbalance.com/anti-aging/
* https://www.innerbalance.com/sexual-wellness/
* https://www.innerbalance.com/weight-loss/
* https://www.innerbalance.com/science/
* https://www.innerbalance.com/terms-and-conditions/

**⚒️Fix:** Use one heading per page. Make it descriptive for the entire page. Change lower H1s to H2s.

| **URL** | **Current H1 Title** | **New Title** |
| --- | --- | --- |
| <https://www.innerbalance.com/learn/> | Learn | Explore Hormonal Health and Wellness Insights |
| <https://www.innerbalance.com/anti-aging/> | Anti-Aging | Achieve Youthful Vitality with Anti-Aging Solutions |
| <https://www.innerbalance.com/sexual-wellness/> | Sexual Wellness | Enhance Your Sexual Wellness Naturally |
| <https://www.innerbalance.com/weight-loss/> | Weight Loss | Sustainable Weight Loss Through Hormonal Balance |
| <https://www.innerbalance.com/science/> | Science | The Science Behind Hormonal Wellness |

### **Headings and formating**

#### ⚠️ **Issue:** Incorrect H1-Hx formatting

**⚒️Fix:** Follow best practices for blog posts

eg.

* **Limit to One H1**: Use a single H1 tag per page as the main title (e.g., article or product name), distinct from the SEO title.
* **Use H2-H3 for Hierarchy**: Employ H2 for main sections and H3 for subsections, reserving H4+ for detailed or technical content.
* **Keep Logical Order**: Follow a consistent hierarchy (H1 > H2 > H3) without skipping levels or using tags out of sequence.
* **Break Up Long Text**: Add subheadings every 250-350 words or for each thematic unit to improve readability and avoid overwhelming readers.

#### **⚠️ Issue:** Missing H1 Tags

Some pages lack an H1 heading, which is crucial for SEO and accessibility.

**⚒️ Fix:** Ensure each page has one H1 tag that accurately describes the page’s content. Use a primary keyword naturally within the H1.

### **Images**

#### ⚠️ **Issue:** Images missing relevant alt text

**⚒️Fix:** Images should use descriptive alt text to improve image SEO and page relevance

#### **⚠️ Issue:** Some images are too large, slowing down page load speed.

**⚒️ Fix:** Convert large JPEG/PNG images to WebP for better compression and performance. Use tools like TinyPNG, Squoosh, or ShortPixel to compress images before uploading. Implement lazy loading (loading="lazy") for non-critical images.

## **Technical SEO**

### **On-Page SEO**

#### ⚠️ **Issue**: No Browser Caching or Compression techniques (like Gzip or Brotli).

**⚒️Fix:** Enable browser caching for static assets (CSS, JS, images) using .htaccess or server settings.

* Enable Gzip or Brotli compression to reduce file sizes and improve load times.
* Use PageSpeed Insights to check caching and compression issues.

## **Content Distribution**

To maximize traffic to Inner Balances website, we should add markup to improve social click through rates and content discovery.

### **Social metadata**

This is page markup that provides information to social media networks about how site content should be displayed when shared. Optimizing this can increase traffic from social media.

To achieve this, we use the open graph protocol.
Below is an example of the structure of a twitter card using this format.

| *<meta name="twitter:card" content="summary" />*  *<meta name="twitter:site" content="@website" />*  *<meta name="twitter:creator" content="@user" />*  *<meta property="og:url" content="exampleURL" />*  *<meta property="og:title" content="A Twitter for My Sister" />*  *<meta property="og:description" content="this is an example description" />*  *<meta property="og:image" content=exampleImageURL" />* |
| --- |

When a blog post or page is linked on social media, the result will now be properly formatted and easy to read.

![](data:image/png;base64...)

***Plugins like Yoast SEO automate this process.***

### **Google Discover**

Discover is a part of Google Search that shows people content related to their interests, based on their Web and App Activity.

To get your content on Google Discover, write clear, timeless articles that people will find useful. Use eye-catching wide images and simple, helpful titles like "Does Estradiol Really Cause Weight Gain? Let’s Find Out."

To help Google find your content, add an RSS feed to your website.

| *<link rel="alternate" type="application/rss+xml" href="https://innerbalance.com/rssfeed">* |
| --- |

This makes it easier for Google to pick up your updates.

![](data:image/jpeg;base64...)

## **Navigation**

#### ⚠️ **Issue**: The product page URL is unbranded and generic ( /p/product-page/ )

**⚒️Fix:**

Change “/p/product-page/” url to “/p/oestra” to keep cohesive branding and sharing.

Create a 301 redirect from the old url to the new one after this change

This change is also necessary for when new products are added.

#### ⚠️ **Issue**: 404 Error on (<https://www.innerbalance.com/p/>)

**⚒️Fix:** create a 301 redirect from “https://www.innerbalance.com/p/” to “<https://www.innerbalance.com/>”

#### ⚠️ **Issue**: Header missing a title for logo homepage link

This is a tiny signal to improve the homepage’s brand relevance.

![](data:image/png;base64...)

**⚒️Fix:** Add title attribute to the logo e.g. (title="Inner Balance")

#### ⚠️ **Issue**: Improve blog list page’s anchor text

Google reads anchor text as a signal for page relevance. The blog list could have more descriptive anchor text than “READ MORE”.

**⚒️Fix:** Link to each blog with the posts’ title (in addition to “READ MORE”

![](data:image/png;base64...)

Notes

## Crawl

### Robots.txt

⚠️<https://www.innerbalance.com/robots.txt>

⚒️ Add robots.txt file and reference all sitemaps and sitemap indexes

### Sitemaps

⚠️ The only sitemaps submitted to GSC are for the lp.innerbalance.com subdomain

<https://lp.innerbalance.com/sitemap_index.xml>

❓The post sitemap lists posts. I’m not sure what the intent is with these.

<https://lp.innerbalance.com/post-sitemap.xml>

| **URL** | **Images** | **Last Mod.** |
| --- | --- | --- |
| <https://lp.innerbalance.com/collagen-caramels/> | 1 | 2024-12-22 18:36 +00:00 |
| <https://lp.innerbalance.com/gut-healing-smoothie/> | 1 | 2024-12-22 18:37 +00:00 |
| <https://lp.innerbalance.com/cocoa/> | 1 | 2024-12-22 18:38 +00:00 |
| <https://lp.innerbalance.com/matcha-latte/> | 1 | 2025-01-13 13:53 +00:00 |
| <https://lp.innerbalance.com/antioxidant-berry-smoothie/> | 1 | 2025-01-13 14:00 +00:00 |
| <https://lp.innerbalance.com/hormone-supportive-energy-balls/> | 1 | 2025-01-13 14:08 +00:00 |
| <https://lp.innerbalance.com/paleo-blueberry-pancakes/> | 1 | 2025-01-26 22:14 +00:00 |
| <https://lp.innerbalance.com/avocadochocolatemousse/> | 1 | 2025-02-08 20:29 +00:00 |

⚒️We need to add a sitemap that includes all the marketing site pages and blog posts

### Duplicate pages

<https://www.innerbalance.com/questionnaire/> and <https://www.innerbalance.com/survey/> seem to have the same purpose and it may make sense to consolidate the two pages

### Canonical Links

#### Missing canonicals

⚠️Most pages (marketing pages and blog pages are missing canonical links

⚒️<Fix that>

#### Press pages

⚠️ All press pages should use the canonical URL with the trailing slash to avoid unnecessary redirects

⚒️<Fix that>

### Internal Links

#### 404s

##### Mobile Navigation

Mobile nav links to document-relative links which creates 100+ 404 errors (four per page on the site)

* About: href=“about”
* How it Works: href=“science”
* Articles: href=“learn”
* Login: href=“sign-in”

![](data:image/png;base64...)

###

⚒️Fix mobile nave - root-relative links

###

#### Broken CTA in Weightloss page

![](data:image/png;base64...)

⚒️Fix link

#### Blog 404 pages

Mobile nav issues create soft 404 pages:

* https://www.innerbalance.com/learn/about/
* https://www.innerbalance.com/learn/science/
* https://www.innerbalance.com/learn/learn/
* https://www.innerbalance.com/learn/sign-in/

This page also has a broken image but that’s ok because the page should not exist

⚒️ Blog should use universal 404 pages

#### Broken link on product page (on Desktop)

<describe>

![](data:image/png;base64...)

⚒️ Update the link with the correct URL

#### Broken Image on Reviews page

<describe>

![](data:image/png;base64...)

#### Broken image on Sexual Wellness page

![](data:image/png;base64...)

### Always use trailing slashes in internal navigation links to avoid 308s

![](data:image/png;base64...)

⚒️Fix this

## Metadata

### Page Titles

#### Sitewide

⚠️All page titles should include a branding affix for example, “About | Inner Balance”

#### Marketing pages

⚠️All page titles should be optimized for CTR, ie “Oestra - Bioidentical Progesterone and Estradiol Vaginal Cream | Inner Balance”

#### Blog

⚠️ All blog pages have the same title “Inner Balance”

⚒️Each document title should be populated with the title of the the blog post URL

### Meta descriptions

#### Sitewide

⚠️ Use custom descriptions for each pages to improve CTR and make sharing previeqws more inviting

#### Structured data

⚠️Blog, marketing and product pages should use appropriate structured data.

⚒️Trevor will provide these

## Content

### H1 Headings

⚠️ Use only one heading per page. Make it descriptive for the entire page.

Pages with issues:

* https://www.innerbalance.com/learn/
* https://www.innerbalance.com/anti-aging/
* https://www.innerbalance.com/sexual-wellness/
* https://www.innerbalance.com/weight-loss/
* https://www.innerbalance.com/science/
* https://www.innerbalance.com/terms-and-conditions/

### Headings and formating

⚠️ Use H1-Hx formatting on blog post sections following best practices

<https://yoast.com/how-to-use-headings-on-your-site/>

<summarize>

### Images

⚠️ Images should use descriptive alt text to improve image SEO and page relevance

⚒️ Update descriptive images with actual alt text

## Technical SEO

<notes on resources and rendering>

## Content Distribution

### Social metadata

Add recommendations for marketing, blog, and product pages <https://www.websightdesign.com/services/digital-marketing/search-engine-optimization/social-media-metadata>

### Google Discover

Add recommendations for getting the site on Google Discover

<https://developers.google.com/search/docs/appearance/google-discover>

### **SEO Audit Report for InnerBalance.com**

#### **Audit Date: [Insert Date]**

#### **Website:** [**https://innerbalance.com**](https://innerbalance.com/)

## **1. On-Page SEO Issues**

### **1.1 Duplicate Page Titles & Descriptions**

**Issue:** Some pages on the site have duplicate title tags and meta descriptions, which can confuse search engines and reduce ranking effectiveness.

**Recommendation:**

* Ensure each **title tag** is unique and contains primary keywords relevant to the page.
* Write unique **meta descriptions** (150-160 characters) summarizing each page’s content to improve click-through rates (CTR).
* Use tools like **Screaming Frog SEO Spider** or **Google Search Console** to identify and fix duplicates.

### **1.2 Short Titles**

**Issue:** Some title tags are too short, missing key information or keywords.

**Recommendation:**

* Title tags should be **50-60 characters** to maximize visibility in search results.
* Include relevant **keywords** and ensure readability for users.

**Example Fix:**❌ **"Services"** → ✅ **"Holistic Health Services | Inner Balance"**

### **1.3 Short Meta Descriptions**

**Issue:** Some pages have meta descriptions that are too short, reducing their effectiveness in SERPs.

**Recommendation:**

* Meta descriptions should be **at least 150-160 characters** and include relevant **keywords** for better visibility.
* Write compelling descriptions that encourage clicks.

## **2. Header Tag Issues**

### **2.1 Missing H1 Tags**

**Issue:** Some pages lack an **H1 heading**, which is crucial for SEO and accessibility.

**Recommendation:**

* Ensure each page has **one** H1 tag that accurately describes the page’s content.
* Use a **primary keyword** naturally within the H1.

### **2.2 Multiple H1 Tags on the Same Page**

**Issue:** Some pages contain multiple H1 tags, which can confuse search engines.

**Recommendation:**

* Each page should have **only one H1 tag**.
* Convert additional H1 tags into **H2 or H3 headings** for better structure.

## **3. Image Optimization Issues**

### **3.1 Missing Alt Text on Images**

**Issue:** Several images lack **alt text**, which affects accessibility and SEO.

**Recommendation:**

* Add descriptive **alt text** to all images for better search visibility and user experience.
* Use keywords where relevant but avoid keyword stuffing.

**Example Fix:**❌ <img src="yoga.jpg">
✅ <img src="yoga.jpg" alt="Yoga and meditation session at Inner Balance">

### **3.2 Large & Unoptimized Images**

**Issue:** Some images are **too large**, slowing down page load speed.

**Recommendation:**

* Convert large **JPEG/PNG images to WebP** for better compression and performance.
* Use tools like **TinyPNG, Squoosh, or ShortPixel** to compress images before uploading.
* Implement **lazy loading** (loading="lazy") for non-critical images.

## **4. Technical SEO Fixes**

### **4.1 Exclude Checkout Page from Indexing (robots.txt)**

**Issue:** The checkout page should be **excluded from search engine indexing** to prevent it from appearing in search results.

**Recommendation:**

* Add the following rule to the robots.txt file:
* TEXT

User-agent: \*

Disallow: /checkout/

* Also, add <meta name="robots" content="noindex, nofollow"> in the <head> section of the checkout page.

### **4.2 No Browser Caching or Compression**

**Issue:** The site does not leverage **browser caching** or **compression techniques** (like Gzip or Brotli).

**Recommendation:**

* Enable **browser caching** for static assets (CSS, JS, images) using .htaccess or server settings.
* Enable **Gzip or Brotli compression** to reduce file sizes and improve load times.
* Use **PageSpeed Insights** to check caching and compression issues.

## **5. Link Issues**

### **5.1 Multiple Broken Links (e.g., privacy-notice)**

**Issue:** Some links lead to **404 errors**, negatively affecting user experience and SEO.

**Recommendation:**

* Use **Screaming Frog SEO Spider** or **Google Search Console** to identify broken links.
* Redirect broken links using **301 redirects** or update them with correct URLs.
* Example: Fix **privacy-notice** link if it is broken or missing.

### **5.2 Words That Shouldn’t Be Clickable**

**Issue:** Some text elements appear as **clickable links** when they shouldn’t be, leading to confusion.

**Recommendation:**

* Review and remove unnecessary links from non-navigation elements.
* Ensure only relevant text is hyperlinked.

## **Final Recommendations & Next Steps**

### **Priority Fixes:**

✅ Fix **duplicate & short meta titles/descriptions**✅ Ensure **each page has a single H1 tag**✅ Add **alt text** to all images
✅ Convert **large images to WebP** and enable **lazy loading**✅ Update robots.txt to **disallow /checkout/**✅ Enable **browser caching & compression**✅ Fix **broken links** and remove unnecessary clickable words

### **Tools for Implementation:**

* **Google Search Console** (for indexing & broken links)
* **Screaming Frog SEO Spider** (for on-page SEO checks)
* **TinyPNG / Squoosh.app** (for image compression)
* **PageSpeed Insights** (for speed optimization)