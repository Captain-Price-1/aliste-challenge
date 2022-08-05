import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/main"
              element={
                <ProtectedRoute>
                  <MainPage />
                </ProtectedRoute>
              }
            ></Route>

            {/* <Route path="/main" element={<MainPage />} /> */}
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
