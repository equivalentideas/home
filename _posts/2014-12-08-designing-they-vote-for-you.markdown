---
layout: post
title:  "Designing They Vote For You"
date:   2014-12-08 09:11:00 +1100
categories: journal
description: "My experience designing in a new team and adapting to a new process"
---

For the last three and a half months I’ve been working with the [OpenAustralia Foundation](https://www.openaustraliafoundation.org.au/) to design their latest project, *[They Vote For You](http://theyvoteforyou.org.au)*. For me, as always, this was a broad interpretation of the role “designer”: digging into functionality, language, information architecture, appearance, feeling, right down to the purpose and direction of the site.

At *They Vote For You* citizens see how their elected representatives vote on their behalf in Parliament. Citizens can use this knowledge as leverage in their relationships with law makers. I’m very proud of where we’ve taken the project and to now be joining the team permanently.

I’ve gained so much from others who’ve opened up and I want to pay it back by documenting some of our process. Sharing experience is also a key part of the [Open Source Design Manifesto](http://designopen.org/blogging_about/the-open-source-design-manifesto/), “I will share my design experiences; both the good and the bad”.

There were a lot of unknowns and first-times throughout the project. For me it was a new team and their strong commitment to a project methodology with which I had little experience, [Agile development](http://en.wikipedia.org/wiki/Agile_software_development). I was also tasked with a lot of [Ruby on Rails](http://rubyonrails.org/) development—I had a little experience from [Detention Logs](http://detentionlogs.com.au/), but had never written ruby for a client project.

Similarly, the OpenAustralia Foundation hadn’t worked with a designer in this capacity before: someone working on broad iterations of design and implementing it in code during major application development. Previously they’ve handed a fairly established interface over to a design phase.

## Approach

The first recorded commit in our working repository for *They Vote For You* is [5th of August 2003](https://github.com/openaustralia/publicwhip/commit/78d0f62e7c754e6051df28cc9e63a77d58457c0d), 11 years ago. The original version,  *[Public Whip](http://www.publicwhip.org.uk/)*, has been running in the UK for a decade. As with most OpenAustralia Foundation projects *They Vote For You* is an implementation of a project proven overseas.

Many would have wiped away the decade-old PHP implementation and started from a clean slate. With the front-end page templates it was something we briefly discussed but decided to keep them in place. There was 10 years of experience in the current version that we wanted to get as much value from as possible. We progressed by making changes in small iterations as our understanding of the project developed. Some of the site remains largely unchanged. The decision the build atop those foundations has defined the project.

We kicked things off with a whole day workshop to discuss our approach and get a feel for each-others’ perspectives. I ran a [*20 second gut test*](http://goodkickoffmeetings.com/2010/04/the-20-second-gut-test/) exercise which helped me understand the others’ feelings towards basic colour, imagery, typographic concepts.

Most importantly we established [design principles](https://github.com/openaustralia/publicwhip/blob/master/design_docs/principles.md) to guide our decision making:

> 1. *Focus on enabling actions that citizens want to take and access to the knowledge that they are looking for*. Reduce the cost of them taking action. The action is the important bit. Citizens don't need to understand the bureaucracy in order to use and access government.
>
> 2. Assume people are *smart & busy*—present the important information up front and put detail within reach.
>
> 3. Strive for *universal accessibility*.
>
> 4. Design and implement with *Progressive Enhancement*.
>
> 5. *Create change by doing*. Implement ideas quickly and assess—don't be frozen by documentation and proposal.
>
> 6. *Maintainability* is crucial, this project should last and evolve long into the future.

The next day, with great support from [Matthew](https://twitter.com/matthewlandauer), [Henare](https://twitter.com/henaredegan), I dove into the code. We targeted simple, obvious improvements; removing duplicate content and streamlining pages. As I went I took advantage of my fresh perspective to document the questions I was asking of the key interfaces. These [*user questions*](https://github.com/openaustralia/publicwhip/blob/master/design_docs/user-questions.md) were helpful early on, but I haven't returned to them for a month or so to be honest.

## The project’s persona

I picked up [Aarron Walter’s](http://aarronwalter.com/) much referenced *[Designing for Emotion](http://www.abookapart.com/products/designing-for-emotion)* and was inspired to create a *design persona* for the project. I haven’t seen another open-source projects publish something like this but it’s been extremely useful. [*They Vote For You’s* persona](https://github.com/openaustralia/publicwhip/blob/master/design_docs/design_persona.md) is a statement of how our site fits into the world of our citizens. It avoids design jargon and talks about a character, something anyone should be able to engage. Like the design principles, the persona helps the team make consistent, thoughtful design decisions. It is something to aspire to. I don’t think we’ve achieved every aspect, but bit by bit we’ll get there.

I think it can also help people outside the core team contribute. It includes some general references for colour and typography so you can get a rough understanding quickly: ‘more towards [Wikipedia Mobile](https://en.m.wikipedia.org/wiki/Hubble_Ultra-Deep_Field), not like [Heroku](https://www.heroku.com/home)’ for example. Someone making a contribution to the project should be able to look to those basic guides and avoid doing something completely out of character.

## Using familiar tools

I think we made a good decision to aim for something simple and straight-forward. Whenever I tried to get fancy it never fit anyway. I’d alway come back to the logical, familiar choices that made communication clearer.

The typeface is one example. I researched a [bunch of open source typefaces](https://github.com/openaustralia/publicwhip/issues/542#issuecomment-56744803) as potential candidates for the site. I played with [Open Sans](http://www.google.com/fonts/specimen/Open+Sans), [Source Sans Pro](http://adobe-fonts.github.io/source-sans-pro/) and [Clear Sans](https://01.org/clear-sans) in particular. While Source Sans Pro and Clear Sans are great for reading and comparing data and interface elements, key tasks in *They Vote For You*, we also had a lot of extended text and needed something more comfortable for reading paragraphs. Those typefaces also have a more neutral, almost futuristic feeling, and our design persona calls for something humanist with a bit of character.

Many typographers recommend that you get to know how a small set of typefaces perform best by using them across many projects. I’m quite familiar with [FF Meta](https://www.fontfont.com/fonts/meta) by [Erik Spiekermann](http://spiekermann.com/en/) which we often used at [Collagraph](http://collagraph.com.au). [Fira Sans](http://www.carrois.com/en/fira-3-1/) is a humanist, sans serif typeface based on FF Meta, [designed by Eden Spiekermann for Mozilla](http://www.edenspiekermann.com/blog/mozilla-fira-fox) and [released](https://github.com/mozilla/Fira) under an open source license. It has a personality that stands out against the sea of Helvetica. It's also designed specifically for digital displays and to perform well across a huge range of devices. I think it works very well in *They Vote For You* and it felt like a logical choice to use something I knew was reliable.

## The team

I think the biggest contributor to the success of the process so far is the support and openness everyone at the OpenAustralia Foundation gives each other. We all know that this is an unusual and challenging project. We give each other the space and support to voice our arguments on a given decision. At other times we can step back and allow someone to pursue a bold and uncertain solution.

Henare has said he didn’t like the [yellow section headings](https://theyvoteforyou.org.au/divisions) when I first implemented them, but over time has come to appreciate its affect. I think we did a good job of knowing when to keep discussing and when to give something a chance. At other times someone would [step in to veto an addition](https://github.com/openaustralia/publicwhip/pull/856). Those moments were crucial in protecting our aim for simplicity, it’s very easy to start adding unhelpful detail.

## When

When is the right time to work on a specific element or layer of design? When is a design iteration done? When will we readdress it? For me, the hardest question through out this project has been ‘When?’  

Aarron Walter suggests a [Maslow’s Pyramid](http://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs) of UX: we should strive to design systems that fulfil people’s needs by being *functional*, *reliable*, *usable*, and finally *pleasurable*.

Working through my usual process, building up something from scratch, I knew when it was time to start thinking about colours or the finer, graphic layout challenges. Suddenly I wasn’t so sure. There were large sections of the site untouched, wording that was still confusing and unhelpful, but the team wanted me to start adding this top *emotional* layer. It didn’t feel right when we hadn’t achieved  *functional* or *reliable* in many cases.

This week of the project was extremely difficult for me. I thought I was spending time on the important things and the team wanted me to do something else. I became unsure that I was the right person for the project.

I was being rigid with the wrong aspects of the process—I think I had to go through a mini-crisis at that time to break it. This was not a project, team, or workflow like any I’d worked with before, and I was going to have to adapt to make it work. The order and answers I intuitively wanted just weren’t coming through, and I wasn’t developing the things that the others needed so they could be developed through interation in time for launch.

I started making small, focused decisions and then just taking the next step—slowly cutting a path. Suddenly, sometime later, I looked around and realised I was back on track. In late September we set ourselves a deadline to launch in mid October. Nothing works like a deadline to help you adapt, get over it and move on.

## Back to basics

When I was feeling most unsure I returned to design basics: empathise with the user and create simple stories through the site. Surprise is a classic way to stop someone and make them consider something. An unusual bright orange makes people consider the short, direct question “How does *your* MP vote on the issues that matter to *you*” [on the homepage](https://theyvoteforyou.org.au/). More than 60% of people follow that narrative and search for an MP.

The colour scheme more broadly comes simply from the design persona:
light and refreshing in stark contrast to the formal, exclusive character communicated through the school-tie maroons and navy blues of traditional parliamentary design. Lemon yellow, lots of white space and a bright, cool blue were a simple, colour theory grounded choice—I’m no expert there but was brushing up with [The Elements of Colour ](http://monoskop.org/images/4/46/Itten_Johannes_The_Elements_of_Color.pdf) at the time. So far, we’ve had very positive reactions.

There’s a lot of room to keep evolving the personality of the site, particularly through the feedback and interface text. Injecting [appropriate emotion](http://blog.teamtreehouse.com/emotional-interface-design-the-gateway-to-passionate-users) could reward and support people in contributing to the resource.

## Talking about design

I hope that explaining some of the choices and the ups and downs we made is useful to you. There are not enough discussions about visual and emotional design decisions in open source/civic hacking projects. It’s as if we think these aspects are just poured on by magical, inspired designers. I’ve found it extremely helpful to document and discuss as we’ve gone along, it’s been the foundation that has allowed me to be flexible.

*They Vote For You* will continue to evolve to better serve citizens. You can play a part. If you have ideas or changes you think would improve the project, please let us know by creating an [issue on the repository](https://github.com/openaustralia/publicwhip/issues). Check out the [design persona](https://github.com/openaustralia/publicwhip/blob/master/design_docs/design_persona.md) and see all the [#design](https://github.com/openaustralia/publicwhip/issues?q=is%3Aopen+is%3Aissue+label%3Adesign) and [#wording](https://github.com/openaustralia/publicwhip/issues?q=is%3Aopen+is%3Aissue+label%3Awording) issues listed. We’ve already had people submit very useful issues that are making the project better for everyone.

It’s been a fantastic experience to work on this with [Henare](https://twitter.com/henaredegan), [Matthew](https://twitter.com/matthewlandauer), [Kat](https://twitter.com/katska), [Micaela](https://github.com/MicaelaMicaela) and all the other [contributors](https://github.com/openaustralia/publicwhip/graphs/contributors). I can’t wait to see the project grow in its new form, a decade after it began on the other side of the world.

{% include comments.html %}
