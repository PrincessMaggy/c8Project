import "./App.css";
import Referral from "./Components/Referral";
//import Preview from "./Components/Previewmeal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReferralPage from "./pages/ReferralPage";

function App() {
  return (
    <>
      {/*<Preview /> */}
      <Referral />
    </>
  );

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/referral" Component={ReferralPage} />
        </Routes>
      </Router>
    );
  }
}

export default App;
