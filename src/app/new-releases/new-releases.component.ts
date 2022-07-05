import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import data from '../data/new-releases.json';
import { Item } from '../class/Item';
import albumData from '../data/Album.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  releases: Array<Item> = []

  constructor() { }

  ngOnInit(): void {
    this.releases = data.albums.items
    console.log(albumData)
  }

}
