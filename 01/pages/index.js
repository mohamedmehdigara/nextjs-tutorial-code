import { getProducts } from '../lib/moltin'

const Home = ({ products }) => <pre>{JSON.stringify(products, '\t', 2)}</pre>

Home.getInitialProps = async ({res}) => {
  try {
  const products = await getProducts();
  res.send(products);
} catch(e) {
  console.log(e);
  () => res.send(500);
  
}
await new Promise(() => {});

return {}
}

export default Home
