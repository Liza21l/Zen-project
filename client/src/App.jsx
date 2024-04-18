import PlaceAnOrder from './Components/PlaceAnOrder/PlaceAnorder';
import MainPage from '../src/pages/main'
import { BrowserRouter, Routes, Route}  from"react-router-dom"

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App