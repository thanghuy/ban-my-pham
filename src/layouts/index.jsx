import Footer from "./footer";
import Header from "./header";
const LayOutWeb = ({children}) => {
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
export default LayOutWeb;