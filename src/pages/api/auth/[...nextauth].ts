import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// import { authOptions } from " /server/auth";

const scopes = ["identify"].join(" ");

export default NextAuth({
  // ...authOptions,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: { params: { scope: scopes } },
    }),
  ],
});
