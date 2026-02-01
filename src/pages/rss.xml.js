import rss from '@astrojs/rss';
import { SITE, BLOG } from '~/config.mjs';
import { fetchPosts } from '~/utils/posts';
import { getPermalink } from '~/utils/permalinks';

export const GET = async (context) => {
  // 1. safety for disabled blog
  if (BLOG.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  return rss({
    // 2. Metadata using config
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    
    /** * 3. CRITICAL lesson here: Use context.site instead of import.meta.env.SITE
     * to automatically combine domain + base path (/RepoName/) to correct RSS feed
     */
    site: context.site,

    // 4. Map posts to RSS items
    items: posts.map((post) => ({
      /**
       * 5. updated getPermalink to includes /RepoName/ + ends with a / (matching trailingSlash: 'always')
       */
      link: getPermalink(post.slug, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
    })),
    
    // 6. Optional Support for custom XML styling or namespaces
    customData: `<language>${SITE.language || 'en-us'}</language>`,
  });
};
