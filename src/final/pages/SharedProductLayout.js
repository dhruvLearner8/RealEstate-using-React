import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2>Real Estate</h2>
      <Outlet />
    </>
  );
};
export default Home;
