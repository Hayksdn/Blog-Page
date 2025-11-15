import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./root";
import About from "./about";
import Contact from "./contact";
import { Layout } from "@/shared/layout/layout";
import BlogPage from "./blogPage";
import SignUp from "./signUp";
import Login from "./login";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
