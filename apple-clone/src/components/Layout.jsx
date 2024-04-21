import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Container } from "./index";

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
