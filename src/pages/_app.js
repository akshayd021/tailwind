import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/componets";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        style={{
          position: "absolute",
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          width: "10px",
          height: "10px",
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
