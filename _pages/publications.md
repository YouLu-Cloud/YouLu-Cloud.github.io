---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<div class="publications">

<h2>Publications</h2>
{% bibliography -q @article[*] %}

<h2>Working Papers</h2>
{% bibliography -q @unpublished[*] %}

</div>
