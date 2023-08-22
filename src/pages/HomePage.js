import Header from "../components/Header";
import Banner from "../components/Banner";
import Wallet from "../components/Wallet";
import Trending from "../components/Trending";
import TopCollection from "../components/TopCollection";
import Subcribe from "../components/Subcribe";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Wallet />
            <Trending />
            <TopCollection />
            <Subcribe />
            <Footer />
        </>
    );
}

export default Home;
