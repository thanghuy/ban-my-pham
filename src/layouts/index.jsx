import BackToTop from "./back-to-top";
import Footer from "./footer";
import Header from "./header";
const LayOutWeb = ({children}) => {
    return(
        <>
            <Header />
            <div id="back-to-top-anchor" />
                {children}
            <Footer />
            <BackToTop />
        </>
    )
}
export default LayOutWeb;