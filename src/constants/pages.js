import MenuBlack from "../assets/icons/menu-black.png"
import MenuWhite from "../assets/icons/menu.png"
import GraphBlack from "../assets/icons/graph-black.png"
import GraphWhite from "../assets/icons/graph.png"

const PAGES = {
  dashboard: {
    icon: MenuBlack,
    navIcon: MenuWhite,
    title: "Dashboard",
    to: "/dashboard"
  },
  accounts: {
    icon: GraphBlack,
    navIcon: GraphWhite,
    title: "Accounts",
    to: "/dashboard/accounts"
  }
}

export default PAGES;