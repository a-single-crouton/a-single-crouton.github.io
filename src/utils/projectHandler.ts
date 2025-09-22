/* eslint-disable @typescript-eslint/no-explicit-any */
export type ProjectMeta = {
  slug: string;
  title: string;
  date?: string;
  image?: string;
  tech?: string[];
  positives?: string[];
  negatives?: string[];
  description?: string;
  notes?: string[];
  repoUrl?: string;
  demoUrl?: string;

  [k: string]: any;
};

type LoaderMap = Record<string, () => Promise<any>>;

const modules: LoaderMap = import.meta.glob('../projects/*.mdx');

// This function takes one of the paths from loader, maybe? Like the dynamic import and cuts out the slug from the url
function getSlugFromPath(path: string): string {
  if (!path) return path;

  const parts = path.split('/');
  const file = parts[parts.length - 1] ?? '';

  const dot = file.lastIndexOf('.');
  const name = dot === -1 ? file : file.slice(0, dot);
  return name.trim().toLowerCase();
}

// This takes a slug that has been produced somewhere and makes it clean and usable. Im assuming for something like adding them to the UI so theyre just the words.
function normalizeSlug(s: string): string {
  if (!s) return s;
  let out = s.trim();
  while (out.startsWith('/')) out = out.slice(1);
  while (out.endsWith('/')) out = out.slice(0, -1);
  if (out.toLowerCase().endsWith('.mdx')) out = out.slice(0, -4);
  return out.toLowerCase();
}
function frontmatter(mod: any) {
  return mod?.attributes ?? mod?.default?.attributes ?? mod?.frontmatter ?? {};
}

const entries = Object.keys(modules).map((path) => {
  return { slug: getSlugFromPath(path), loader: (modules as LoaderMap)[path] };
});

// This istantiates a module for the cache that is empty as its instantiated, and a function that empties the cache.
let _metaCache: ProjectMeta[] | null = null;
export function invalidateCache() { _metaCache = null; }

// Get all posts is an async function that returns a list of posts and accepts a promise of type postMeta
export async function getAllProjectMeta(): Promise<ProjectMeta[]> {
    // if the cache exists simply return it.
  if (_metaCache) return _metaCache;

//   List awaits the entries we instantiated earlier. It deconstructs slug and loader from entries to create a list of all entries of type postMeta
  const list = await Promise.all(
    entries.map(async ({ slug: derivedSlug, loader }) => {
      try {
        const mod = await loader();
        const fm = frontmatter(mod);
        const slug = (fm.slug as string) || derivedSlug;
        return {
            slug,
            title: fm.title ?? slug,
            date: fm.date,
            image: fm.image,
            tech: fm.tech ?? [],
            positives: fm.positives ?? [],
            negatives: fm.negatives ?? [],
            description: fm.description ?? '',
            notes: fm.notes ?? [],
            repoUrl: fm.repoUrl,
            demoUrl: fm.demoUrl,
            ...fm,
        } as ProjectMeta;
      } catch (e: unknown) {

        if(e instanceof Error) {
          console.error('projectHandler failed: ', e.message);
        } else {
          console.error('projectHandler failed with non-Error:', e)
        }
        return { slug: derivedSlug, title: derivedSlug } as ProjectMeta;
      }
    })
  );

// Date parsing shenanigans
  list.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : 0;
    const tb = b.date ? Date.parse(b.date) : 0;
    const na = Number.isNaN(ta) ? 0 : ta;
    const nb = Number.isNaN(tb) ? 0 : tb;
    return nb - na;
  });

  _metaCache = list;
  return list;
}

export async function getProjectBySlug(slugRaw: string): Promise<{ component: any; meta: ProjectMeta } | null> {
  const slug = normalizeSlug(slugRaw);
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return null;
  const mod = await entry.loader();
  const fm = frontmatter(mod);
  return {
    component: mod?.default ?? null,
    meta: {
        slug: fm.slug || slug,
        title: fm.title ?? slug,
        date: fm.date,
        image: fm.image,
        tech: fm.tech ?? [],
        positives: fm.positives ?? [],
        negatives: fm.negatives ?? [],
        description: fm.description ?? '',
        notes: fm.notes ?? [],
        repoUrl: fm.repoUrl,
        demoUrl: fm.demoUrl,
        ...fm,
    },
  };
}