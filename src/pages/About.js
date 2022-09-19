import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default class About extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<span className="d-block p-5 height-100 contentWrap bg-white">
					<div className="display-4 w-100">About</div>
					<hr />
					<p>
						I'm a FullStack Developer at Mooti Technologies Limited a Tech
						Company in London(UK). I have a big passion for PHP, UI effects,
						dynamic user experience, website and mobile-app development.
					</p>
					<p>
						Over the years , I have played a key role in converting ideas from
						UI designs to robust scalable web and mobile apps, following the best
						engineering principles. My experience has taught me that every
						problem requires a unique solution. This has been the key to my
						success and the teams I have worked with.
					</p>
					<p>
						Have an idea you want to convert into a WebApp or Mobile App ?{" "}
						<Link to="/contact">Get in Touch</Link>
					</p>
				</span>
			</div>
		);
	}
}
