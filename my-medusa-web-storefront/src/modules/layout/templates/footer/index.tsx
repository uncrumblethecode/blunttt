// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories() 

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               Inqlaab
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
                          
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Inqlaab</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Inqlaab. All rights reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }


import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()
  return (
    <footer className="border-t border-ui-border-base bg-white mt-10">
      <div className="content-container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold tracking-wide uppercase text-gray-800 hover:text-black"
            >
              Inqlaab
            </LocalizedClientLink>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Discover timeless style and curated fashion through Inqlaab’s unique collections.
            </p>
          </div>

          {/* Categories */}
          {productCategories?.length > 0 && (
            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-4">
                Categories
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                {productCategories.slice(0, 6).map((category) => {
                  if (category.parent_category) return null

                  const children = category.category_children?.map((child) => ({
                    name: child.name,
                    handle: child.handle,
                    id: child.id,
                  })) || []

                  return (
                    <li key={category.id}>
                      <LocalizedClientLink
                        className="hover:text-black font-medium"
                        href={`/categories/${category.handle}`}
                      >
                        {category.name}
                      </LocalizedClientLink>
                      {children.length > 0 && (
                        <ul className="ml-3 mt-1 space-y-1 text-gray-500">
                          {children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                className="hover:text-black text-sm"
                                href={`/categories/${child.handle}`}
                              >
                                {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections?.length > 0 && (
            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-4">
                Collections
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                {collections.slice(0, 6).map((collection) => (
                  <li key={collection.id}>
                    <LocalizedClientLink
                      className="hover:text-black"
                      href={`/collections/${collection.handle}`}
                    >
                      {collection.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Useful Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-4">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Inqlaab. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
