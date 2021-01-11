<template>
  <div class="article-date">
    Posted in - <a v-for="tag in tags" :key="tag.id" :href="'/tag/' + tag.title">
       #{{ tag.title }}
    </a>
    <span class="article-date"> {{ $page.post.date}} · <i>{{$page.post.timeToRead}} min read</i></span>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>

<style>
.tags {
  margin: 20px 0;
}
.tags a {
  padding: 10px;
  margin-right: 8px;
}
</style>