import { useMemo } from "react";
import styles from "./GroupComponent.module.css";
import PropTypes from "prop-types";

const GroupComponent = ({
    className = "",
    groupsBlack24dp11,
    people,
    findATeacherCoachOrExpert,
    connect,
    propGap,
    propMinWidth,
    propPadding,
    propMinWidth1,
}) => {
    const groupDivStyle = useMemo(() => {
        return {
            gap: propGap,
        };
    }, [propGap]);

    const peopleStyle = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const brandStyle = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const connectStyle = useMemo(() => {
        return {
            minWidth: propMinWidth1,
        };
    }, [propMinWidth1]);

    return (
        <div
            className={[styles.rectangleParent, className].join(" ")}
            style={groupDivStyle}
        >
            <div className={styles.frameChild} />
            <div className={styles.frameParent}>
                <div className={styles.groupsBlack24dp11Parent}>
                    <img
                        className={styles.groupsBlack24dp11}
                        loading="lazy"
                        alt=""
                        src={groupsBlack24dp11}
                    />
                    <div className={styles.peopleWrapper}>
                        <b className={styles.people} style={peopleStyle}>
                            {people}
                        </b>
                    </div>
                </div>
                <p className={styles.findATeacher}>{findATeacherCoachOrExpert}</p>
            </div>
            <div className={styles.brand} style={brandStyle}>
                <b className={styles.connect} style={connectStyle}>
                    {connect}
                </b>
            </div>
        </div>
    );
};

GroupComponent.propTypes = {
    className: PropTypes.string,
    groupsBlack24dp11: PropTypes.string,
    people: PropTypes.string,
    findATeacherCoachOrExpert: PropTypes.string,
    connect: PropTypes.string,

    /** Style props */
    propGap: PropTypes.any,
    propMinWidth: PropTypes.any,
    propPadding: PropTypes.any,
    propMinWidth1: PropTypes.any,
};

export default GroupComponent;