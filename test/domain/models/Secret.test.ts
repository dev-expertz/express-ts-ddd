import { SecretTooShortError } from "../../../src/domain/models/errors/SecretTooShortError";
import { Secret } from "../../../src/domain/models/Secret";

describe('Secret Test', () => {
    it('should create an instance of Secret class', () => {
        expect(new Secret("123qwe")).toBeInstanceOf(Secret);
    });

    it('should throw an Error if the secret has less than 3 chars', () => {
        expect(() => new Secret("12")).toThrow(SecretTooShortError);
    });
});
