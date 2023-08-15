import 'react-native-gesture-handler';



import Routes from './components/extra/Routes';

//Data

import { GlobalProvider } from './mocks/NormalData/globalData';



export default function App() {

  return (

    <GlobalProvider>

      <Routes></Routes>

    </GlobalProvider>




  );
}

