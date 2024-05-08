import { FaLink } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";

const studentSidebarData = [
  {
    text: "Courses",
    icon: <MdOutlinePlayLesson />,
    link: "/student/dashboard/courses",
  },
  {
    text: "Shopping Cart",
    icon: <RiShoppingCartFill />,
    link: "/student/dashboard/cart",
  },
  {
    text: "Enrollments",
    icon: <FaGraduationCap />,
    link: "/student/dashboard/enrollments",
  },
  {
    text: "Student Link 4",
    icon: <FaLink />,
    link: "/student/link",
  },
  {
    text: "Student Link 5",
    icon: <FaLink />,
    link: "/student/link",
  },
];

export default studentSidebarData;
