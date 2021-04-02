import { Query, Resolver } from "type-graphql";


@Resolver()
export class HealthCheckResolver {
    @Query(() => Boolean)
    async healthCheck() {
        return true
    }
}