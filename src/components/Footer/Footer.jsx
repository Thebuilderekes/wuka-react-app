import React from "react";
import styled from "styled-components";
import "../../index.css";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import wukaFooterImg from "../../assets/img/wuka-footer.jpg";

function Foot() {
	return (
		<Footer>
			<div className="container" id="footer">
				<div className="footer-img-container">
					<img
						className="footer-img"
						src={wukaFooterImg}
						alt="wuka holding a boom radio with his back turned"
					/>
				</div>

				<div className="follow animate__animated animate__fadeIn animate__delay-6s ">
					<blockquote>
						"Music is the universal language of mankind."
						<br />
						Henry Wadsworth Longfellow
					</blockquote>
					<h3>Follow Wuka</h3>
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
		align-items: flex-end;
		overflow-x: hidden;
		font-family: "Crimson Text";
		color: var(--text-color);

		@media (max-width: 800px) {
			flex-direction: column;

			.footer-img-container {
				padding: 0;
				display: flex;
				margin: 0;
				width: 100%;
				height: 100%;

				.footer-img {
					width: 100%;
					padding: 0;
					object-fit: fill;
				}
			}
		}

		.follow {
			padding-top: 50px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			/* background-color: #349999; */

			> h3 {
				text-transform: uppercase;
				margin: 3rem 0;
				font-size: var(--large-fs);
				font-weight: 600;

				text-align: center;
			}

			blockquote {
				font-size: var(--medium-fs);
				text-align: center;
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
					color: var(--text-color);
					margin: 3rem 0;
					font-size: var(--medium-fs);

					a {
						color: var(--text-color);
					}
				}
			}
		}
	}
`;
