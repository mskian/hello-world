<template>
  <main class="layout" role="main">
    <Header />
    <slot/>
    <div class="footer">
      <div>
        <p>
          Built with
          <a target="_blank" rel="nofollow noopener" class="link" href="//gridsome.org">Gridsome</a>
          and Made with ❤
        </p>
      </div>
      <div class="footer-links">
        <a target="_blank" href="/sitemap.xml">Sitemap</a>
        <a target="_blank" href="/feed.xml">RSS Feed</a>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
:root {
    --app-background-color: #FFFFFF;
    --app-font-color: black;
    --link-color: #00835c;
    --footer-link-color: #686868;
}

[theme="dark"] {
    --app-background-color: #091A28;
    --app-font-color: white;
    --link-color: #20c997;
    --footer-link-color: #ADADAD;
}

[theme="sepia"] {
    --app-background-color: #F1E7D0;
    --app-font-color:#433422;
    --link-color: #004732;
    --footer-link-color: #686868;
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: 'Fira Code', monospace;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size:1.1em;
  -webkit-font-smoothing: antialiased;
	-moz-font-smoothing: grayscale;
}
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.footer {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:60px;
  font-size:.8em;
}

.footer a {
  color:var(--footer-link-color);
}

.footer-links a {
  margin:0 4px;
}

a {
  border-bottom: 1px solid currentColor;
  color: var(--link-color);
  text-decoration: none;

}
a:hover {
  border-bottom-color: currentColor;
  color: #686868;
}

@media only screen and (max-width: 500px) {
  .footer {
    flex-direction: column;
  }

  .header {
    h1 {
      font-size:1em;
    }
  }
}
</style>
