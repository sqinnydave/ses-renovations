import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
      //POSTMARK_SERVER_TOKEN: z.string(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    // POSTMARK_SERVER_TOKEN: process.env.POSTMARK_SERVER_TOKEN,
  },
})
