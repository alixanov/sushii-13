import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="text">
        <p>Welcome to Sushi Restaurant</p>

        <span>
          People edt with their eyes and Sushi creates an easy way for customers
          to order when they can see beatiful photos of your food
        </span>

        <div className="btns">
          <button>About</button>

          <button onClick={() => navigate("./menu")}>Menu </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
