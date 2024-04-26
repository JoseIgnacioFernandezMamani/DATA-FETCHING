# Cambios al trabajar con TypeScript (`.tsx`) en lugar de JavaScript (`.jsx`)

- Es necesario definir explícitamente los tipos de datos para componentes, props, estados y otros datos utilizados en la aplicación.

- **Manejo de errores de tipo**: TypeScript te ayuda a detectar errores de tipo durante el desarrollo, evitando problemas en tiempo de ejecución.

- **Uso de librerías con tipos definidos**: Es recomendable utilizar librerías con definiciones de tipos para una mejor integración con TypeScript.

## cambios especificos

``` javascript
interface Product {
  title: string;
  description: string;
  price: number;
  brand: string;
}

export const ProductCard2: React.FC = () => {
  const [product, setProduct] = useState<Product>({});
/*resto de codigo*/
}
```
