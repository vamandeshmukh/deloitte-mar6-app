
import BlogPosts from './components/BlogPosts';
import Parent from './components/Parent';
import Login from './components/Login';
import Home from './components/Home';
import Page404 from './components/Page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Register from './components/Register';
import Footer from './components/Footer';
import OneBlog from './components/OneBlog';


const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    <Routes>
                        <Route path='/blogs' element={<BlogPosts />} />
                        {/* <Route path='/blog/:id' element={<OneBlog />} /> */}
                        <Route path='/blog' element={<OneBlog />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/parent' element={<Parent />} />
                        <Route path='/register' element={<Register />} />
                        <Route exact path='/' element={<Home />} />
                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </div>
                <div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;