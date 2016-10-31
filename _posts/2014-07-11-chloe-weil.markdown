---
layout: post
title:  "Chloe Weil"
date:   2014-07-11 09:11:00 +1100
categories: journal
description: "I didn't know Chloe Weil, but I feel like I've benefited from her ideas and gifts. I know her work and her writing through her website, chloeweil.com."
---

I didn't know Chloe Weil personally. I know her work and her writing through her website, [chloeweil.com](http://chloeweil.com/) .

Weil's work stands out to me as a bright example of the kind of work that directs me and makes me smile: pieces about life and living and history made for everyone: family, friends, robots and crawlers, unknown people in unexpected places, through the past and into the future. Work of the web, built from HTML, available for everyone, pushing accessibility through translation and whatever means. Striving to be a speck in the [Long Now and the Big Here](http://longnow.org/essays/big-here-long-now/).

I didn't know Weil, but I feel like I've benefited from her ideas and gifts as part of a tradition of crafts people, thousands of years old, working to make the means of publishing more accessible to more people.

I don't know what she would think about this.

Her document [Julius Cards](http://chloeweil.com/julius-cards/) is an example I've shared with many people thinking about personal archives. It has a boldly simple form. Like the web itself it is inviting in its construction, full of seams.

This work inspired me to make a similar html document as a record and tribute to my grandmother Joan Bacon. I need to get on and do that.

Weil recorded audio versions of her posts. After hearing [Our Raggered History](http://chloeweil.com/audio/2013-11-04-our-ragged-history.mp3) I quickly wrote the code to publish audio versions of my posts, copying her example, but I'm yet to follow though. Looking at it now, my approach is overdone and too complicated, I much prefer Weil's link, front and centre at the top of the post. She clearly loved sound in all it's forms and wanted to share that, not hide it away. Another bold simplicity that inspires self-confidence and determination.

Weil connected the thinking about craft and approach to the details of implementation and then back out to our social and industrial contexts and how we shape them. She asked hard questions of our efforts:

<figure id="figure-1" class="quote">
    <blockquote>
        <p>I’ve been ruminating on some themes I&#8217;ve been exposed to over the past few years: <a href="http://vimeo.com/34269615">digital preservation</a>, the <a href="http://indiewebcamp.com/principles">IndieWeb</a> and <a href="http://futurefriend.ly/">futurefriend.ly</a> movements, <a href="http://vimeo.com/74356383">progressive enhancement</a>, <a href="http://vimeo.com/63525052">storytelling</a>. They contributed to how I approached The Cards: looking both forward and backward. Longevity was the guiding design principle that informed all of my technical decisions, whereas many of my design decisions were allegorical. For example, Spinoza, the typeface, was chosen because it shares a name with Baruch Spinoza, a Jewish-born philosopher who did some work in optics, particularly on instrumentation and the design of lenses for telescopes (can see far into the past) and microscopes (very introspective). Very heavy-handed, no?</p>

        <p>I did everything right with The Julius Cards: I published the work to “my” server, as much as it can be mine because I’m actually leasing space on a shared server, which I try not to think about too much. I didn’t use jQuery because I’m embarrassed by it. I built it to function without Javascript. All blocking requests that rely on a third-party are at the end of the document. The flash of unstyled text, while wince-worthy (for some reason? Like I’m ashamed for people to know that resources are loading?), is collateral for knowing that my work isn’t beholden to the whims of the Typekit CDN. I used a flexible, em-based layout to be screen-size agnostic. My breakpoints are based around the measure of the type, not common contemporary device widths. I spent hours beating every unnecessary byte out of every image, 112 in total, because many are sized for different breakpoints.</p>

        <p>However, I don’t know if longevity as an ultimate goal is practical. Is it fair for me to say, “I built this thing to live forever,” because I designed for it to live forever? The web feels <a href="http://fractallyweird.tumblr.com/post/2787381796/fractally-weird">fractally</a> brittle. We grandstand about how much we care about the things we make and throw around words like “craft” and “heritage” and “love” like we make a difference, but how many smart people wile away their days building what <a href="http://goodonpaper.org">Andy</a> and I refer to as “dog social networks”? A “dog social network” is an umbrella term to describe anything on the web that has about as much gravitas as an actual dog social network.   </p>

        <p>This brittleness is exhibited in practice regarding how we develop web today. We balk when we have to provide an experience to a minority set of underrepresented browsers or cases where we can&#8217;t rely on Javascript, and while it’s obnoxious to solve problems for a perceived set of invisible people, it’s our responsibility to make things robust if we’re proud of what we create so that people can actually experience them. There are things being built today that only function under a narrow set of constraints, and it could all be intentionally thrown away and celebrated for that. I’m referring to another unsustainable pattern where a thing is built to absorb as much of people as possible, gets sold, and decision-making power is relinquished to those who may not have the best interest of the thing or its fans in mind. This type of exchange, while seen as a success in one sense, is actually a big shame because the thing you built is dead, even if it was only a dog social network.</p>

        <p>I don&#8217;t have enough perspective to speculate on the nature of the web, so I’m going to be myopic on purpose: What if it’s nature is to be impermanent, and that is its strength, and what allows it to evolve rapidly? I’ve worked hard to ensure that The Julius Cards will be around for a long time, but what if that’s unnatural? Anecdotally, one of my <a href="http://web.archive.org/web/20071109233237/http://www.harpold.com/500/paddock/00000181.html">favorite things ever written</a> is only available through the mirror at <a href="http://archive.org">archive.org</a> because the author’s family allowed her domain to expire when she died. When I die in a plane crash (because that is how I want to die), who will keep the servers running? Who will keep this thing alive for the length of time I intended for it to be alive for?</p>
    </blockquote>
    <footer>
        <cite>
            <a href="http://chloeweil.com/blog/our-ragged-history">Our Ragged History, November 5 2013, Chloe Weil, on her personal website chloeweil.com</a>
        </cite>
    </footer>
</figure>

I decided to write this quick post as a mark and sign post for myself, and anyone else, pointing to her work. As Weil knew, most URLs don't last, and I don't know what will happen to her work in the long term. I hope that it can be kept online.

As I've done with other websites that feel are like a book I would add to my shelf for future reference, I've run a quick `wget` on her domain. This downloads a copy of everything in reach. I used [instructions by the Archive Team](http://www.archiveteam.org/index.php?title=Wget) that I found via [Jason Scott](http://textfiles.com/jason/) of the archive.org Weil references. I suspect she was a [punk archivist](http://www.mikejonesonline.com/contextjunky/2014/06/09/i-am-for-an-archive-blogjune-9/) herself.

My thoughts go out to Chloe Weil's family and friends. The sparks she left for the web are deeply appreciated.

* * *

*Jeremy Keith has collected many [blog posts](http://adactio.com/links/tags/chloeweil) and [tweets](http://adactio.com/chloe/) for Chloe Weil and has [written about his friend](http://adactio.com/journal/7030/) on his website [adactio.com](http://adactio.com/)*

{% include comments.html %}
