import { UrlIdTooShortError } from "../../src/models/errors/UrlIdTooShortError";
import { UrlId } from "../../src/models/UrlId";

describe('UrlId Test', () => {
    it('should create an instance of UrlId class', () => {
        expect(new UrlId("12345qwerty")).toBeInstanceOf(UrlId);
    });

    it('should throw an Error if the secret has less than 10 chars', () => {
        expect(() => new UrlId("12345qwer")).toThrow(UrlIdTooShortError);
    });
});
