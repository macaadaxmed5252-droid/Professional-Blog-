import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Blog from "./pages/Blog"
import Dashboard from "./pages/Dashboard"
import BlogList from "./pages/BlogList"
import CreateBlog from "./pages/CreateBlog"
import Update from "./pages/Update"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  )
}

export default App