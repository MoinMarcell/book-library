import {Author} from "./Author.ts";

export type Book = {
    id: string,
    isbn: string,
    title: string,
    author: Author,
    cover: string,
    opener: string,
}
