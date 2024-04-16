import Edit from './Pages/Edit';
import Homepage from './Pages/Homepage';
import Post from './Pages/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div >
            <header>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/edit' element={<Edit />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;