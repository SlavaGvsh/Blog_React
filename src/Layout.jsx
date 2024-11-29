import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch, posts }) => {
  return (
    <div className="app">
      <Header title="React js Block" />
      <Nav search ={search} setSearch ={setSearch} />
      <Outlet />
      <Footer length={posts.length} />
    </div>
  );
};

export default Layout;
