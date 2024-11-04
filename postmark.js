import { env } from "env.mjs"
const postmark = require("postmark")

const serverToken = env.POSTMARK_SERVER_TOKEN
const client = new postmark.ServerClient(serverToken)

export { client }
