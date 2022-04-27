import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

function Mainlayout({children}) {
  return (
    <div>
        <Navbar />
        <div className="contrainer pt-5">
            {children}
        </div>
        <Footer />
    </div>
  );
}

export default Mainlayout