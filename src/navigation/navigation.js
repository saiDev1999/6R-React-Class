import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import SettingScreen from "../screens/setting-screen";
import BlogScreen from "../screens/blog-screen";
import InvalidScreen from "../screens/invalid-screen";
import UserScreen from "../screens/user-screen";
import AdminScreen from "../screens/admin-screen";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Static routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="settings" element={<SettingScreen />} />
        <Route path="blog" element={<BlogScreen />} />
        <Route path="*" element={<InvalidScreen />} />
        <Route path="users" element={<UserScreen />} />
        <Route path="users/admin" element={<AdminScreen />} />

        {/* dynamic routes */}
        <Route path="users/:userId" element={<UserScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationStack;
