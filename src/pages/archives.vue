<template>
  <Layout>
    <section class="posts">
      <PostList v-for="year in years" :key="year" :year="year" />
    </section>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost(filter: { date: { gte: "2020" }}) {
    totalCount
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
import PostList from '@/components/PostList'
export default {
  components: {
    PostList,
  },
  metaInfo() {
    return {
      title: this.$page.siteName,
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
          href: 'https://hello.sanweb.info/archives/',
        },
      ],
    }
  },
  computed: {
    years() {
      const years = {}
      const posts = this.$page.allPost.edges
      posts.map((post) => {
        const year = post.node.date.split(' ')[2]
        years[year] = ''
      })
      return Object.keys(years).sort((a, b) => {
        return b - a
      })
    },
  },
}
</script>

<style></style>
