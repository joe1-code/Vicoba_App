import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./home/login";
import Index from "./home";
import Dashboard from "./dashboard/Admin/dashboard";
import ManagementPanel from "./dashboard/Admin/ManagePanel/management";
import RegisterGroup from "./home/registerGroup/registerGroup";
import Member from "./dashboard/Admin/Panel/Member/members";
import Regulations from "./dashboard/Admin/Panel/Regulations/regulations";
import AddWindow from "./dashboard/Admin/Panel/Window/addwindow";
import AccountantPanel from "./dashboard/Admin/Panel/Accountant/Accountant";

function App(){
return (
  <div>
     <Routes>
      <Route path="/Home" element={<Index/>}/>
      <Route path="/registerGroup" element={<RegisterGroup />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/panel" element={<ManagementPanel />}/>
      <Route path="/members" element={<Member />}/>
      <Route path="/regulations" element={<Regulations />}/>
      <Route path="/window" element={<AddWindow />}/>
      <Route path="/accountant" element={<AccountantPanel />}/>
      </Routes>

  </div>

)

}

export default App;