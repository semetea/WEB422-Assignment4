import { Component, OnInit } from '@angular/core';
import { Artist2 } from '../class/Artist2';
import { Item } from '../class/Item';
import { Item3 } from '../class/Item3';
import albumData from '../data/Albums.json';
import artistData from '../data/Artist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  albums: Array<Item> = []
  url: string = ""

  artist: Artist2 = {
    followers: [],
    genres: [],
    images: [],
    popularity: 0,
    external_urls: {},
    href: "",
    id: "",
    name: "",
    type: "",
    uri: ""
  }

  constructor() { }

  ngOnInit(): void {
    this.albums = albumData.items.filter((curValue, index, self) => self.findIndex(t => t.name.toUpperCase() === curValue.name.toUpperCase()) === index);
    this.artist = artistData
    this.url = "url(" + this.artist.images[0].url + ") no-repeat center center"
    console.log(this.url)
  }

}
