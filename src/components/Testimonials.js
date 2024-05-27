import styles from "./Testimonials.module.css";
import PropTypes from "prop-types";
import play from '../images/play.svg';
import dance from '../images/dance.jpg'
import quote from '../images/quote.svg'

const Testimonials = ({ className = "" }) => {
    return (
        <section className={[styles.testimonials, className].join(" ")}>
            <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.proximitySensor}>
                    <img
                        className={styles.quoteIcon}
                        loading="lazy"
                        alt=""
                        src={quote}
                    />
                    <div className={styles.testimonialsWrapper}>
                        <b className={styles.testimonials1}>Testimonials</b>
                    </div>
                </div>
                <div className={styles.canvasCanvaser}>
                    <p className={styles.inAFast}>
                        In a fast growing and ever changing city like Bangalore, it
                        sometimes becomes very difficult to find or connect with like minded
                        people. Websites like hobbycue.com is a great service which helps me
                        get in touch with, communicate, connect, and exchange ideas with
                        other dancers. It also provides the extra benefit of finding
                        products and services that I can avail, which I can be assured is
                        going to be of great quality as it comes recommended by people of
                        the hobbycue community. To have discussions, to get visibility, and
                        to be able to safely explore various hobbies and activities in my
                        city, all under one roof, is an excellent idea and I highly
                        recommend it.
                    </p>
                    <div className={styles.iconicIndicator}>
                        <div className={styles.audioTrack}>
                            <div className={styles.audioTrackChild} />
                            <div className={styles.blendBlender}>
                                <div className={styles.blendBlenderChild} />
                                <img
                                    className={styles.playArrowBlack24dp1Icon}
                                    loading="lazy"
                                    alt=""
                                    src={play}
                                />
                            </div>
                            <div className={styles.audioTrackItem} />
                            <img
                                className={styles.audioTrackInner}
                                loading="lazy"
                                alt=""
                                src={dance}
                            />

                            <div className={styles.transformationTransformer}>
                                <div className={styles.durationBackground}>
                                    <div className={styles.dataSource} />
                                </div>
                                <div className={styles.div}>0:00</div>
                            </div>
                        </div>
                        <div className={styles.containerContainer}>
                            <img
                                className={styles.containerContainerChild}
                                loading="lazy"
                                alt=""
                                src={dance}
                            />
                            <div className={styles.authorDetailsContainer}>
                                <div className={styles.blendBlending}>
                                    <b className={styles.shubhaNagarajan}>Shubha Nagarajan</b>
                                    <div className={styles.classicalDancer}>Classical Dancer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonials.propTypes = {
    className: PropTypes.string,
};

export default Testimonials;