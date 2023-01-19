import { GoBell } from 'react-icons/go'
import Button from "./Button";

function App() {
    return(
        <div>
            <div>
                <Button success rounded outline><GoBell className='mr-1'/>Click me!</Button>
            </div>
            <div>
                <Button danger outline>Buy now!</Button>
            </div>
            <div>
                <Button warning>See deal!</Button>
            </div>
            <div>
                <Button secondary>Hide adds!</Button>
            </div>
            <div>
                <Button primary>Add to cart!</Button>
            </div>
        </div>
    )
}

export default App;