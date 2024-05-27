import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import bag from '../images/bag.svg';
import task from '../images/task.svg';
import group from '../images/group.svg';
import location from '../images/location.svg';
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
    return (
        <section className={[styles.feature1Wrapper, className].join(" ")}>
            <div className={styles.feature1}>
                <div className={styles.feature1Child} />
                <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                        <GroupComponent
                            className={`${styles.groupComponent} ${styles.people}`}
                            groupsBlack24dp11={group}
                            people="People"
                            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                            connect="Connect"
                        />
                        <GroupComponent
                            className={`${styles.groupComponent} ${styles.place}`}
                            groupsBlack24dp11={location}
                            people="Place"
                            findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
                            connect="Meet up"
                            propGap="32px"
                            propMinWidth="67px"
                            propPadding="var(--padding-3xs) var(--padding-12xl)"
                            propMinWidth1="58px"
                        />
                    </div>
                    <div className={styles.frameContainer}>
                        <GroupComponent
                            className={`${styles.groupComponent} ${styles.product}`}
                            groupsBlack24dp11={bag}
                            people="Product"
                            findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
                            connect="Get it"
                            propGap="32px"
                            propMinWidth="96px"
                            propPadding="var(--padding-3xs) var(--padding-22xl)"
                            propMinWidth1="38px"
                        />
                        <GroupComponent
                            className={`${styles.groupComponent} ${styles.program}`}
                            groupsBlack24dp11={task}
                            people="Program"
                            findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
                            connect="Attend"
                            propGap="59px"
                            propMinWidth="107px"
                            propPadding="var(--padding-3xs) var(--padding-16xl)"
                            propMinWidth1="49px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

FrameComponent.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent;
