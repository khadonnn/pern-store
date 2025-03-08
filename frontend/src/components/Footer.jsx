const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10">
      <aside>
        <div className="flex">
          <div className="w-12 rounded-full">
            <img
              src="https://www.svgrepo.com/show/13671/youtube.svg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 rounded-full">
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" />
          </div>
          <div className="w-12 rounded-full">
            <img
              src="https://www.svgrepo.com/show/475689/twitter-color.svg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p>
          VietNamese Developer
          <br />
          Make by me since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
