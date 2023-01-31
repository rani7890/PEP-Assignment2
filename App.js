
import './App.css'
import { useState } from 'react';
import { Header } from 'semantic-ui-react';
import Cards from './Components/Cards/Cards';
import "semantic-ui-css/semantic.min.css"
 const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>
            <Cards counts={count} setCounts={setCount} />
        </div>
        <Header as= "h2" textAlign="center">
            Done by: Nisha Rani (12015084)
        </Header>
        </>
    )
 }

  export default App;