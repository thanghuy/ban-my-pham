import CContact from "../components/CFooter/CContact";
import BackToTop from "./back-to-top";
import Footer from "./footer";
import Header from "./header";
import Store from '../redux/store';
import { Provider } from 'react-redux'
import CSnackbar from "../components/CSnackbar";
const LayOutWeb = ({children}) => {
    return(
        <Provider store={Store}>
            <Header />
            <div id="back-to-top-anchor" />
                {children}
            <Footer />
            <BackToTop />
            {/* <CContact /> */}
            <CSnackbar />
        </Provider>
    )
}
export default LayOutWeb;