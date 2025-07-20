import '../styles/globals.css' // Correct path if globals.css is in /styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (


    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <h1>hsdfl</h1>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
