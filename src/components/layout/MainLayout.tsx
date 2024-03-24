import { Outlet } from "react-router-dom";
import Container from "../shared/Container";
import Navbar from "../shared/Navbar";
import ScrollTop from "../shared/ScrollTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
