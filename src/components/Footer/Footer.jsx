import { useRef } from "react";
import { Tooltip as ReactToolTip } from "react-tooltip";
import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";
import "../../index.css";
import { FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";

const herosection = "#hero-section";
const iconStyle = { color: "var(--text-color)", fontSize: "4rem" };
const socialLinks = [
	{
		url: "https://soundcloud.com/wuka7healpha/sets/rigel-933478488",
		text: <FaSoundcloud style={iconStyle} />,
		ariaLabel: "sound cloud icon to channel",
		tooltip: "Sound cloud",
	},
	{
		url: "https://instagram.com/denwuka",
		text: <FaInstagram style={iconStyle} />,
		ariaLabel: "Instagram icon to channel",
		tooltip: "Instagram",
	},
	{
		url: "https://www.youtube.com/channel/UCti39pqcX9znmY2QPsM9rSw",
		ariaLabel: "YouTube icon to channel",
		text: <FaYoutube style={iconStyle} />,
		tooltip: "YouTube",
	},
];
function Foot({ url, ariaLabel, text, tooltip }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "0.75 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<Footer id="footer">
			<motion.div
				className="footer-text__container"
				ref={ref}
				style={{ scale: scaleProgress, opacity: opacityProgress }}
			>
				{/* <div className="footer-text__container"> */}
				<a className="back-to-top-btn" href={herosection}>
					Back to top
				</a>

				<dl>
					<dt>
						<h3>Follow Wuka</h3>
					</dt>
					<dd>
						<ul>
							{socialLinks.map((link) => (
								<li key={link.tooltip}>
									<a
										href={link.url}
										aria-label={link.ariaLabel}
										target="_blank"
										rel="noreferrer noopener"
										data-tooltip-id={link.tooltip}
										data-tooltip-content={link.tooltip}
										data-tooltip-place
									>
										{link.text}
									</a>
									<ReactToolTip id={link.tooltip} place="bottom-end" />
								</li>
							))}
						</ul>
					</dd>
				</dl>

				<blockquote>
					<p>"Music is the universal language of mankind." </p>
					<br />
					<small>Henry Wadsworth Longfellow</small>
				</blockquote>
			</motion.div>
			<small className="attribute">
				{" "}
				Designed by{" "}
				<a
					href="https://twitter.com/iamthebuilder__"
					target="_blank"
					aria-label="link to website developer"
				>
					The Builder
				</a>{" "}
			</small>
		</Footer>
	);
}

export default Foot;

const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: var(--dark-color);
	width: 100%;
	height: 100vh;

	.footer-text__container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;

		@media (max-width: 900px) {
			margin: var(--spacing-10) 0;
		}

		@media (max-width: 500px) {
			padding-left: var(--spacing-2);
			padding-right: var(--spacing-2);
		}

		.back-to-top-btn {
			font-size: var(--medium-fs);
			margin-bottom: var(--spacing-2);
			background-color: var(--dark-pink-color);
			color: #ffffff;
			padding: var(--spacing-2);
		}

		blockquote {
			text-align: center;
			color: var(--text-color);
			p {
				font-size: var(--semi-medium-fs);
			}
		}

		dl {
			dt {
				h3 {
					text-transform: uppercase;
					margin: 3rem 0;
					font-weight: 600;
					color: var(--text-color);
					text-align: center;
					text-transform: uppercase;
					letter-spacing: 0.03em;
					text-shadow: -0.09em 0 0 #f22613, 0.09em 0 0 #02a9be;
					font-size: var(--semi-extra-large-fs);
					text-align: center;

					@media (max-width: 1240px) {
						font-size: var(--mid-large-fs);
					}

					@media (max-width: 1050px) {
						font-size: var(--large-fs);
					}

					@media (max-width: 500px) {
						font-size: var(--mid-extra-large-fs);
					}
				}
			}

			dd {
				ul {
					display: flex;
					justify-content: center;
					list-style: none;
					padding-bottom: var(--spacing-10);

					li {
						list-style: none;
						padding: 0 1rem;
					}
				}
			}
		}
	}

	.attribute {
		width: 100%;
		padding: var(--spacing-1) 0;
		color: var(--text-color);
		background-color: var(--mid-dark-color);
		text-align: center;
		font-size: var(--default-fs);

		a {
			text-decoration: underline;
			color: var(--text-color);
		}
	}
`;
