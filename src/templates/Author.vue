<template>
  <Layout>
    <br />
    <br />
    <h3 class="title is-size-1 has-text-centered">
      Posts By {{ $page.author.title }}
    </h3>
    <br />
    <section class="posts">
      <AuthorList
        v-for="edge in $page.author.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
query Author($id: ID!) {
  author(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            title
            path
            date(format: "MMM DD")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import AuthorList from '@/components/AuthorList'
export default {
  components: {
    AuthorList,
  },
  metaInfo() {
    return {
      title: this.$page.author.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this.$page.author.title +
            ' - Share Something useful related to Life and tech.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href:
            'https://hello.sanweb.info' + '/author/' + this.$page.author.title,
        },
      ],
    }
  },
}
</script>
