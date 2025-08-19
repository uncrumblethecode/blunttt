// import { Metadata } from "next"

// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"

// export const metadata: Metadata = {
//   title: "Blunttt",
//   description:
//     "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
// }

// export default async function Home(props: {
//   params: Promise<{ countryCode: string }>
// }) {
//   const params = await props.params

//   const { countryCode } = params

//   const region = await getRegion(countryCode)

//   const { collections } = await listCollections({
//     fields: "id, handle, title",
//   })

//   if (!collections || !region) {
//     return null
//   }

//   return (
//     <>
//       <Hero />
//       <div className="py-12">
//         <ul className="flex flex-col gap-x-6">
//           <FeaturedProducts collections={collections} region={region} />
//         </ul>
//       </div>
//     </>
//   )
// }


// import { Suspense } from "react"
// import { Metadata } from "next"

// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import RefinementList from "@modules/store/components/refinement-list"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import PaginatedProducts from "@modules/store/templates/paginated-products"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"

// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"
// // 

// // 
// export const metadata: Metadata = {
//   title: "Blunttt",
//   description:
//     "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
// }

// export default async function Home(props: {
//   params: Promise<{ countryCode: string }>
// }) {
//   const params = await props.params
//   const { countryCode } = params

//   const region = await getRegion(countryCode)
//   const { collections } = await listCollections({
//     fields: "id, handle, title",
//   })

//   if (!collections || !region) {
//     return null
//   }

//   const sort: SortOptions = "created_at"
//   const pageNumber = 1

//   return (
//     <>
//       <Hero />

//       <div className="py-12">
//         <FeaturedProducts collections={collections} region={region} />
//       </div>

//       {/* STORE TEMPLATE SECTION */}
//       <div
//         className="flex flex-col small:flex-row small:items-start py-6 content-container"
//         data-testid="category-container"
//       >
//         <RefinementList sortBy={sort} />
//         <div className="w-full">
//           <div className="mb-8 text-2xl-semi">
//             <h1 data-testid="store-page-title">All products</h1>
//           </div>
//           <Suspense fallback={<SkeletonProductGrid />}>
//             <PaginatedProducts
//               sortBy={sort}
//               page={pageNumber}
//               countryCode={countryCode}
//             />
//           </Suspense>
//         </div>
//       </div>
//     </>
//   )
// }


// import { Suspense } from "react"
// import { Metadata } from "next"

// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import RefinementList from "@modules/store/components/refinement-list"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import PaginatedProducts from "@modules/store/templates/paginated-products"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"

// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"

// export const metadata: Metadata = {
//   title: "Blunttt",
//   description:
//     "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
// }

// export default async function Home({
//   params,
//   searchParams,
// }: {
//   params: { countryCode: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }) {
//   const { countryCode } = params

//   const region = await getRegion(countryCode)
//   const { collections } = await listCollections({
//     fields: "id, handle, title",
//   })

//   if (!collections || !region) {
//     return null
//   }

//   const sort: SortOptions = "created_at"
//   const pageNumber = Number(searchParams?.page) || 1

//   return (
//     <>
//       <Hero />

//       <div className="py-12">
//         <FeaturedProducts collections={collections} region={region} />
//       </div>

//       {/* STORE TEMPLATE SECTION */}
//       <div
//         className="flex flex-col small:flex-row small:items-start py-6 content-container"
//         data-testid="category-container"
//       >
//         <RefinementList sortBy={sort} />
//         <div className="w-full">
//           <div className="mb-8 text-2xl-semi">
//             <h1 data-testid="store-page-title">All products</h1>
//           </div>
//           <Suspense fallback={<SkeletonProductGrid />}>
//             <PaginatedProducts
//               sortBy={sort}
//               page={pageNumber}
//               countryCode={countryCode}
//             />
//           </Suspense>
//         </div>
//       </div>
//     </>
//   )
// }

import { Suspense } from "react"
import { Metadata } from "next"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Blunttt",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home({
  params,
  searchParams,
}: {
  params: { countryCode: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  // Read sortBy and page from searchParams
  const sort: SortOptions = (searchParams?.sortBy as SortOptions) || "created_at"
  const pageNumber = Number(searchParams?.page) || 1

  return (
    <>
      {/* <Hero /> */}

      {/* <div className="py-12">
        <FeaturedProducts collections={collections} region={region} />
      </div> */}

      {/* STORE TEMPLATE SECTION */}
      <div
        className="flex flex-col small:flex-row small:items-start py-6 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <div className="mb-8 text-2xl-semi">
            <h1 data-testid="store-page-title">All products</h1>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}