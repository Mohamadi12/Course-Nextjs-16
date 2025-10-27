import Hello from "./component/hello";

const Home = () => {
  return (
    <div className="text-2xl underline flex justify-center items-center min-h-screen">
      Welcome to Nextjs
      <Hello />
    </div>
  );
};

export default Home;
