
import BlogPosts from './components/BlogPosts';
import Parent from './components/Parent';
import Login from './components/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
const AppRoutes = () => {

    return (

        <div>
            <p>Routes component</p>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/blogs' element={<BlogPosts />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/parent' element={<Parent />} />
                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    );

};

export default AppRoutes;