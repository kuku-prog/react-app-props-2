import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import FooterSection from "./components/FooterSection";

import React, { Component } from "react";
import SecondSect from "./components/SecondSect";
import ThirdSection from "./components/ThirdSection";
import FourthSect from "./components/FourthSect";
import FifthSect from "./components/FifthSect";
import SixthSect from "./components/SixthSect";
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<FirstSection />
				<SecondSect />
				<ThirdSection />
				<FourthSect />
				<SixthSect />
				<FifthSect />
				<FooterSection />
			</div>
		);
	}
}

// function App() {
// 	return (

// 	);
// }

// export default App;
