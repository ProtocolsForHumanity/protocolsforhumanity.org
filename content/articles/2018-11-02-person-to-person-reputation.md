---
title: Domains registered
date: "2018-11-01"
layout: post
draft: true
path: "/posts/domains-registered/"
category: "Reputation"
tags:
  - trust
  - reputation
description: Would decentralised reputation be easier if we use a local-trust model?
---
> **tl;dr**  - Would decentralised reputation be easy if we use a local-trust model?

Decentralised reputation is typically considered a hard problem. The Bitcoin blockchain requires a single ledger. One source of truth. You either have a balance of bitcoin or you don't. There's no room for grey areas. Real human reputation is not like that.

Let's consider an obvious example, Donald Trump. Many people voted for Trump, many people voted against. Trump's reputation is extremely different depending on who you're talking to. We all have our own perspective, and we all have a unique social network. Could we model a decentralised trust system in this way?

## Person to Person

Let's look at how reputation works in real life. When a friend of a family member comes to town, we usually trust them. The visitor is strongly bonded to people that we trust. They're in some sense held accountable for their behaviour through your social network. (Your human social network, not the web site kind!)

This kind of reputation is implicit. It's typically assumed that a family member will only send trustworthy people to visit.

Another example. You find yourself in need of a heating engineer. People will often ask friends for recommendations before turning to Google. A recommendation from a friend is worth a lot more than reviews on Trustpilot. This kind of reputation is explicit. You can ask directly for a recommendation of a trusted person.

## Digital person to person

We could model this same kind of person to person trust in a digital system. Imagine a system that connected via email. You open your app and say "I need a heating engineer". You choose a list of your contacts. People you trust. They receive a message asking if they can recommend anyone. If they can, they could reply by email.

Rather than using email, we could use a person to person messaging layer. We could overlay cryptography on top. You could digitally sign all your requests. People could digitally sign their responses. Now we have a digitally provable record of what was said.

## Challenges

This is a very simple example. There are significant technical challenges to building such a system. Part of the motivation behind this post is to have a starting point for discussion.

* Would a protocol like this be useful today?
* What could be built upon something like this?
* How would something like this be bootstrapped?
