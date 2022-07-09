import { Component, OnInit } from '@angular/core';
import { Album } from '../class/Album';
import { Copyright } from '../class/Copyright';
import { Image } from '../class/Image';
import albumData from '../data/Album.json';
import albumData2 from '../data/Albums.json';
import artistData from '../data/Artist.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album = {
    album_type: "",
    artists: [],
    available_markets: [],
    copyrights: new Array<Copyright>,
    external_ids: Object,
    external_urls: Object,
    genres: [],
    href: "",
    id: "",
    images: new Array<Image>,
    label: "",
    name: "",
    release_date: "",
    release_date_precision: "",
    popularity: 0,
    tracks: {
      href: "",
      items: [],
      limit: 0,
      offset: 0,
      total: 0,
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.album = Object.assign(albumData)
    console.log(albumData2.items.filter((curValue, index, self) => self.findIndex(t => t.name.toUpperCase() === curValue.name.toUpperCase()) === index))
  }

}
