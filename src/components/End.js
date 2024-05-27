import styles from "./End.module.css";
import PropTypes from "prop-types";
import uparrow from '../images/uparrow.svg'
import img3 from '../images/img3.svg';
import img4 from '../images/img4.svg'

const End = ({ className = "" }) => {
    return (
        <div className={[styles.end, className].join(" ")}>
            <div className={styles.endChild} />
            <div className={styles.shapeShifterShift}>
                <h1 className={styles.yourHobbyYourContainer}>
                    <span>{`Your `}</span>
                    <span className={styles.hobby}>Hobby</span>
                    <span>{`, Your `}</span>
                    <span className={styles.community}>Community...</span>
                </h1>
                <div className={styles.labelLabelerLayout}>
                    <div className={styles.labelLabelerLayoutInner}>
                        <div className={styles.frameParent}>
                            <div className={styles.frameWrapper}>
                                <div className={styles.getStartedWrapper}>
                                    <b className={styles.getStarted}>Get started</b>
                                </div>
                            </div>
                            <div className={styles.wrapperGroup77}>
                                <img
                                    className={styles.wrapperGroup77Child}
                                    loading="lazy"
                                    alt=""
                                    src={uparrow}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goToTopCtrlhomeWrapper}>
                        <div className={styles.goToTop}>Go to top (Ctrl+Home)</div>
                    </div>
                </div>
            </div>
            <div className={styles.effectEnhancerEnhanceParent}>
                <div className={styles.effectEnhancerEnhance}>
                    <img
                        className={styles.discountIcon}
                        loading="lazy"
                        alt=""
                        src={img3}
                    />
                </div>
                <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src={img4}
                />
            </div>
        </div>
    );
};

End.propTypes = {
    className: PropTypes.string,
};

export default End;