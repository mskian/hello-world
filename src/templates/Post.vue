<template>
  <Layout>
    <div class="article">
      <hr>
      <br>
      <h1 class="article-title">{{$page.post.title}}</h1>
       <PostTags :tags="$page.post.tags" />
      <article v-html="$page.post.content" />
      <br>
      <hr>
      Written by <a :href="'/author/' +  $page.post.author.title">{{ $page.post.author.title}}</a>
      <br>
      <br>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    description
    content
    date (format: "D MMMM YYYY")
    timeToRead
    path
    tags {
      id
      title
      path
    }
    author {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import Header from "@/components/Header";
import PostTags from "@/components/PostTags";
export default {
  components: {
    Header,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
       meta: [
        { key: 'description', name: "description", content: this.$page.post.description },
        {
          rel: "canonical",
          href: 'https://hello.sanweb.info' + this.$page.post.path
        },
        {
          name: "twitter:url",
          content: 'https://hello.sanweb.info' + this.$page.post.path
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@santhoshveerece" },
        { name: "twitter:image", content: "https://hello.sanweb.info/assets/media/helloworld-cover.png" },
        { name: "twitter:creator", content: "@santhoshveerece" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        {
          property: "og:url",
          content: 'https://hello.sanweb.info' + this.$page.post.path
        },
        { property: "og:image", content: "https://hello.sanweb.info/assets/media/helloworld-cover.png" },
        { property: "og:image:secure_url", content: "https://hello.sanweb.info/assets/media/helloworld-cover.png" }
      ]
    };
  }
};
</script>

<style>
  .article {
    margin-top: 15px;
  }

  .article-title {
    margin-bottom:0;
  }

  .article-date {
    color: var(--app-font-color);
    margin-top:0;
    font-size:.8em;
  }

  .article blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  .article table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .article th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  .article td {
      border-top: 1px solid #ddd;
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
  }

  .article tr:nth-child(odd) td {
    background-color: #f9f9f9;
  }

  .article img {
    margin:auto;
    width:80%;
    display:block;
    margin:10px auto;
  }
</style>
