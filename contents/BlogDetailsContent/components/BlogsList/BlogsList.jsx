import classNames from "classnames/bind";
import styles from "./components/EventSlider/styles.module.scss";

const cx = classNames.bind(styles);

// components
import Header from './components/Header/Header';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Feedback from './components/Feedback/Feedback';
import EventSlider from './components/EventSlider/EventSlider';

const BlogsList = ({blogsList}) => {
  return (
    <div>
      <Header />
      {blogsList.map((blog,index)=>(<BlogDetails key={index} index={index} blog={blog}/> ))}
      <EventSlider  className={cx("event-slider-root")}
          heading=""
          count={5}/>
      <Feedback />
    </div>
  );
};

export default BlogsList;
