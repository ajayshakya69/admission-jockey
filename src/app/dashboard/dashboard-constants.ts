import {
  Home,
  BookMarked,
  Briefcase,
  Calendar,
  ClipboardList,
  UserPen,
  Users,
  HomeIcon,
} from "lucide-react";

export const store_constants = {
  collection: "Collections",
  gallery: "Gallery",
  promotion_Ad: "Promotions & Ads",
  Reviews: "Reviews",
  active_coupon: "Active Coupons",
  recent_orders: "Recent Orders",
};

export const navbarItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Alumini",
    url: "/dashboard/alumini",
    icon: Users,
  },
  {
    title: "Register",
    url: "/dashboard/register",
    icon: UserPen,
  },
  {
    title: "Application Builder",
    url: "/dashboard/introForm",
    icon: ClipboardList,
  },
  {
    title: "Calendar",
    url: "/dashboard/calender",
    icon: Calendar,
  },
  {
    title: "Courses",
    url: "/dashboard/courses",
    icon: BookMarked,
  },
  {
    title: "Jobs",
    url: "/dashboard/addresume",
    icon: Briefcase,
  },
];
