import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading'

// Dynamic import for code splitting
const UserDetail = Loadable({
  loader: () => import('./UserDetail.container'),
  loading: () => <Loading />,
});
export default UserDetail;