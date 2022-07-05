import { Item } from "./Item";

export class Track {
    href: string = "";
    items: Array<Item> = [];
    limit: number = 0;
    offset: number = 0;
    total: number = 0;
}