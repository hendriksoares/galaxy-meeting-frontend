import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { AuthProvider, ProtectRoute } from 'contexts/auth.context';

import store from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
