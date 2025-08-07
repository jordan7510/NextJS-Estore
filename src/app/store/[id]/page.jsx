import Container from "@/components/Container";
import { getProductById, getProducts } from "@/library";
import Image from "next/image";

export default async function ProductPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);
    console.log("product by id",product);
    
    return (
        <Container>
            <div>Product Detail page of {id}</div>
            <div>
                <div>
                    {/* <Image
                    src={product?.image}
                    /> */}
                </div>
                <div>
                    <div>
                        <h2>title</h2>
                        <p>Description</p>
                    </div>
                    <div>
                        <button>Quantity</button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </Container>
    )
}
