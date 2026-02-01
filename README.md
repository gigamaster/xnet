# 🚀 UI XNET 

<img src="lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

**Oopen-source template** using **Astro** and Tailwind CSS**.   
Ready to start a new project and designed taking into account best practices.

## Features

- ✅ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)).
- ✅ Supports **Dark mode**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)).
- ✅ **Image optimization** ([astro:assets](https://docs.astro.build/en/guides/assets/) with Sharp by default).
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing
- ✅ **Fonts optimization** at build time ([subfont](https://www.npmjs.com/package/subfont)).
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports
- ✅ **Modern Astro v3** with improved performance and features

<br>

<img src="./screenshot.jpg" alt="Xnet Homelab - Digital Sovereignty">

<br>

## Site

[🌀 uixnet.netlify.app](https://uixnet.netlify.app/) 

<br>


## Getting started

### Project structure

Folders and files:

```
/
├── data/
|   └── blog/
|       ├── post-slug-1.md
|       └── ...
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...categories]/
|   |   |   └── [category]/
|   |   |       └── [...page].astro
│   |   ├── [...tags]/
|   |   |   └── [tag]/
|   |   |       └── [...page].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/gigamaster/xnet/tree/main)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: "Example",

  origin: "https://example.com",
  basePathname: "/", // Change this if you need to deploy to Github Pages, for example

  title: "Example - This is the homepage title of Example",
  description: "This is the homepage description of Example",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false // or some value,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post 
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};


```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gigamaster/xnet)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgigamaster%2Fxnet)


<br>

## Changelog

- *Project*:
  - Update Astro, Tailwind, and dependencies
  - Reduce the complexity in folders
  - Create simple and clear strategy to get template updates
  - Move specific configurations to a specialized file
  - Fix some bugs with prettier
  - Make the use of images clean and intuitive
  - Refactor Local Icon Pipeline
  - Removed astro-icon integration  
    Eliminated dependency on external SVG processing which was causing SVGO minification errors and broken icon renders in production.
  - Implemented LocalIcon component  
    Switched to a local-first architecture using Vite's  loader `{ query: '?raw' }`  
    This ensures SVG source code is injected into the HTML exactly as designed, with no "black-box" processing.
  - Performance & Resilience  
    Icons are now inlined at build time, preventing 404 errors on GitHub Pages/Netlify and ensuring zero Layout Shift (CLS).
  - Centralized Styling  
    Global icon sizing and color are now managed via `.local-icon` svg in base.css  
    allowing for easy Tailwind integration while maintaining clean SVG source files.
- *SEO*:
  - Support SEO meta-tags (title, description, canonical, social sharing, ...)
- *Blog*:
  - Fast and SEO friendly blog
  - Categories and tags.
  - Improve blog design
  - Create component or utilities for latest posts
  - Create component or utilities for related posts
  - Add *shortcodes* or *embed* functions to posts in Markdown: (eg video, tweet...)
- *Widgets*:
  - Tailwind components (Features, Contact, Call to Actions, Content, FAQs...)
  - Create external library or place with useful Tailwind components

### Icon Maintenance  

> [!TIP]  
> Drop the .svg into src/assets/icons/  
> Ensure it has a viewBox attribute  
> Reference the filename in the items array  

<br>

## 🛠 Local AI Browser Compatibility (January 2026)

This table tracks support for the three pillars of in-browser autonomy: **Built-in Models** (Native), **Web-LLM** (WASM/WebGPU), and **Hardware Acceleration**.

| Feature | Chrome / Edge | Firefox | Safari | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Built-in AI** (`window.ai`) | ✅ **Stable** (v140+) | 🧪 **Opt-in** | ❌ **OS-Bound** | Chrome uses Gemini Nano (now with CPU support). Firefox testing "AI Window." |
| **Web-LLM / WASM** | ✅ Full Support | ✅ Full Support | ✅ Full Support | Runs models like Llama/Mistral via `WebAssembly`. No browser lock-in. |
| **WebGPU Acceleration** | ✅ Win/Mac/Linux | ✅ Win/Mac (v145+) | ✅ macOS/iOS (v26+) | The "Engine" for fast local AI. Now stable across all major desktop OS. |
| **Offline Persistence** | ⚠️ Managed by OS | ✅ **User-Controlled** | ⚠️ Managed by OS | Chrome may auto-delete models if disk space is low (<10GB). |
| **Privacy Toggle** | ✅ Feature Flags | ✅ **Global Kill-Switch** | ⚠️ Privacy Cloud | Firefox (Q1 2026) includes a permanent "AI Kill-switch" for all features. |

### Architecture Breakdown


* **Sovereign Recommendation:** Use **Web-LLM (WASM/WebGPU)** for mission-critical tools. Since you control the model file, the browser cannot "uninstall" your AI while you are offline.
* **Convenience Path:** Use **Built-in AI (Gemini Nano)** for lightweight tasks like proofreading or summarization when running on Chrome.

> [!IMPORTANT]
> One major change in the last few months is that Chrome 140+ now supports running Gemini Nano on CPUs. Previously, you needed a powerful GPU with 4GB of VRAM.


```js
// Check for Built-in AI
await window.ai?.languageModel?.availability();

// Check for WebGPU (The local AI engine)
const adapter = await navigator.gpu?.requestAdapter();
console.log(adapter ? "WebGPU Ready" : "WebGPU Not Supported");
```

> [!NOTE]
> Learn how to use the new built-in [AI in Chrome](https://developer.chrome.com/docs/ai), to enable your web app to translate, summarize, write, and rewrite content [Practical built-in AI](https://www.youtube.com/watch?v=CjpZCWYrSxM) and free, local AI in your browser [Chrome's built-in Prompt API](https://www.youtube.com/watch?v=YkUcxX49Rqw) 

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request. 


## Acknowledgements

Initially created by [onWidget](https://onwidget.com), edited by [Gigamaster](https://github.com/gigamaster/xnet).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](https://github.com/gigamaster/xnet/blob/main/LICENSE.md) file for details.
