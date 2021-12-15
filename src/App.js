import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import LeftSideNav from "./components/navigation/LeftSideNav";
import TodoContainer from "./components/todoElement/TodoContainer";
import "./App.css";
import TopNavBar from "./components/navigation/TopNavbar";
import SettingSlide from './components/navigation/SettingSlide'
import { SideMenuContext, totalTaskContext, rightSettingContext } from "./components/context/Context";
import Footer from "./components/footer";
import MobileNav from "./components/navigation/MobileNav";

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [fullTaskList, setFullTaskList] = useState([])
  const [showSetting, setShowSetting] = useState(false)

  return (
    <Router>

            <totalTaskContext.Provider value={{ fullTaskList, setFullTaskList }} >
              <SideMenuContext.Provider value={{ showSideMenu, setShowSideMenu }} >
                <rightSettingContext.Provider value={{ showSetting, setShowSetting }}>
                  <TopNavBar />
                  <LeftSideNav />
                  <SettingSlide show={showSetting} />
                
                <Routes>
                  <Route path="/" caseSensitive element={<TodoContainer tableName="Today" />} />
                  <Route path="/complete" caseSensitive={false} element={<TodoContainer tableName="Complete" />} />
                  <Route path="/important" caseSensitive={false} element={<TodoContainer tableName="Important" />} />
                  <Route path="/over_due" caseSensitive={false} element={<TodoContainer tableName="Over Due" />} />
                  <Route path="/work" caseSensitive={false} element={<TodoContainer tableName="Work" />} />
                  <Route path="/personal" caseSensitive={false} element={<TodoContainer tableName="Personal" />} />
                  <Route path="/gaming" caseSensitive={false} element={<TodoContainer tableName="Gaming" />} />
                </Routes>
                <Footer />
                <MobileNav />
                </rightSettingContext.Provider>
              </SideMenuContext.Provider>
            </totalTaskContext.Provider>
    </Router>
  );
}
export default App;
