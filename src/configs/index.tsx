//assets
import dashboardIcon from "@assets/Dashboard.png";
import AirtimeIcon from "@assets/data and airtime.png";
import PaybillsIcon from "@assets/Credit card.png";
import PackagesIcon from "@assets/plans and upgrade.png";
import PlansIcon from "@assets/Savings.png";
import SupportIcon from "@assets/support icon.png";
import TransactionsIcon from "@assets/Transactions.png";

//components
import Airtime from "@pages/Dashboard/Airtime&Data";
import DashboardHome from "@pages/Dashboard/DashboardHome";
import PayBills from "@pages/Dashboard/PayBills";
import Plan from "@pages/Dashboard/Plan";
import Transactions from "@pages/Dashboard/Transactions";
import Support from "@pages/Dashboard/Support";
import Packages from "@pages/Packages";

export const menuItems = [
  { label: "Product", link: "/product" },
  { label: "Packages", link: "/packages" },
  { label: "Bonuses", link: "/bonuses" },
  { label: "Faq", link: "/faq" },
  { label: "Blog", link: "/blog" },
];

export const dashboardRoutes = [
  {
    path: "/dashboard",
    icon: <img src={dashboardIcon} alt="dashboardIcon" />,
    label: "Dashboard",
    element: <DashboardHome />,
  },
  {
    path: "airtime&data",
    icon: <img src={AirtimeIcon} alt="dashboardIcon" />,
    label: "Airtime & Data",
    element: <Airtime />,
  },
  {
    path: "paybills",
    icon: <img src={PaybillsIcon} alt="dashboardIcon" />,
    label: "Pay Bills",
    element: <PayBills />,
  },
  {
    path: "plans",
    icon: <img src={PlansIcon} alt="dashboardIcon" />,
    label: "Plans",
    element: <Plan />,
  },
  {
    path: "transactions",
    icon: <img src={TransactionsIcon} alt="dashboardIcon" />,
    label: "Transactions",
    element: <Transactions />,
  },
  {
    path: "packages",
    icon: <img src={PackagesIcon} alt="dashboardIcon" />,
    label: "Packages",
    element: <Packages />,
  },
  {
    path: "support",
    icon: <img src={SupportIcon} alt="dashboardIcon" />,
    label: "Support",
    element: <Support />,
  },
];
