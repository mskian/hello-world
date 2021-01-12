---
title: "New Post via Command"
description: "A Simple Script to Create a New Post File."
date: 2021-01-12 09:22:29
tags: ["general"]
---

Here is a Simple Script to create a New Post Markdown File.

```js
const fs = require('fs');
const moment = require('moment');
const prompt = require('prompt-sync')();
const slugify = require('@sindresorhus/slugify');

const title = prompt('Enter the Post Title: ');
const blogdir = './content/posts'
const postDate = moment().format('YYYY-MM-DD HH:mm:ss')

if (!title) {
  console.log('Please specify a post title.')
  return
}

const basename = `${moment().format('YYYY-MM-DD')}-${slugify(title)}`

const contents = `---
title: "${title}"
description: ""
date: ${postDate}
tags: ["general"]
---
`

fs.writeFile(`${blogdir}/${basename}.md`, contents, () => console.log(`✔ Created ${blogdir}/${basename}.md`));

```

this theme have packed with this feature Just run

```bash
yarn newpost
```
