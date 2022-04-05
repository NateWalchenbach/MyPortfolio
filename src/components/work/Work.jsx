import "./Work.scss";

export default function Work() {
  return <div className="work" id="work">
    <div className="slider">
      <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <img src="assets/mobile.png" alt="" />
            </div>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A enim debitis saepe eligendi quo. Tempora, nisi sapiente. Cum atque vero officiis fugiat, totam quos sunt et, impedit possimus repellendus autem?</p>
            <span>Projects</span>
          </div>
          <div className="right">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>;
}
