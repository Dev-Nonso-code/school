import "./App.css"
import Header from "./components/common/header/Header"
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Heads from "./components/common/header/Head"
import Notfound from "./components/home/Notfound"
import Slogin from "./components/body/Slogin"
import Ssignup from "./components/body/Ssignup"
import Alogin from "./components/body/Alogin"
import Asignup from "./components/body/Asignup"
import Post from "./components/body/Post"
import { useSelector, useDispatch } from "react-redux"

function App() {
  let count = useSelector(state=>state.counterReducer.myName)
  console.log(count);
  const dispath=()=>{
    
  }
  return (
    <>
      <div id="voov">
        <Heads />
      </div>
      <div className="sticky-top bg-warning">
        <Header />
      </div>
      <h3>{count}
        <button onClick={dispath}>increment</button>
      </h3>

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/student/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/student/signup' element={<Ssignup />} />
        <Route exact path='/student/login' element={<Slogin />} />
        <Route exact path='/admin/login' element={<Alogin />} />
        <Route exact path='/admin/post' element={<Post />} />
        <Route exact path='/admin/signup' element={<Asignup />} />
        <Route exact path='/student/courses' element={<CourseHome />} />
        <Route exact path='/student/team' element={<Team />} />
        <Route exact path='/student/pricing' element={<Pricing />} />
        <Route exact path='/student/journal' element={<Blog />} />
        <Route exact path='/student/contact' element={<Contact />} />
        <Route exact path='*' element={<Notfound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
