import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Anders von Mirbach | Developer',
  description: 'Creative developer showcasing innovative projects and technical expertise.',
  openGraph: {
    title: 'Anders von Mirbach | Developer',
    description: 'Creative developer showcasing innovative projects and technical expertise.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
