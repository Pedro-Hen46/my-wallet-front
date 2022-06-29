import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLoggedProvider } from "./contexts/UserLoggedProvider";

//================= IMPORTAÇÃO DAS PAGES ===================//
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NewCashWinPage from "./pages/NewCashWinPage";
import NewCashLossPage from "./pages/NewCashLossPage";

export default function App() {
  return (
    <UserLoggedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/newcashwin" element={<NewCashWinPage />} />
          <Route path="/newcashloss" element={<NewCashLossPage />} />
        </Routes>
      </BrowserRouter>
    </UserLoggedProvider>
  );
}
