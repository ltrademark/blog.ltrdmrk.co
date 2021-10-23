---
title: Post Title
excerpt: What is this post about?
date: 2021-01-01
image: 'https://source.unsplash.com/random/1920x1080'
markdownTemplateEngine: "njk"
images01:
  - 'https://source.unsplash.com/random/1080x1920'
layout: layouts/post.njk
---
{# imports the gallery, video, and spotify #}
{% from 'widgets/macros.njk' import gallery,video,spotify %}

# This is a Sample Post

Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

Quas velit tempore libero maiores aperiam dicta dolores expedita, delectus, excepturi debitis inventore dolore incidunt cumque optio saepe quos qui fuga ab!

{# usage of the gallery widget #}
{{ gallery(images01, true) }} 

{# usage of the video widget #}
{{ video('') }} 

{# usage of the spotify embed widget #}
{{ spotify('[SHARE URL]') }} 
{# or #}
{{ spotify('[ID]','[TYPE]') }} 