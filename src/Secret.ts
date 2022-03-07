import { SecretTooShortError } from "./SecretTooShortError";

export class Secret{
    constructor(private secret: string){
        if(secret === undefined || secret === null || secret.trim().length < 3){
            throw new SecretTooShortError();
        }
    }
}