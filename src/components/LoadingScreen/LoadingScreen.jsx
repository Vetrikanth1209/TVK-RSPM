import "./LoadingScreen.css";

import logo from "../../assets/images/logo.png";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loader-wrapper">
        <div className="spinner-ring"></div>

        <img
          src={logo}
          alt="logo"
          className="loader-logo"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;