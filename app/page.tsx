import Image from "next/image";
import Link from "next/link";
import ProductCard from './components/ProductCard';

const Home = async () => {
  const data = await fetch('http://localhost:3000/api/posts');
  const response = await data.json();
  console.log(response);
  console.log(response[0].title);
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

export default Home;
