// import style from "./App.module.scss";
import "../../styles/main.scss";
import { ProjectPage } from "../../pages/projectPage/ProjectPage";
import { Routes, Route } from "react-router-dom";
import { Contacs } from "../../pages/contacts/Contacts";
import { Home } from "../../pages/home/Home";
import { ProjectsPage } from "../../pages/projectsPage/ProjectsPage";
import { Footer } from "../footer/Footer";

import { NavBar } from "../navbar/NavBar";
import ScrollToTop from "../../utils/scrollToTop";

function App() {
	return (
		<div className="App">
			<NavBar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/project/:id" element={<ProjectPage />} />
				<Route path="/contacts" element={<Contacs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
