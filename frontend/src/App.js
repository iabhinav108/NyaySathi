//import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Pagenotfound from './pages/Pagenotfound'
import UserProfile from './pages/Dashboard'
import UpdateProfileForm from './pages/sidebar/UpdateProfileForm'
import FeedbackForm from './pages/sidebar/FeedbackForm'
import ApplyPreTrialForm from './pages/sidebar/ApplyPreTrialForm'
import ManagePreTrial from './pages/sidebar/ManagePreTrials'
import Notifications from './pages/sidebar/Notifications'
import HistoryPT from './pages/sidebar/History'
import AdminLogin from './adminpages/AdminLogin'
import Room from './pages/sidebar/Room'
//import { Switch } from '@mui/material'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route path="/dashboard/updateProfile" element={<UpdateProfileForm />} />
          <Route path="/dashboard/Notifications" element={<Notifications />} />
       /* <Route path="/dashboard/feedback" element={<FeedbackForm />} />
          <Route path="/dashboard/ApplyPreTrial" element={<ApplyPreTrialForm />} /> */
          <Route path="/dashboard/historyPreTrials" element={<HistoryPT />} />
          <Route path="/dashboard/ManagePreTrials" element={<ManagePreTrial />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
