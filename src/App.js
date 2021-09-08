import Home from './containers/Home';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './themes/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF961D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
