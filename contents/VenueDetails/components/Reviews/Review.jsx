import classNames from "classnames/bind";
import Image from "next/image";
// components
import { RatingComponent } from "..";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);


const Review = () => {
	const rate = 4.2;
	const myLoader=({src})=>{
		return `https://via.placeholder.com/128x128.png`;
	  }
	return (
		<>
		<div className={cx("review-wrapper")}>
			<div className={cx("profile-picture")}>
				<Image loader={myLoader} src={"https://via.placeholder.com/128x128.png"} alt="..." width="100%" height="100%"/>
			</div>
			<div>
				<div className={cx("name")}>Angela</div>
				<RatingComponent className={cx("rating")} rate={rate} />
				<div className={cx("date")}>12 Jan, 2020 04:30PM</div>
				<p className={cx("review-text")}>
					adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
				</p>
				
			</div>
		</div>
		<a className={cx("view-all-btn")} href="#">
		View All Reviews
	</a>
	</>
	)
}

export default Review;