---
# @see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter
# Metadata (Recommended) ------------------------------------
title: "Template"
date: "2022-02-22"
tags: ["markdown", "blog", "template"]
draft: true  # if true, the article is `WIP` and therefore should not be published yet
# Allows to customize the blog post url (/<routeBasePath>/<slug>)
# slug: ''   # default is current file path
authors: kiai  # @see authors.yml
# -----------------------------------------------------------
# Additional ------------------------------------------------
# hide_table_of_contents:   # if true, rightside ToC will be invisible
# toc_min_heading_level: 2  # The minimum heading level shown in the ToC
# toc_max_heading_level: 3  # The max heading level shown in the ToC
# for SEO
# keywords: ['some', 'tags']
# description: '<Desc>'
# image: '<URL>'  # for `og:image` and `twitter:image` (.png or .jpg, NOT .svg)
---

# Blog Template

<!-- `:::` <= this is `admonition`: cf. https://docusaurus.io/docs/markdown-features/admonitions -->

:::tip Tips:ブログ作成のためのテンプレート

[Markdown front matter on Docusaurus Blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter):

- https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter

:::

<!-- truncate -->
<!-- cf. https://docusaurus.io/docs/blog#blog-list -->

# Title

text

## h1

heading

### h2

heading 2

#### h3

heading 3

> blockquote text

```
console.log('This is code block text');
```

- list item
  - nested item

<!-- `---` is Divider -->

---

<details>
<summary>Learn more ...</summary>

````md title="src/content/blogs/Template.md"
---
# Metadata (Recommended) ------------------------------------
title: "Template"
date: "2022-02-22"
tags: ["markdown", "blog", "template"]
draft: true  # if true, the article will not be published
# Allows to customize the blog post url (/<routeBasePath>/<slug>)
# slug: ''   # default is current file path
author: Kiai  # @see authors.yml
# -----------------------------------------------------------
# Additional ------------------------------------------------
# hide_table_of_contents:   # if true, rightside ToC will be invisible
# toc_min_heading_level: 2  # The minimum heading level shown in the ToC
# toc_max_heading_level: 3  # The max heading level shown in the ToC
# for SEO
# keywords: ['some', 'tags']
# description: '<Desc>'
# image: '<URL>'  # for `og:image` and `twitter:image`  (.png or .jpg, NOT .svg)
---

# Title

text

## h1

heading

### h2

heading 2


#### h3

heading 3


> blockquote text

```
console.log('code block');
```

- list item
  - nested item

<!-- `---` is Divider -->

---

````

</details>

## Embed Tweet

ブログ・ドキュメントともに，すべてのページでツイート埋め込みに対応している．
行内にツイート URL だけを配置しておくと，それを読み込んで埋め込みカード表示に変えてくれる．

（末尾のパラメタの有無で表示は変化しないが，GitHub リポジトリに残すことを考えると**不要なパラメタは極力削除したほうが良い**だろう）

- パラメタあり

https://twitter.com/joncipriano/status/701826082513616896?ref_src=twsrc%5Etfw

- パラメタなし

https://twitter.com/joncipriano/status/701826082513616896

---

なお，実は youtube 等にも対応しているらしい：

https://www.youtube.com/watch?v=BedVUFpZSF4&ab_channel=%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%85%AC%E5%BC%8FYouTube%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB
