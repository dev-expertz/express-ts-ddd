import { UniqidTokenGenerator } from "../../src/adapters/UniqidTokenGenerator";
import uniqid from "uniqid";
jest.mock("uniqid");

describe("UniqidTokenGenerator Tests", () => {
    const mockUniqid = uniqid as jest.MockedFunction<typeof uniqid>;
    mockUniqid.mockReturnValue("123456qwerty");
    
    it("should generate a token as mentioned", () => {
        const uniqidTokenGenerator = new UniqidTokenGenerator();
        const token = uniqidTokenGenerator.generateToken();
        expect(token).toBe("123456qwerty");
        expect(token.length).toBeGreaterThanOrEqual(10);
    });
});