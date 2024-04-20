import videoHomePage from "../../assets/video-homepage.mp4";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  console.log(isAuthenticated);
  console.log(account);
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title">There's a better way to ask</div>
        <div className="sub-title">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead - and make everyone happy.
        </div>
        <div className="home-btn">
          <Button variant="dark" className="btn-lg">
            Get started. It's free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
