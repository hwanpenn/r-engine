import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
