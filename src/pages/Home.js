import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default class Home extends Component {
	render() {
		return (
			<div className="homePage">
				<MainNavigation />
				<section className="text-white pt-5 px-5 height-100 contentWrap">
					<div className="greetingText">
						<div className="display-3 mt-2 d-block">Hi, I'm Samson,</div>
						<div className="h4 my-5 greetingDescription">
							<p>
							A FullStack Software Engineer with experience in both FrontEnd and Backend Development. 
							I build Web and Mobile Apps. When I am not consuming RestFul APIs, you will find me playing video games .
							</p>
						</div>
					</div>
					<div className="d-block mt-5 pt-5">
						<div className="p-2">
							<Link to="/portfolio" className="btn btn-dark">
								PORTFOLIO
							</Link>
						</div>
						<div className="p-2">
							<Link to="/contact" className="btn btn-dark">
								CONTACT
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
