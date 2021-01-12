---
title: "Add Pagination in Gridsome"
description: "Here is the Guide to add Pagination in Gridsome."
date: 2021-01-12 21:57:26
tags: ["tutorial"]
author: santhosh
---

Here is the Script to Pagination in Gridsome.

`src/pages/index.vue`

```js
<template>
  <Layout>
    <hr>
    <section class="posts">
    <h2 class="article-title">My Home Page</h2>
    <div class="post-list">
    <p :key="post.node.id" v-for="post in $page.posts.edges">
      ➡ <span class="date"> {{ post.node.date}}</span>
    <g-link :to="post.node.path">
      {{ post.node.title }}
    </g-link>
    </p>
      <hr>
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
    Pager
  }
 }
</script>

<style>
h1 {
  font-size:2em;
  margin:0;
}
.post-list {
  margin-top:20px;
}
.date {
  margin-right:10px;
  min-width: 60px;
  display:inline-block;
}
</style>
```
