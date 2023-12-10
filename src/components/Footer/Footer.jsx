import { React, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import styled from "styled-components";
import "../../index.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import wukaFooterImg from "../../assets/img/wuka-footer.jpg";

function Foot() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.25 1"],
	});
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

				<motion.section
					className="follow"
					ref={ref}
					style={{
						scale: scrollYProgress,
						opacity: scrollYProgress,
					}}
				>
					<blockquote>
						<p>"Music is the universal language of mankind." </p>
						<br />
						<small>Henry Wadsworth Longfellow</small>
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
				</motion.section>
			</div>
		</Footer>
	);
}

export default Foot;

const iconStyle = { color: "white", fontSize: "4rem" };
const Footer = styled.footer`
	.container {
		width: 100%;
		display: flex;
		align-items: center;
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
			/* padding-top: 20px; */
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			/* background-color: #349999; */

			> h3 {
				text-transform: uppercase;
				margin: 3rem 0;
				font-size: var(--medium-fs);
				font-weight: 600;
				color: var(--text-color);
				text-align: center;
				text-transform: uppercase;
				letter-spacing: 0.03em;
				text-shadow: -0.09em 0 0 #f22613, 0.09em 0 0 #02a9be;
				font-size: var(--extra-large-fs);

				text-align: center;
			}

			blockquote {
				text-align: center;
				p {
					font-size: var(--semi-medium-fs);
				}
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
						text-decoration: underline;
						color: var(--text-color);
					}
				}
			}
		}
	}
`;
