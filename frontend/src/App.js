import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// normal pages
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import SignIn from "./pages/sign-in/SignIn";
import StudentSignup from "./pages/sign-up-student/StudentSignUp";
import InstructorSignup from "./pages/sign-up-instructor/InstructorSignUp";
// admin pages
import AdminProtectedRoute from "./pages/route-guard-admin/AdminProtectedRoute";
import AdminMainPage from "./components/admin/main-page/AdminMainPage";
import AdminSignup from "./pages/sign-up-admin/AdminSignUp";
import CourseManagement from "./components/admin/manage-courses/CourseManagement";
import AdminDashboard from "./pages/dashboard-admin/AdminDashboard";
// instructor pages
import InstructorProtectedRoute from "./pages/route-guard-instructor/InstructorProtectedRoute";
import InstructorDashboard from "./pages/dashboard-instructor/InstructorDashboard";
import InstructorMainPage from "./components/instructor/main-page/InstructorMainPage";
// student page
import StudentProtectedRoute from "./pages/route-guard-student/StudentProtectedRoute";
import StudentDashboard from "./pages/dashboard-student/StudentDashboard";
import StudentMainPage from "./components/student/main-page/StudentMainPage";
import ShoppingCart from "./components/student/shopping-cart/ShoppingCart";
import Enrollments from "./components/student/enrollments/Enrollments";
import HomePage from "./pages/home-page/HomePage";
import SuccessPayment from "./components/student/payment-success/SuccessPayment";
import PaymentUnsuccess from "./components/student/payment-unsuccess/PaymentUnsuccess";

function App() {
	return (
		<div className="App">
			<Toaster />
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/home" element={<HomePage />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route
					path="/create-account/student"
					element={<StudentSignup />}
				/>
				<Route
					path="/create-account/instructor"
					element={<InstructorSignup />}
				/>
				{/* admin protected routes */}
				<Route
					path="/admin/dashboard"
					element={<AdminProtectedRoute />}
				>
					<Route
						path="/admin/dashboard/"
						element={<AdminDashboard />}
					>
						<Route
							path="/admin/dashboard/"
							element={<AdminMainPage />}
						/>
						<Route
							path="/admin/dashboard/create-admin/"
							element={<AdminSignup />}
						/>
						<Route
							path="/admin/dashboard/course-management/"
							element={<CourseManagement />}
						/>
					</Route>
				</Route>
				{/* instructor protected routes */}
				<Route
					path="/instructor/dashboard"
					element={<InstructorProtectedRoute />}
				>
					<Route
						path="/instructor/dashboard/"
						element={<InstructorDashboard />}
					>
						<Route
							path="/instructor/dashboard/"
							element={<InstructorMainPage />}
						/>
					</Route>
				</Route>
				{/* student protected routes */}
				<Route
					path="/student/dashboard"
					element={<StudentProtectedRoute />}
				>
					<Route
						path="/student/dashboard/"
						element={<StudentDashboard />}
					>
						<Route
							path="/student/dashboard/"
							element={<StudentMainPage />}
						/>
						<Route
							path="/student/dashboard/courses"
							element={<StudentMainPage />}
						/>
						<Route
							path="/student/dashboard/cart"
							element={<ShoppingCart />}
						/>
						<Route
							path="/student/dashboard/enrollments"
							element={<Enrollments />}
						/>
						<Route
							path="/student/dashboard/payment-success"
							element={<SuccessPayment />}
						/>
						<Route
							path="/student/dashboard/payment-unsuccess"
							element={<PaymentUnsuccess />}
						/>
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
