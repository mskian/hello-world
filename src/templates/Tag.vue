<template>
  <Layout>
    <br>
    <br>
    <h1 class="title is-size-1 has-text-centered">
      # {{ $page.tag.title }}
    </h1>
     <br>
     <section class="posts">
      <TagList v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
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
import TagList from "@/components/TagList";
export default {
  components: {
    TagList,
  },
  metaInfo() {
    return {
    title: this.$page.tag.title,
     meta: [
        { key: 'description', name: "description", content: this.$page.tag.title + " - Share Something useful related to Life and tech." },
        {
          rel: "canonical",
          href: 'https://hello.sanweb.info' + "/tag/" + this.$page.tag.title
        }
      ]
    };
  },
};
</script>
