import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext";
import HomePage from "./pages/Home/HomePage";
// import LeftDrawer from "./components/LeftDrawer/LeftDrawer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
