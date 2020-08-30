import React from "react";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Home = () => {
  const status = useSelector((state) => state.status);
  return (
    <div className="relative">
      <div className="h-screen p-10">
        <h2 className="text-5xl">Welcome Home!</h2>
        <Link to="/login">Logout</Link>
        <h3>Login status: {status}</h3>
      </div>
      <div className="fixed bottom-0 right-0 m-3">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Home);
