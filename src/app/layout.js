import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Oldboyz",
  description: "Clothing brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
