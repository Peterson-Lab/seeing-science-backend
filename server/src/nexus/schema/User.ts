import { objectType } from "nexus"

export const User = objectType({
    name: "User",
    definition(t){
        t.id("id")
        t.string("email")
        t.string("username")
        t.string("role")
        t.float("created_at")
        t.float("updated_at")
    }
})