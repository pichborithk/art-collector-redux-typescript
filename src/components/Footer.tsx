import logo from '../asset/PiCHBORITH KONG.png';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='left'>
        <div className='logo'>
          <a
            href='https://github.com/pichborithk/art-collector-redux-typescript'
            target='_blank'
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a href='#' target='_blank'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='#' target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='#' target='_blank'>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a href='#' target='_blank'>
            <i className='fa-brands fa-youtube'></i>
          </a>
        </div>
        <p>© 2023 clone by Pichborith Kong</p>
        <p>@ Fullstack Academy 2301-ftb-mt-web-pt</p>
      </div>
      <div>
        <img src={logo} alt='my-logo' />
      </div>
      <div className='right'>
        <p>Address: Somewhere on Earth</p>
        <p>Terms of Use</p>
        <p>Privacy Statement</p>
        <p>FAQs</p>
      </div>
    </footer>
  );
};

export default Footer;
