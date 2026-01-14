import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store/store';
import { ThemeProvider } from './theme/ThemeProvider';
import { useAppSelector } from './store/hooks';
import { AppRouter } from './router';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import '@/i18n/config';

const AppContent = () => {
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Provider store={store}>
          <AppContent />
        </Provider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

