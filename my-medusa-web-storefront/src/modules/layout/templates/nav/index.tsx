// import { Suspense } from "react"

// import { listRegions } from "@lib/data/regions"
// import { StoreRegion } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"

// export default async function Nav() {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex-1 basis-0 h-full flex items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               data-testid="nav-store-link"
//             >
//               Inqlaab
//             </LocalizedClientLink>
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden small:flex items-center gap-x-6 h-full">
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 Account
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }


import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const productCategories = await listCategories()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          {/* Left: SideMenu (mobile/hamburger) */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center: Logo and Categories Menu */}
          <div className="flex items-center h-full gap-x-8">
            {/* Logo */}
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Inqlaab
            </LocalizedClientLink>

            {/* Categories Menu (desktop only) */}
            {productCategories?.length > 0 && (
              <nav className="hidden small:block ml-2">
                <ul className="flex gap-6 text-sm text-gray-700">
                  {productCategories.slice(0, 6).map((category) => {
                    if (category.parent_category) return null

                    const children = category.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || []

                    return (
                      <li key={category.id} className="relative group">
                        <LocalizedClientLink
                          className="hover:text-black font-medium"
                          href={`/categories/${category.handle}`}
                        >
                          {category.name}
                        </LocalizedClientLink>
                        {children.length > 0 && (
                          <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
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
              </nav>
            )}
          </div>

          {/* Right: Account & Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}