// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Maheen Fayyaz - Portfolio',
  description: 'MERN Stack Developer portfolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* boxicons CDN */}
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className="bg-[var(--bg-color)] text-[var(--text-color)]">
        {children}
      </body>
    </html>
  );
}
