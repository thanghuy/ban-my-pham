import "tailwindcss/tailwind.css";
import "../styles/main.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayOutWeb from "../src/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <LayOutWeb>
      <Component {...pageProps} />
    </LayOutWeb>
  );
}
export default MyApp;
