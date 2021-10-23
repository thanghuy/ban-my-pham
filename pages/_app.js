import "tailwindcss/tailwind.css";
import "../styles/main.css"
import LayOutWeb from "../src/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <LayOutWeb>
      <Component {...pageProps} />)
    </LayOutWeb>
  );
}
export default MyApp;
