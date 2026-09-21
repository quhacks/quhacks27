import './globals.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export const metadata = {
  title: 'QuHacks 2027 | 10th Anniversary Hackathon',
  description: 'QuHacks is a free, student-run hackathon for middle and high school students. Join us in 2027 for our 10th anniversary!',
  metadataBase: new URL('https://quhacks.tech'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="page" id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
