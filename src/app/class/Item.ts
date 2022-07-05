import { Artist } from "./Artist";
import { Image } from "./Image"

export class Item {
    album_type: string = "";
    artists: Array<Artist> = [];
    available_markets: Array<String> = [];
    external_urls: object = {
        spotify: ""
    }
    href: string = "";
    id: string = "";
    images: Array<Image> = [];
    name: string = "";
    release_date: string = "";
    release_date_precision: string = "";
    total_tracks: number = 0;
    uri: string = "";
}