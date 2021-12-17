import Footer from "../components/Footer"
import Header from "../components/Header"

const Default = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Default
