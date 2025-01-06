import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"

export default class News extends Component {
    articles = [
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "US winter storm: Kentucky and Virginia declare state of emergency - BBC.com",
        "description": "Millions of Americans in eastern states brace for blizzards and treacherous ice as a severe winter storm spreads.",
        "url": "https://www.bbc.com/news/articles/c0kvlkvzdgzo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/df67/live/16bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg",
        "publishedAt": "2025-01-05T07:55:19Z",
        "content": "Tens of millions of Americans are bracing for a huge winter storm that could bring the heaviest snowfall and coldest temperatures in over a decade.\r\nThe storm, which started in the middle of the US, … [+2126 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Jack Baer",
        "title": "Derrick Rose moved to tears in Bulls halftime ceremony, to have his jersey number retired - Yahoo Sports",
        "description": "Derrick Rose still feels the love in Chicago.",
        "url": "https://sports.yahoo.com/derrick-rose-moved-to-tears-in-bulls-halftime-ceremony-to-have-his-jersey-number-retired-060615304.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/A2WtaOvB9jpu..wNkKDPhg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2025-01/8d0b40b0-cb28-11ef-bff7-928b38515d6b",
        "publishedAt": "2025-01-05T06:06:00Z",
        "content": "Derrick Rose felt the love in Chicago. (Photo by Geoff Stellfox/Getty Images)\r\nThe number retirement is still to come for Derrick Rose, but the former league MVP still felt plenty of love on Saturday… [+1921 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "KIM TONG-HYUNG",
        "title": "South Korean protesters brave cold to demand Yoon’s ouster as detention deadline looms - The Associated Press",
        "description": "Hundreds of South Koreans, bundled up against freezing temperatures and snow, rallied overnight near the residence of impeached President Yoon Suk Yeol, calling for his ouster and arrest, as authorities prepared to renew their efforts to detain him over his s…",
        "url": "https://apnews.com/article/south-korean-yoon-suk-yeol-martial-law-protests-snow-detention-c16cb90593c7a99673d12ffa0853dda8",
        "urlToImage": "https://dims.apnews.com/dims4/default/afae590/2147483647/strip/true/crop/7037x3958+0+367/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7d%2F6a%2Fd39dbf3d89740b6a4a173c9da350%2Fc54634cc69734e79bf42688a6e5993c2",
        "publishedAt": "2025-01-05T06:03:00Z",
        "content": "SEOUL, South Korea (AP) Hundreds of South Koreans, bundled up against freezing temperatures and snow, rallied overnight into Sunday near the residence of impeached President Yoon Suk Yeol, calling fo… [+7197 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": null,
        "title": "Trump appears with Italian Prime Minister Meloni at his Florida club - The Associated Press",
        "description": "President-elect Donald Trump made an appearance with Italian Prime Minister Giorgia Meloni, who was visiting his Mar-a-Lago club. Meloni's visit Saturday follows Argentina President Javier Milei, who became the first world leader to meet with Trump at Mar-a-L…",
        "url": "https://apnews.com/article/trump-meloni-appearance-sala-florida-club-7dd479dde9a39f251ebf98730e42fcdb",
        "urlToImage": "https://dims.apnews.com/dims4/default/5ba4c88/2147483647/strip/true/crop/4999x2812+0+263/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F3d%2F0333c2114cfcbf99eb7c570025b0%2F246b403827894047bad44385280dedc2",
        "publishedAt": "2025-01-05T05:19:00Z",
        "content": "PALM BEACH, Fla. (AP) President-elect Donald Trump made an appearance Saturday with Italian Prime Minister Giorgia Meloni, who was visiting his Mar-a-Lago club.\r\nMeloni follows Argentina President Ja… [+1764 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "PAUL WISEMAN, MARC LEVY",
        "title": "Biden’s decision to block Nippon Steel takeover creates uncertainty for U.S. Steel workers - The Associated Press",
        "description": "By blocking a Japanese company’s takeover of U.S. Steel, President Joe Biden says he is protecting good jobs in the American heartland. He may be putting them at risk instead. In making its nearly $15 billion bid for the storied Pittsburgh-based steelmaker, N…",
        "url": "https://apnews.com/article/nippon-steel-japan-economy-biden-pennsylvania-cbd8022487b361dcad942c45bc3e12d3",
        "urlToImage": "https://dims.apnews.com/dims4/default/1a7fb6d/2147483647/strip/true/crop/4240x2385+0+224/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2Fec%2F926729e14313fd5ebc330757cb3b%2F9cd59bce6c2f44c7b53727940bbf9596",
        "publishedAt": "2025-01-05T05:11:00Z",
        "content": "WASHINGTON (AP) By blocking a Japanese companys takeover of U.S. Steel, President Joe Biden said he was protecting good jobs in the American heartland. He may be putting them at risk instead.\r\nIn mak… [+5426 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "hoopsrumors.com"
        },
        "author": null,
        "title": "Warriors Notes: Kerr, Curry, Kuminga, Payton, Santos - hoopsrumors.com",
        "description": "Steve Kerr wants the Warriors to wait a few weeks before pursuing any more trades.",
        "url": "https://www.hoopsrumors.com/2025/01/warriors-notes-kerr-curry-kuminga-payton-santos.html",
        "urlToImage": "https://cdn.hoopsrumors.com/files/2024/11/Steve-Kerr-900x600.jpg",
        "publishedAt": "2025-01-05T05:02:00Z",
        "content": "The Warriors won’t be in a hurry to make their next trade, writes Ohm Youngmisuk of ESPN. Speaking to reporters before tonight’s game, coach Steve Kerr said he wants to take a month or so to evaluate… [+3178 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Akriti Anand",
        "title": "HMPV outbreak in China: Is it a new virus? How is it similar to Covid-19? Is there any vaccine? What we know so far | Mint - Mint",
        "description": "HMPV or Human Metapneumovirus, is not a newly discovered virus. The US Centers for Disease Control and Prevention (CDC) said it was first discovered in 2001. Should India be worried? Is there a vaccine to prevent the spread? Here’s all you need to know about …",
        "url": "https://www.livemint.com/science/hmpv-outbreak-in-china-is-it-a-new-virus-how-is-it-similar-to-covid-19-is-there-any-vaccine-what-we-know-so-far-11736044379099.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2025/01/05/1600x900/The-Chandipura-virus-is-mainly-transmitted-by-vect_1724898468411_1736044493564.jpg",
        "publishedAt": "2025-01-05T03:52:43Z",
        "content": "An outbreak of Human Metapneumovirus (HMPV) in China has raised alarm globally. Several countries, including India, are monitoring the virus and its spread closely. But should one worry about it? How… [+4296 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "KLKN"
        },
        "author": "Mark Fischer",
        "title": "Snow emergency issued in the City of Lincoln - KLKN",
        "description": "According to the city, crews are on patrol treating the emergency snow routes, arterial streets, school and bus routes with salt and brine.",
        "url": "https://www.klkntv.com/snow-emergency-issued-in-the-city-of-lincoln/",
        "urlToImage": "https://www.klkntv.com/content/uploads/2021/01/mgn-1280x960-71214c00-kiteh.jpg",
        "publishedAt": "2025-01-05T02:35:55Z",
        "content": "LINCOLN, Neb. (KLKN) – The City of Lincoln issued a snow emergency Saturday evening effective immediately.\r\nA snow emergency parking ban was also put into place that will be in effect at midnight, me… [+513 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Biden plans to send $8bn arms shipment to Israel - BBC.com",
        "description": "The weapons consignment, which needs approval from House and Senate committees, includes air-to-air missiles.",
        "url": "https://www.bbc.com/news/articles/cpvne94v1rdo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8ef0/live/e2b7be50-cac7-11ef-94cb-5f844ceb9e30.jpg",
        "publishedAt": "2025-01-05T02:27:09Z",
        "content": "The US Department of State has notified Congress of a planned $8bn (£6.4bn) arms sale to Israel, an American official has confirmed to the BBC.\r\nThe weapons consignment, which needs approval from Hou… [+2587 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Natalie Oganesyan",
        "title": "Jeff Baena Cause Of Death Revealed - Deadline",
        "description": "A cause of death for Jeff Baena, the indie writer/filmmaker known for 'Life After Beth' and 'The Little Hours,' has been revealed.",
        "url": "http://deadline.com/2025/01/jeff-baena-cause-of-death-1236246649/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2025/01/jeff-baena-1.jpg?w=1024",
        "publishedAt": "2025-01-05T02:02:00Z",
        "content": "Trigger warning: This article includes mention of suicide that readers may find disturbing.\r\nA cause of death for Jeff Baena, the indie writer/filmmaker known for Life After Beth and The Little Hours… [+1602 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "2025 NFL Draft order: Browns clinch top-three pick with loss to Ravens, Giants no longer have shot at No. 1 - CBS Sports",
        "description": "A look at the current draft order",
        "url": "https://www.cbssports.com/nfl/draft/news/2025-nfl-draft-order-browns-clinch-top-three-pick-with-loss-to-ravens-giants-no-longer-have-shot-at-no-1/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/01/05/bf704545-035c-42e0-a8af-388c0a35ca2a/thumbnail/1200x675/8f976597d52a61a283dd927d63842166/stefanski-g.jpg",
        "publishedAt": "2025-01-05T01:22:00Z",
        "content": "The Cleveland Browns suffered an ugly 35-10 loss to the Baltimore Ravens on Saturday afternoon and clinched no worse than the third pick. They also assured the New York Giants cannot pick in the top … [+6212 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Brian Thevenot, Chris Kirkham",
        "title": "Exclusive: New Orleans’ planned new Bourbon Street barriers only crash-rated to 10 mph - Reuters",
        "description": "Documents reviewed by Reuters make clear that the system, which is expected to be in place by Super Bowl Sunday, will offer little protection against vehicle attacks at any significant speed.",
        "url": "https://www.reuters.com/world/us/new-orleans-planned-new-bourbon-street-barriers-only-crash-rated-10-mph-2025-01-04/",
        "urlToImage": "https://www.reuters.com/resizer/v2/CTXYJHWEMFOI7JEJSFXEFOINTY.jpg?auth=d717446b5ca5f1d2d0c4b1f89b3d26e180198b613eb485c326ebc9cd954add43&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2025-01-05T00:56:00Z",
        "content": null
      },
      {
        "source": {
          "id": "the-hill",
          "name": "The Hill"
        },
        "author": "Filip Timotija",
        "title": "New York Republican suggests hush money case helped to elect Trump: ‘Great irony’ - The Hill",
        "description": "Rep. Mike Lawler (R-N.Y.) suggested the New York hush money case played a part in helping President-elect Trump win the 2024 presidential election against Vice President Harris.  “Well, the great irony in all of this is that I don’t think anyone did more to h…",
        "url": "https://thehill.com/regulation/court-battles/5067507-new-york-republican-suggests-hush-money-case-helped-to-elect-trump-great-irony/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/12/lawlermichael_120524gn01_w.jpg?w=1280",
        "publishedAt": "2025-01-05T00:53:00Z",
        "content": "Skip to content\r\nRep. Mike Lawler (R-N.Y.) suggested the New York hush money case played a part in helping President-elect Trump win the 2024 presidential election against Vice President Harris. \r\n“W… [+1676 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "DW (English)"
        },
        "author": "Deutsche Welle",
        "title": "Austria: Chancellor to resign after coalition talks collapse - DW (English)",
        "description": "There was political turbulence in Austria on Saturday night after coalition talks between the country's centrist parties broke down and Chancellor Karl Nehmammer announced his resignation. What happens next is unclear.",
        "url": "https://www.dw.com/en/austria-chancellor-nehammer-to-resign-after-coalition-talks-collapse/a-71217910",
        "urlToImage": "https://static.dw.com/image/70572743_6.jpg",
        "publishedAt": "2025-01-04T22:18:23Z",
        "content": "Austrian Chancellor Karl Nehammer has announced he will resign in the coming days after coalition talks between his Austrian People's Party (ÖVP) and the Social Democrats (SPÖ) collapsed.\r\n\"I will st… [+2193 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Bloomberg News",
        "title": "Maduro Rival Seeks Biden Talks Before Venezuela’s Inauguration - Yahoo Finance",
        "description": "(Bloomberg) -- Venezuela’s opposition leader plans to meet Washington lawmakers and speak with President Joe Biden next week ahead of his promised return to ...",
        "url": "https://finance.yahoo.com/news/maduro-rival-seeks-biden-talks-202719906.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/d7luPtKkw_ft7f8xhrYi9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/a60713286fc6344b956158ce5e4ab1e1",
        "publishedAt": "2025-01-04T20:27:19Z",
        "content": "(Bloomberg) -- Venezuelas opposition leader plans to meet Washington lawmakers and speak with President Joe Biden next week ahead of his promised return to the oil-rich South American nation after an… [+2310 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": null,
        "title": "Hey, Apple, Let's Shake Up the iPhone's Design in 2025 — Finally - CNET",
        "description": "Commentary: Apple's current, ubiquitous phone design is rooted in the iPhone X and leaves some fans clamoring for a major upgrade. Meanwhile, other iPhone owners are switching to the Motorola Razr.",
        "url": "https://www.cnet.com/tech/mobile/hey-apple-lets-shake-up-the-iphones-design-in-2025-finally/",
        "urlToImage": "https://www.cnet.com/a/img/resize/bd4d8402bc379cbfcb943791cf9f2c714b70b91b/hub/2022/08/11/648109a3-3b21-45d2-96f4-44350ee2accd/apple-stuff-ep-8cnet.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2025-01-04T20:00:00Z",
        "content": "I'm sitting at a restaurant with a few pals, enjoying dim sum, when a friend asks whether he should upgrade to the iPhone 16. I ask him which iPhone he has. My friend ponders aloud, \"The iPhone 14? O… [+16199 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tim Lammers",
        "title": "‘Mufasa: The Lion King’ Continues Rule Over Weekend Box Office - Forbes",
        "description": "Disney’s “Mufasa: The Lion King” is looking to keep its box office crown with no big newcomers vying for business in theaters this weekend.",
        "url": "https://www.forbes.com/sites/timlammers/2025/01/04/mufasa-the-lion-king-continues-rule-over-weekend-box-office/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67797e46fe504df622434b76/0x0.jpg?format=jpg&crop=1920,1080,x36,y0,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2025-01-04T18:46:33Z",
        "content": "Kiara (voiced by Blue Ivy Carter) and Simba (voiced by Donald Glover) \"Mufasa: The Lion King.\"\r\nDISNEY\r\nDisneys Mufasa: The Lion King is looking to keep its box office crown with no big newcomers vyi… [+2459 chars]"
      }
    ]

    constructor(){
        super()
        console.log("News Constructor called..")
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
      <div>

        <div className="container my-3">
            <h1 className='my-5'>NewsShorts -- Top Headlines!</h1>

            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-3" key={element.url}>
                        <NewsItems title={element.title.slice(0,44)+"..."} description={element.description.slice(0,88)+"..."} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}

            </div>
        </div>

      </div>
    )
  }
}
