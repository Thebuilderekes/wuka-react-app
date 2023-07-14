import React from "react";
import styled from "styled-components";
import "../../index.css";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import wukaFooterImg from "../../assets/img/wuka-footer.jpg";

function Foot() {
	return (
		<Footer>
			<div className="container" id="footer">
				<div className="footer-img">
					<img src={wukaFooterImg} alt="wuka the artiste" />
				</div>

				<div className="follow animate__animated animate__fadeIn animate__delay-6s ">
					<h3>FOLLOW WUKA</h3>
					<ul>
						<li>
							<a
								target="_blank"
								href="https://instagram.com/denwuka"
								aria-label="instagram icon to page"
							>
								<FaInstagram style={iconStyle} />
							</a>
						</li>
						<li>
							<a href="" aria-label="facebook icon to page">
								<FaFacebookF style={iconStyle} />
							</a>
						</li>

						<li>
							<a
								href=""
								target="_blank"
								rel="noopener noreferrer"
								aria-label="twitter icon to page"
							>
								<FaTwitter style={iconStyle} />
							</a>
						</li>
					</ul>
					<div className="attribution">
						<p className="attribute">
							{" "}
							Designed by{" "}
							<a
								href="https://twitter.com/iamthebuilder__"
								target="_blank"
								aria-label="link to website developer"
							>
								The Builder
							</a>{" "}
						</p>
					</div>
				</div>
			</div>
		</Footer>
	);
}

export default Foot;

const iconStyle = { color: "white", fontSize: "2rem" };
const Footer = styled.footer`
	.container {
		width: 100%;
		display: flex;
		overflow-x: hidden;
		font-family: "Cinzel";

		@media (max-width: 800px) {
			flex-direction: column;

			.footer-img {
				padding: 0;
				margin: 0;
				width: 100%;

				img {
					width: 100%;
					padding: 0;
					margin: 0;
				}
			}
		}

		.follow {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			background-color: #181b1b;

			> h3 {
				margin: 3rem 0;
				font-size: var(--large-fs);
				font-weight: 600;
				color: #ccddef;
			}
			ul {
				display: flex;
				list-style: none;

				li {
					list-style: none;
					padding: 0 1rem;

					a {
						&:hover {
							color: #cf3259;
						}
					}
				}
			}

			.attribution {
				.attribute {
					color: #ccddef;
					margin: 3rem 0;

					a {
						color: #ccddef;
					}
				}
			}
		}
	}
`;
