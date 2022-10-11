import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import ViewUser from "./ViewUser";
import Edituser from "./Edituser";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/user_create" element={<Usercreate />}></Route>
              <Route path="/user/:id" element={<ViewUser />}></Route>
              <Route path="/edit/:id" element={<Edituser />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
