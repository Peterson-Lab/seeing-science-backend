import { objectType } from "nexus"

export const drtTrialResponse = objectType({
    name: "DrtTrialResponse",
    definition(t){
        t.id("id")
        t.int("participant_id")
        t.int("question")
        t.int("answer")
        t.int("time")
        t.boolean("correct")
        t.float("created_at")
        t.float("updated_at")
    }
})