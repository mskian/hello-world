<template>
  <div class="post-item">
    <span class="date">{{ post.date }}</span>
    <g-link :to="post.path" class="read">{{ post.title }}</g-link>
    <span class="time-to-read"
      ><i>{{ post.timeToRead }} min read</i></span
    >
  </div>
</template>

<script>
export default {
  props: ['post'],
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
.time-to-read {
  margin-left: 10px;
  color: gray;
  font-size: 0.8em;
}
</style>
