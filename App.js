import Login from './screens/Login'
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return(
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}