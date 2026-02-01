import slugify from 'limax';

import { SITE, BLOG } from '~/config.mjs';

const trim = (str, ch) => {
	let start = 0,
		end = str.length;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, '/'));

// Add a helper to ensure a trailing slash
const withTrailingSlash = (path) => {
  if (path === '/' || path.endsWith('/')) return path;
  return path + '/';
};

// Update createPath to be more robust
const createPath = (...params) => {
  const path = '/' + params.filter((el) => !!el).join('/');
  return withTrailingSlash(path);
};


const basePathname = trimSlash(SITE.basePathname);

export const cleanSlug = (text) => slugify(trimSlash(text));

export const BLOG_BASE = cleanSlug(BLOG?.blog?.pathname);
export const POST_BASE = cleanSlug(BLOG?.post?.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname);

/** */
export const getCanonical = (path = '') => new URL(path, SITE.origin);

/** Fixed path for blog base */
export const getPermalink = (slug = '', type = 'page') => {
    const _slug = cleanSlug(slug);

    let permalink;
    switch (type) {
        case 'category':
            permalink = createPath(basePathname, CATEGORY_BASE, _slug);
            break;
        case 'tag':
            permalink = createPath(basePathname, TAG_BASE, _slug);
            break;
        case 'post':
            permalink = createPath(basePathname, POST_BASE, _slug);
            break;
        case 'page':
        default:
            permalink = createPath(basePathname, _slug);
            break;
    }
    
    return withTrailingSlash(permalink);
};

/** */
export const getBlogPermalink = () => getPermalink(BLOG_BASE);

/** */
export const getHomePermalink = () => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};
