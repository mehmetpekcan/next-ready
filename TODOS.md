<!-- Initial -->

[x] A brand new Next.js 13 app

<!-- Database Creation -->

[] A postgresql database (could get by using Supabase account logined with GitHub)
[] Copy the database connection string and make available as `env` variable

<!-- Prisma Configuration -->

[] Make the `prisma` configurations
[] Add `prisma` as a dev dependency
[] Run `prisma` client to generate schema etc.
[] Fill the `env` variables which can be taken from Supabase
[] Let's run the `prisma` studio on local to see what we have and add some dummy records
[] Create a pages relevant to fetch data from database

<!-- Authentication Configuration -->

[] Make authentication configuration
[] Add `next-auth` and `@next-auth/prisma-adapter` dependencies
[] Update `prisma` schema to adapt `next-auth` requirements
[] Go `github` and make OAUTH configuration
