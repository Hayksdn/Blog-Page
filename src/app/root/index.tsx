import HeroSection from "./modules/heroSection";
import BlogSection from "./modules/blogSection";
import { useState } from "react";
const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BlogSection searchTerm={searchTerm} />
    </>
  );
};

export default Root;
