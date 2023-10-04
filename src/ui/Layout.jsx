import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loading from './Loading';

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loading />}

      <Header />
      <div className='overflow-y-scroll'>
        <main className='max-w-3xl mx-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default Layout;
