import Link from "next/link";
import About from "./(rout)/about/page";
import Hello from "./component/hello";

const Home = () => {
  return (
    <div>
      Welcome to Nextjs
      <Hello />
      <Link href="/about"><About /></Link>
    </div>
  );
};

export default Home;
