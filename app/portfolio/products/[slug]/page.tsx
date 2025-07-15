import type { Metadata } from "next"
import ProductDetailPageClient from "./ProductDetailPageClient"
import { products } from "@/lib/products" // Import products data

// Function to generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Function to generate metadata for each product page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailPageClient params={params} />
}
