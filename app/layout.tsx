import "styles/tailwind.css"
import { Theme } from "@radix-ui/themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="blue"
          grayColor="slate"
          panelBackground="translucent"
          scaling="100%"
          className="flex flex-col"
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}
