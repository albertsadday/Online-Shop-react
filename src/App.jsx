import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages (group related imports together)
import { 
  Home, 
  ProductDetails, 
  Products, 
  Contact, 
  Error 
} from "./pages";

// Import components (group related imports together)
import { Sidebar, Header, Footer } from "./components";

const
 App = () => {
  return (
    <div className="overflow-hidden"> {/* Removed unnecessary fragment <> </> */}
      <Router>
        <Header />
        <div className="main-content"> {/* Added a container for main content */}
          <Sidebar /> 
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
