import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./root";
import About from "./about";
import Contact from "./contact";
import { Layout } from "@/shared/layout/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
