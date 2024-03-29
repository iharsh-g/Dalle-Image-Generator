import {logo} from "./assets"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'

function App() {
    return (
        <BrowserRouter>
            <header className="w-full flex justify-between items-center bg-white px-4 py-4 border-b border-b-[#e6ebf4]">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-28 object-contain"/>
                </Link>

                <Link to="/create-post" className="text-white px-4 py-2 rounded-md bg-[#6469ff] font-medium">Create</Link>
            </header>

            <main className="px-4 py-8 w-full bg-[#f9afe] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/create-post" element={<CreatePost/>} />
                </Routes>
            </main>

        </BrowserRouter>
    );
}

export default App;
