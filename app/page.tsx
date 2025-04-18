import { Fragment } from "react"

import SellerList from "@/app/sections/SellerList"
import BuySellFilters from "@/app/BuySellFilters"

export default function PageDefaultSell() {
  return (
    <Fragment>
      <BuySellFilters />
      <SellerList type="buy" />
    </Fragment>
  )
}
