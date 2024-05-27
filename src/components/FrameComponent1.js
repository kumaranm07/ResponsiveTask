import styles from "./FrameComponent1.module.css";
import search from "../images/icons8-search.svg"
import logo from '../images/logo.jpg';
import star from '../images/star.svg';
import polygon from '../images/polygon.svg';
import favourite from '../images/favourite.svg'
import explore from '../images/explore.svg';
import expand_arrow from '../images/expand-arrow.svg';
import notify from '../images/notify.svg';
import cart from '../images/cart.svg'
import PropTypes from "prop-types";


const FrameComponent1 = ({ className = "" }) => {
    return (
        <div className={[styles.navbarWrapper, className].join(" ")}>
            <header className={styles.navbar}>
                <div className={styles.container} />
                <div className={styles.hobbycueLogoParent}>
                    <img
                        className={styles.hobbycueLogoIcon}
                        loading="lazy"
                        alt=""
                        src={logo}
                    />
                    <div className={styles.searchboxWrapper}>
                        <div className={styles.searchbox}>
                            <div className={styles.searchboxChild} />
                            <div className={styles.searchHereWrapper}>
                                <a className={styles.searchHere}>Search here...</a>
                            </div>
                            <div className={styles.rectangleParent}>
                                <div className={styles.frameChild} />
                                <img
                                    className={styles.icons8Search1}
                                    alt=""
                                    src={search}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navbarInner}>
                    <div className={styles.frameParent}>
                        <div className={styles.frameWrapper}>
                            <div className={styles.exploreParent}>
                                <img className={styles.exploreIcon} alt="" src={explore} />
                                <div className={styles.exploreWrapper}>
                                    <a className={styles.explore}>Explore</a>
                                </div>
                                <img
                                    className={styles.icons8ExpandArrow1}
                                    alt=""
                                    src={expand_arrow}
                                />
                            </div>
                        </div>
                        <div className={styles.frameContainer}>
                            <div className={styles.frameGroup}>
                                <div className={styles.hobbiesParent}>
                                    {/* <img
                                        className={styles.hobbiesIcon}
                                        alt=""
                                        src=""
                                    /> */}
                                    <div className={styles.hobbies}>
                                        <img
                                            className={styles.hobbiesChild}
                                            alt=""
                                            src={polygon}
                                        />
                                        <img
                                            className={styles.hobbiesItem}
                                            alt=""
                                            src={star}
                                        />
                                    </div>
                                </div>
                                <div className={styles.hobbiesWrapper}>
                                    <a className={styles.hobbies1}>Hobbies</a>
                                </div>
                                <img
                                    className={styles.icons8ExpandArrow11}
                                    alt=""
                                    src={expand_arrow}
                                />
                            </div>
                        </div>
                        <div className={styles.bookmarkBlack24dp1Wrapper}>
                            <img
                                className={styles.bookmarkBlack24dp1Icon}
                                loading="lazy"
                                alt=""
                                src={favourite}
                            />
                        </div>
                        <div className={styles.notificationsBlack24dp1Wrapper}>
                            <img
                                className={styles.notificationsBlack24dp1Icon}
                                loading="lazy"
                                alt=""
                                src={notify}
                            />
                        </div>
                        <div className={styles.product3Wrapper}>
                            <img
                                className={styles.product3Icon}
                                alt=""
                                src={cart}
                            />
                        </div>
                        <div className={styles.groupDiv}>
                            <div className={styles.rectangleGroup}>
                                <div className={styles.frameItem} />
                                <a className={styles.signIn}>Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

FrameComponent1.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent1;