import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { UserContext } from "../lib/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: 'jeff'}}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}
