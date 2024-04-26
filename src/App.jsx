import "./App.css";
import "./async/services/getData";
import { ProductCard } from "./ui/components/ProductCard";
import { ProductCard2 } from "./ui/components/ProductCard2";
function App() {
  return (
    <>
      <h2>LAB DATA - FETCHING</h2>
      <ProductCard />
      <ProductCard2 />
    </>
  );
}

export default App;
