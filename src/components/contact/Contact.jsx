import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>
              Thank you for your submission! I will reply as soon as possible!
            </span>
          )}
        </form>

        <div className="footer">
          <div className="gitHub">
            <a href="https://github.com/natewalchenbach">
              <i class="fa-brands fa-github fa-4x"></i>
            </a>
          </div>
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/nate-walchenbach/">
              <i class="fa-brands fa-linkedin fa-4x"></i>
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/NateWalchenbach">
              <i class="fa-brands fa-twitter fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
