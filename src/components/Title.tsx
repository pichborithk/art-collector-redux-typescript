import logo from '../asset/fullstack-logo.png';

const Title = () => {
  return (
    <div id='title'>
      <img src={logo} alt='fsa-logo' />
      <h1>
        the Art Collector — <u>Harvard</u> Art Museums Private Collections
      </h1>
      {/* <p>Clone by Pichborith Kong@Fullstack Academy 2301-ftb-mt-web-pt</p> */}
    </div>
  );
};

export default Title;
