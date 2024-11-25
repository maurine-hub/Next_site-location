import "./globals.css";
import Header from './header'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      <Header/>
      </body>
    </html>
  );
}
