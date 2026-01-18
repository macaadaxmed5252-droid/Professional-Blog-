import Dashboard from "./pages/Dashboard"
import Blog from "./pages/Blog"
import Header from "./components/header"
import BlogList from "./pages/BlogList"
import CreateBlog from "./pages/CreateBlog"
import Update from "./pages/Update"
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>


      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<CreateBlog />} />
        <Route path="/dashboard/:id" element={<BlogList />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
      
    </>
  )
}

export default App