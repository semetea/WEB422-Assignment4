import { Image } from "./Image";

export class Artist2 {
    external_urls: object = {
        spotify: ""
    };
    followers: Object = {
        total: 0
    }
    genres: Array<String> = [];
    href: string = "";
    id: string = "";
    images: Array<Image> = [];
    name: string = "";
    popularity: number = 0;
    type: string = "";
    uri: string = "";
}