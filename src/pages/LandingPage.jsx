import { useState, useEffect } from "react";

import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Hero from "../components/Hero/Hero";
import CustomNavbar from "../components/Navbar/Navbar";
import Leadership from "../components/Leadership/Leadership";
import GrievanceForm from "../components/Grievance/GrievanceForm";
import GrievanceTable from "../components/Grievance/GrievanceTable";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CustomNavbar />
      <Hero />
      <Leadership />
      <GrievanceForm />
      <GrievanceTable/>
      <Footer />
    </>
  );
};

export default LandingPage;