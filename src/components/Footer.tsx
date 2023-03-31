import "./Footer.scss";

const year = new Date().getFullYear();

export const Footer = () => (
  <footer className="Footer">
    <div className="container">
      <div>
        Copyright © {year} <strong>D2Checkpoint.com</strong>. {""}
        All Rights Reserved.
      </div>

      <small className="additional">
        D2Checkpoint.com is in no way affiliated with Bungie, Inc., {""}
        or Sony Interactive Entertainment LLC.
      </small>
    </div>
  </footer>
);
