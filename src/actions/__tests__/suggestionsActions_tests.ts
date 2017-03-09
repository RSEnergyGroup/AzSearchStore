import * as suggestionsActions from "../suggestionsActions";

const ts = Date.now();

describe("actions/suggestions", () => {
    it("should create the action that gets triggered when suggest is initiated", () => {
        expect(
            suggestionsActions.initiateSuggest()
        ).toEqual({
            type: "INITIATE_SUGGEST"
        });
    });
    it("should create action to set suggestions after suggest", () => {
        expect(
            suggestionsActions.recieveSuggestions([], ts)
        ).toEqual({
            type: "RECEIVE_SUGGESTIONS",
            suggestions: [],
            receivedAt: ts
        });
    });
});