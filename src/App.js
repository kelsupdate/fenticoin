import "./App.css"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Home from "./screens/app/Home"
import Profile from "./screens/app/Profile"
import Referrals from "./screens/app/Referrals"
import Packages from "./screens/app/Packages"
import ValidatePayments from "./screens/app/ValidatePayments"
import Register from "./screens/auth/Register"
import Login from "./screens/auth/Login"
import WelcomeNew from "./screens/auth/WelcomeNew"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddPayments from "./screens/app/AddPayments"
import Withdraw from "./screens/app/Withdraw"
import Survey from "./screens/app/Survey"
import ReferralCode from "./screens/auth/ReferralCode"
import { AuthProvider } from "./contexts/AuthContext"
import MessageDisplay from "./components/MessageDisplay"
import InstallPromptWrapper from "./components/InstallPromptWrapper"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <InstallPromptWrapper>
          <CssBaseline />
          <Container maxWidth="lg">
            <MessageDisplay />
            <Routes>
              <Route path="/" element={<WelcomeNew />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Profile />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/validate-payments" element={<ValidatePayments />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<WelcomeNew />} />
              <Route path="/add-payments" element={<AddPayments />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/referral-code" element={<ReferralCode />} />
            </Routes>
          </Container>
        </InstallPromptWrapper>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App