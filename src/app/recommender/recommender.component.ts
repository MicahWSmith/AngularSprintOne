import { Component, OnInit } from '@angular/core';
import { Recommendation } from './recommendation.model';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  APIKey: string = "428679-AngularS-W7UIM26X";

  // artist input by user
  artistName: string = "";
  // fill with returned recommended artists
  recommended: Recommendation[] = [ 
    {
      "Name": "Nirvana",
      "Type": "music",
      "wTeaser": "Nirvana was an American rock band formed in Aberdeen, Washington in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990. Nirvana's success popularized alternative rock, and they were often referenced as the figurehead band of Generation X. Their music maintains a popular following and continues to influence modern rock and roll culture.In the late 1980s, Nirvana established itself as part of the Seattle grunge scene, releasing its first album, Bleach, for the independent record label Sub Pop in 1989. They developed a sound that relied on dynamic contrasts, often between quiet verses and loud, heavy choruses. After signing to major label DGC Records in 1991, Nirvana found unexpected mainstream success with \"Smells Like Teen Spirit\", the first single from their landmark second album Nevermind (1991). A cultural phenomenon of the 1990s, Nevermind was certified Diamond by the RIAA and is credited for ending the dominance of hair metal.",
      "wUrl": "http://en.wikipedia.org/wiki/Ted_Ed_Fred",
      "yUrl": "https://www.youtube-nocookie.com/embed/hTWKbfoikeg",
      "yID": "hTWKbfoikeg"
    },
    {
      "Name": "Green Day",
      "Type": "music",
      "wTeaser": "Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong and bassist and backing vocalist Mike Dirnt. For much of the band's career, they have been a trio with drummer Tré Cool, who replaced John Kiffmeyer in 1990 before the recording of the band's second studio album, Kerplunk (1991). Touring guitarist Jason White became a full-time member in 2012, but returned to his role as a touring member in 2016. Green Day was originally part of the late-'80s/early-'90s punk scene at the DIY 924 Gilman Street club in Berkeley, California. The band's early releases were with the independent record label Lookout! Records. In 1994, their major-label debut Dookie, released through Reprise Records, became a breakout success and eventually shipped over 10 million copies in the U.S. Green Day is credited alongside fellow California punk bands Sublime, the Offspring, and Rancid, with popularizing mainstream interest in punk rock in the U.S.",
      "wUrl": "http://en.wikipedia.org/wiki/Green_Day",
      "yUrl": "https://www.youtube-nocookie.com/embed/Soa3gO7tL-c",
      "yID": "Soa3gO7tL-c"
    },
    {
      "Name": "Muse",
      "Type": "music",
      "wTeaser": "Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums).Muse released their debut album, Showbiz, in 1999, showcasing Bellamy's falsetto and a melancholic alternative rock style. Their second album, Origin of Symmetry (2001), incorporated wider instrumentation and romantic classical influences and earned them a reputation for energetic live performances. Absolution (2003) saw further classical influence, with strings on tracks such as \"Butterflies and Hurricanes\", and was the first of six consecutive UK number-one albums.",
      "wUrl": "http://en.wikipedia.org/wiki/Muse_(band)?redirect=no",
      "yUrl": "https://www.youtube-nocookie.com/embed/w8KQmps-Sog",
      "yID": "w8KQmps-Sog"
    }
  ];

  onSelect(){
    let parsedArtist: string = this.artistName.split(' ').join('+');
    console.log("Converted Name: ", parsedArtist);

    let getReq: string = "https://tastedive.com/api/similar?q=" + parsedArtist + "&type=music&info=1&limit=3&k=" + this.APIKey

  }

}
