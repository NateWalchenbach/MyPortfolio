import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  fullStackPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
  gamePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured Projects",
    },
    {
      id: "fullStack",
      title: "Full Stack Applications",
    },
    {
      id: "frontEnd",
      title: "Front End Development",
    },
    {
      id: "backEnd",
      title: "Back End Development",
    },
    {
      id: "games",
      title: "Games",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "fullStack":
        setData(fullStackPortfolio);
        break;
      case "frontEnd":
        setData(frontEndPortfolio);
        break;
      case "backEnd":
        setData(backEndPortfolio);
        break;
      case "games":
        setData(gamePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
            <div className="item">
              <img src={d.img} alt="" onClick={d.link} />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
