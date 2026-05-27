# How to Add a New Project Post

## The Visual Editor (Decap CMS)

Your portfolio has a built-in visual editor at **wyattshore.ca/admin**

**First-time setup (one-time, takes ~2 minutes):**
1. Make sure your site is deployed to GitHub Pages
2. Go to `wyattshore.ca/admin` in your browser
3. Click "Login with GitHub" — it'll redirect to GitHub to authorize
4. Done! You're in.

The editor gives you a rich-text toolbar (bold, headings, links, images), a live preview panel on the right, and built-in image upload. You write your post, hit Publish, and it commits to GitHub automatically — site rebuilds in ~60 seconds.

> **Note:** The first time you log in, GitHub may ask you to authorize "Decap CMS" — this is safe, it's the open-source CMS tool. It only gets access to your portfolio repo.

---

This is the only guide you'll ever need for adding new content to your portfolio.
No Docker, no Ghost, no Python scripts. Just files.

---

## The Short Version

1. Create a new file in `src/content/posts/your-project-name.md`
2. Add your content (see template below)
3. Drop any images into `public/images/`
4. Run `git add . && git commit -m "Add: Your Project Name" && git push`
5. GitHub automatically builds and deploys it — live in ~60 seconds ✅

---

## Step-by-Step

### 1. Create the Markdown file

In `src/content/posts/`, create a new `.md` file. Name it with hyphens, no spaces:
- `furata-pendulum.md` ✅
- `My Cool Project.md` ❌

### 2. Fill in the frontmatter (top section)

Every post starts with this block between the `---` lines:

```markdown
---
title: "Your Project Title"
description: "One sentence about what this project is. Shows up on the projects list."
date: "2026-04-23"
featureImage: "/images/your-hero-image.jpg"
tags: ["Engineering"]
---
```

| Field | What it does | Required? |
|-------|-------------|-----------|
| `title` | The post title | ✅ Yes |
| `description` | Short summary, shown on cards | Recommended |
| `date` | Post date (YYYY-MM-DD format) | ✅ Yes |
| `featureImage` | Hero image path | Optional |
| `tags` | Category chips | Optional |

### 3. Write your content

After the closing `---`, write in regular Markdown:

```markdown
Opening paragraph here — set the scene. What is this project? Why did you build it?

## Section Heading

More detail here.

### Subsection

Even more detail.

![Alt text for image](/images/my-photo.jpg)
*Caption for the image goes here in italics*

- Bullet point one
- Bullet point two

**Bold text** for emphasis.
```

### 4. Add images

- Drop image files into the `public/images/` folder
- Reference them as `/images/your-filename.jpg` (note the leading slash)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

**Tips for images:**
- Resize large photos to max ~2000px wide before adding (keeps the repo small)
- Use descriptive filenames: `birdfeeder-assembly.jpg` beats `IMG_0484.jpg`
- The feature image looks best in landscape (16:9 or similar)

---

## Full Example Post

```markdown
---
title: "Desktop CNC Router"
description: "I designed and built a 3-axis desktop CNC router capable of cutting aluminium."
date: "2026-05-10"
featureImage: "/images/cnc-router-hero.jpg"
tags: ["Engineering", "CNC", "Fabrication"]
---

I've always wanted to machine my own parts, but a full-size mill costs as much as a car.
So naturally, I decided to build my own desktop version instead.

## Goals

- Machine aluminium at reasonable speeds
- Fit on a workbench (under 600mm × 600mm footprint)
- Total budget under $400

## Design

I started in SolidWorks, modelling the gantry first...

![Early SolidWorks concept](/images/cnc-concept.png)
*First rough concept — the gantry design changed significantly after this*

## Electronics

I used a GRBL-based controller with...
```

---

## Deploying

Once you push to `main`, GitHub Actions takes over:

1. Checks out your code
2. Runs `npm run build` (converts your Markdown to HTML)
3. Deploys to GitHub Pages
4. Your site is live at wyattshore.ca

You can watch it happen live at: `https://github.com/wyshore/[new-repo]/actions`

---

## Local Preview (Optional)

If you want to see your post before pushing:

```bash
# In the wyatt-portfolio folder:
npm install     # first time only
npm run dev     # starts local server at http://localhost:4321
```

Then open your browser to `http://localhost:4321` — it hot-reloads as you save.

---

## Updating Existing Posts

Just edit the `.md` file and push. Same deployment flow.

## Adding a New Resume

Replace `public/images/Tesla-Resume.png` with your new resume image (keep the same filename), then push.
