import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading'

// Dynamic import for code splitting
const Home = Loadable({
  loader: () => import('./Home.container'),
  loading: () => <Loading />,
});
export default Home;