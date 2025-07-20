import "../styles/globals.css"
import { CssBaseline } from "@mui/material"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  )
}
