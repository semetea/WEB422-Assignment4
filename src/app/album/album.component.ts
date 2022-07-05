import { Component, OnInit } from '@angular/core';
import { Album } from '../class/Album';
import { Copyright } from '../class/Copyright';
import { Image } from '../class/Image';
import { Item } from '../class/Item';
import { Track } from '../class/Track';
import albumData from '../data/Album.json';

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
    tracks: Object
  };

  constructor() { }

  ngOnInit(): void {
    this.album = albumData
    this.album.tracks = Object.assign(albumData.tracks)
    console.log(this.album.tracks)
  }

}
