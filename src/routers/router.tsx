import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../Screens/Auth/Login';
import Home from '../Screens/Home/Home';
import { Header } from '../components/Header';
import Collections from '../Screens/Collections/Collections';
import UserCollections from "../Screens/Collections/Transcrition";
import TranscribePage from "../Screens/Collections/Book";
import ProfilePage from "../Screens/Profile/User";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/transcrition" element={<UserCollections/>} />
        <Route path="/book" element={<TranscribePage/>} />
        <Route path="/user" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
