import { UrlIdTooShortError } from "./UrlIdTooShortError";

export class UrlId {
    constructor(private urlId: string){
        if(urlId === undefined || urlId === null || urlId.trim().length < 10){
            throw new UrlIdTooShortError();
        }
    }
}