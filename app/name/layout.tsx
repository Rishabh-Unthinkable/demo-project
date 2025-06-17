export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{"backgroundColor" : "red", "padding" : "10px"}}>This is a header</header>
        <main style={{"marginTop" : "10px", "marginBottom" : "10px"}}>{children}</main>
        <footer style={{"backgroundColor" : "red", "padding" : "10px"}}>This is a footer</footer>
      </body>
    </html>
  );
}
