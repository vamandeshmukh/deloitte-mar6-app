
import BlogPosts from './components/BlogPosts';
import Parent from './components/Parent';
import Login from './components/Login';
import Home from './components/Home';
import Page404 from './components/Page404';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/blogs' element={<BlogPosts />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/parent' element={<Parent />} />
                        <Route exact path='/' element={<Home />} />
                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );

};

export default AppRoutes;