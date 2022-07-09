import { Artist } from "./Artist";

export class Item2 {
    artists: Array<Artist> = [];
    available_markets: Array<String> = [];
    disc_number: number = 0;
    duration_ms: number = 0;
    external_urls: object = {
        spotify: ""
    }
    href: string = "";
    id: string = "";
    name: string = "";
    is_local: boolean = false;
    track_number: number = 0
    type: string = ""
    uri: string = "";
}