import { Artist } from "./Artist";
import { Copyright } from "./Copyright";
import { Image } from "./Image";
import { Item } from "./Item";
import { Track } from "./Track";

export class Album {
    album_type: string = "";
    artists: Array<Artist> = [];
    available_markets: Array<string> = [];
    copyrights: Array<Copyright> = [];
    external_ids: object = {
        upc: ""
    }
    external_urls: object = {
        spotify: ""
    }
    genres: Array<string> = [];
    href: string = ""
    id: string = ""
    images: Array<Image> = [];
    label: string = ""
    name: string = ""
    release_date: string = ""
    release_date_precision: string = ""
    popularity: number = 0
    tracks: object = {
        href: "",
        items: [],
        limit: 0,
        offset: 0,
        total: 0,
    }
}