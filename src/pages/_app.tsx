import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  neuemachinabold,
  neuemachinalight,
  neuemachinaregular,
} from "../static/NeueMachina";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-neue: ${neuemachinaregular.style.fontFamily};
          --font-neuelight: ${neuemachinalight.style.fontFamily};
          --font-neuebold: ${neuemachinabold.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
