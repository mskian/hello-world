<template>
  <Layout>
    <hr />
    <section class="posts">
      <h2 class="article-title">My Write up's</h2>
      <div class="post-list">
        <p :key="post.node.id" v-for="post in $page.posts.edges">
          ➡ <span class="date"> {{ post.node.date }}</span>
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </p>
        <hr />
        <Pager
          :info="$page.posts.pageInfo"
          :showNavigation="true"
          :showLinks="true"
          :range="2"
        />
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
 metadata {
    siteName
  }
}
</static-query>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "MMM D YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager,
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { name: 'author', content: 'Santhosh Veer' },
        {
          name: 'twitter:url',
          content: 'https://hello.sanweb.info/',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:description',
          content: 'Share Something useful related to Life and tech.',
        },
        { name: 'twitter:title', content: 'Hello World' },
        { name: 'twitter:site', content: '@santhoshveerece' },
        {
          name: 'twitter:image',
          content:
            'https://hello.sanweb.info/assets/media/helloworld-cover.png',
        },
        { name: 'twitter:creator', content: '@santhoshveerece' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Hello World' },
        {
          property: 'og:description',
          content: 'Share Something useful related to Life and tech.',
        },
        {
          property: 'og:url',
          content: 'https://hello.sanweb.info',
        },
        {
          property: 'og:image',
          content:
            'https://hello.sanweb.info/assets/media/helloworld-cover.png',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://hello.sanweb.info/assets/media/helloworld-cover.png',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://hello.sanweb.info/',
        },
      ],
      script: [
        {
          innerHTML: `{ {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        publisher: {
          '@type': 'Organization',
          name: "${this.$static.metadata.siteName}",
          url: 'https://hello.sanweb.info/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hello.sanweb.info/assets/img/Icon-512-72.png',
            width: 72,
            height: 72,
          },
        },
        url: 'https://hello.sanweb.info/',
        image: {
          '@type': 'ImageObject',
          url: 'https://hello.sanweb.info/assets/media/helloworld-cover.png',
          width: 1200,
          height: 630,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://hello.sanweb.info/',
        },
        description: 'Share Something useful related to Life and tech.',
      },}`,
          type: 'application/ld+json',
        },
      ],
    }
  },
}
</script>

<style>
h1 {
  font-size: 2em;
  margin: 0;
}
.post-list {
  margin-top: 20px;
}
.date {
  margin-right: 10px;
  min-width: 60px;
  display: inline-block;
}
</style>
