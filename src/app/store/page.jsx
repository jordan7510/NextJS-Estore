import Container from '@/components/Container'
import StoreClient from '@/components/store/StoreClient'
import { getCategories, getProducts } from '@/lib/products'

export default async function StorePage() {
  const products =  await getProducts();
  const categories = await getCategories();

  return (
     <Container>
      <StoreClient products={products} cat={categories}/>
    </Container>
  )
}
