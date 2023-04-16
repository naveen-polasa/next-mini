import ReduxProvider from "./Redux/reduxProvider";
import ContextProvider from "./context";
import "./globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <ReduxProvider>
          <ContextProvider>{children}</ContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
