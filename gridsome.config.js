// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Hello World - Santhosh Veer',
  siteUrl: 'https://hello.sanweb.info/',
  siteDescription: 'Share Something useful related to Life and tech.',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/:title',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }],
          ],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/assets', '/404'],
        config: {
          '/posts/*': {
            changefreq: 'daily',
            priority: 0.5,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Hello World - Santhosh Veer',
          description: 'Share Something useful related to Life and tech.',
        },
        rss: {
          enabled: true,
          output: '/feed.xml',
        },
        atom: {
          enabled: false,
          output: '/feed.atom',
        },
        json: {
          enabled: false,
          output: '/feed.json',
        },
        maxItems: 25,
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content,
        }),
      },
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#ffffff',
        icon_path: './src/assets/icons/Icon-512.png',
        name: 'Hello World',
        short_name: 'Hello World',
        description: 'Share Something useful related to Life and tech.',
        theme_color: '#ffffff',
        lang: 'en',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        precachedRoutes: ['/'],
        cacheOnly: {
          cacheName: 'co-v1',
          routes: ['/'],
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
}
