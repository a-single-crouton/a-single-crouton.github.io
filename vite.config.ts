import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { h } from 'hastscript'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'attributes' }]
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ['anchor'], content: h('span', { class:'anchor-icon', 'aria-hidden': true }, '¶') }}],
        [
          rehypePrettyCode,
          {
            theme: "light-plus",
            keepBackground: true,
            transformers: [
              transformerCopyButton({
                visibility: 'always',
                feedbackDuration: 3_000,
              })
            ]
          },
        ],
      ],
    }),
    react()],
})
