import { FaLink } from "react-icons/fa6";
import { MdContentPasteGo } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const adminSidebarData = [
	{
		text: "Create Admin",
		icon: <GrUserManager />,
		link: "/admin/dashboard/create-admin/",
	},
	{
		text: "Course Mgmt.",
		icon: <MdContentPasteGo />,
		link: "/admin/dashboard/course-management/",
	},
	{
		text: "Admin Link 3",
		icon: <FaLink />,
		link: "/admin/link",
	},
	{
		text: "Admin Link 4",
		icon: <FaLink />,
		link: "/admin/link",
	},
	{
		text: "Admin Link 5",
		icon: <FaLink />,
		link: "/admin/link",
	},
];

export default adminSidebarData;
