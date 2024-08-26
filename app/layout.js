import './globals.css';
import MainHeader from './main-header';

export const metadata = {
  title: 'Sim Rui En Food App',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
