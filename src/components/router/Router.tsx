import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Moviedetails from "../Moviedetails";
import Newuserform from "../Newuserform";
import Mypage from "../Mypage";
import Updateprofile from "../Updateprofile";
import Addmovie from "../Addmovie";
import Usetoken from "../../Utils/Usetoken";
import Loginform from "../Loginform";
import Appcontext from "../../store/Appcontext";
import Listbygenre from "../categories/Listbygenre";
import Searchedmovies from "../categories/searchedmovies";

export default function Router() {
  return (
    <BrowserRouter>
      <Appcontext>
        <Header />
        <Routes>
          //PUBLIC ROUTES
          <Route path="/Hellocine" element={<Home />} />
          <Route path="/movie/:id" element={<Moviedetails />} />
          <Route path="/genre/:name-:id" element={<Listbygenre />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/newuser" element={<Newuserform />} />
          <Route path="/search" element={<Searchedmovies />} />
          //PRIVATE ROUTES
          {/* <Route element={<AuthRoutes />}> */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/updateprofile" element={<Updateprofile />} />
          <Route path="/addmovie" element={<Addmovie />} />
          {/* </Route> */}
        </Routes>
      </Appcontext>
    </BrowserRouter>
  );
}
