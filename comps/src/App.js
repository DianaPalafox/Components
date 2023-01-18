import Button from "./Button";

function App() {
    return(
        <div>
            <div>
                <Button success rounded outline>Click me!</Button>
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
                <Button success>Add to cart!</Button>
            </div>
        </div>
    )
}

export default App;