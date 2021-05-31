import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Lorem ipsum </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
      tincidunt elit. Nulla efficitur vestibulum porttitor. Ut cursus, nibh at
      ornare maximus, augue turpis ultrices ipsum, nec accumsan urna velit sit
      amet eros. Curabitur a metus rhoncus, interdum ipsum a, tempus purus.
      Quisque et erat vitae ligula imperdiet tincidunt. Duis lacinia leo vel
      lorem varius sodales. Maecenas viverra vestibulum urna non elementum.
      Vivamus a mi id elit maximus malesuada. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Phasellus feugiat
      metus vitae lectus tempor placerat quis a tellus. Fusce auctor lectus
      massa, at hendrerit arcu tincidunt eu. Duis risus magna, feugiat quis mi
      quis, tincidunt convallis dui.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
