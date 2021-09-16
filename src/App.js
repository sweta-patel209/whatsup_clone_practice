
import Messenger from './components/Messenger';
import AccountProvider from './contextApi/AccountProvider';
import TemplateProvider from './theme/TemplateProvider'


function App() {
  
  return (
    <TemplateProvider>
    <AccountProvider>
    <Messenger />
    </AccountProvider>
    </TemplateProvider>
  );
}

export default App;
