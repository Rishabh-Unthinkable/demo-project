export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: '2rem' }}>
          <h1>Welcome Back</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
