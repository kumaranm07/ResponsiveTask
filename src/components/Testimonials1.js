import styles from "./Testimonials1.module.css";
import PropTypes from "prop-types";
import add from '../images/add.svg'

const Testimonials1 = ({ className = "" }) => {
    return (
        <section className={[styles.testimonials, className].join(" ")}>
            <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.areYouA}>
                    Are you a teacher or expert? Do you sell or rent out equipment, venue
                    or event tickets? Or, you know someone who should be on hobbycue? Go
                    ahead and Add your Own page
                </div>
                <div className={styles.addYourOwn}>Add your own</div>
                <img className={styles.addIcon} alt="" src="" />
                <div className={styles.addNewWrapper}>
                    <div className={styles.addNew}>Add new</div>
                </div>
            </div>
            <div className={styles.testimonials1}>
                <div className={styles.valueTransformerParent}>
                    <div className={styles.valueTransformer} />
                    <div className={styles.inputSplitter}>
                        <div className={styles.addParent}>
                            <img className={styles.addIcon1} alt="" src={add} />
                            <div className={styles.addLabel}>
                                <h2 className={styles.addYourOwn1}>Add your own</h2>
                            </div>
                        </div>
                        <p className={styles.areYouA1}>
                            Are you a teacher or expert? Do you sell or rent out equipment,
                            venue or event tickets? Or, you know someone who should be on
                            hobbycue? Go ahead and Add your Own page
                        </p>
                        <div className={styles.inputSelector}>
                            <b className={styles.addNew1}>Add new</b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonials1.propTypes = {
    className: PropTypes.string,
};

export default Testimonials1;