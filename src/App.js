import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';
import Blog from './Pages/Blog/Blog';
import CourseDetail from './Pages/Courses/CourseDetail/CourseDetail';
import Register from './Pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pricing' element={<PrivateRoute><Register /></PrivateRoute>} />
        <Route path='/courseDetail/:courseId' element={<PrivateRoute><CourseDetail /></PrivateRoute>} />


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
