import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";

export default class Contact extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<section className="d-block p-5 height-100 contentWrap bg-white">
					<div className="display-4 w-100">Contact</div>
					<hr />
					<div className="card w-100">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<span className="text-secondary">
									Email
									<i className="fa fa-envelope mr-2 p-1"></i>:
								</span>
								<span className="p-0 ml-3">sammykiiza@hotmail.com</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://www.linkedin.com/in/samson-ayesiga-28847217b/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									Linked
									<i className="fa fa-linkedin-square mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://www.linkedin.com/in/samson-ayesiga-28847217b/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://www.linkedin.com/in/samson-ayesiga-28847217b/
									</a>
								</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://github.com/sammykiiza"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									Github
									<i className="fa fa-github mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://github.com/sammykiiza"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://github.com/sammykiiza
									</a>
								</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
