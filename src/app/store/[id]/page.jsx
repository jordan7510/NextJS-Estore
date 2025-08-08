import Container from "@/components/Container";
import { getProductById, getProducts } from "@/library";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import QuantitySelector from "@/components/productDetialPage/QuantitySelector";

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    return (
        <Container>
            <div className=" flex flex-col md:flex-row items-center justify-around gap-4 p-2 ">
                <div className=" shadow-2xl  w-sm md:max-w-lg md:min-w-lg relative aspect-square ">
                    <Image
                        priority
                        fill
                        alt={product?.title || "product-image"}
                        src={product?.image}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <h2 className="font-medium sm:text-lg md:text-2xl mb-4">{product?.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{product?.description}</p>
                        <p className="text-lg sm:text-xl md:text-3xl font-bold mb-4 text-gray-600">${product?.price}.00</p>
                    </div>
                    <QuantitySelector id={id}/>
                </div>
            </div>
        </Container>
    )
}
