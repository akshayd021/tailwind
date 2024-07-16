import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/componets";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        style={{
          position: "absolute",
          top: `${cursorPosition.y + scrollPosition.y}px`,
          left: `${cursorPosition.x + scrollPosition.x}px`,
          width: "20px",
          height: "20px",
          backgroundColor: "white",
          borderRadius: "50%",
          visibility: "visible",
        }}
      />
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}