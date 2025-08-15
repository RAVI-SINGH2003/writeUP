import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();



  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(pageName);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };

  return (
    <div>
      <p className="home__header">WriteUpp</p>
      <form onSubmit={handleFormSubmit} className="home__sub-container">
        <input
          type="text"
          value={pageName}
          onChange={handleInputChange}
          className="home__input"
          placeholder="Enter your page name ..."
        />
        <button type="submit" className="home__button">
          GO
        </button>
      </form>
    </div>
  );
};

export default Home;
