import styles from "./Footer.module.css";
import PropTypes from "prop-types";
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import insta from '../images/insta.svg';
import pinterest from '../images/pinterest.svg';
import gplus from '../images/google+.svg';
import ytube from '../images/youtube.svg';
import inbox from '../images/inbox.svg';
import message from '../images/message.svg'

const Footer = ({ className = "" }) => {
    return (
        <div className={[styles.footer, className].join(" ")}>
            <div className={styles.footerChild} />
            <div className={styles.footerInner}>
                <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                        <div className={styles.hobbycueParent}>
                            <b className={styles.hobbycue}>Hobbycue</b>
                            <a className={styles.aboutUs}>About Us</a>
                        </div>
                        <div className={styles.howDoIParent}>
                            <b className={styles.howDoI}>How Do I</b>
                            <div className={styles.signUp}>Sign Up</div>
                        </div>
                        <div className={styles.quickLinksParent}>
                            <b className={styles.quickLinks}>Quick Links</b>
                            <div className={styles.listings}>Listings</div>
                        </div>
                        <div className={styles.socialMediaParent}>
                            <b className={styles.socialMedia}>Social Media</b>
                            <div className={styles.frameContainer}>
                                <img
                                    className={styles.frameChild}
                                    loading="lazy"
                                    alt=""
                                    src={facebook}
                                />
                                <img
                                    className={styles.frameItem}
                                    loading="lazy"
                                    alt=""
                                    src={twitter}
                                />
                                <img
                                    className={styles.frameInner}
                                    loading="lazy"
                                    alt=""
                                    src={insta}
                                />
                                <img
                                    className={styles.groupIcon}
                                    loading="lazy"
                                    alt=""
                                    src={pinterest}
                                />
                                <img
                                    className={styles.frameChild1}
                                    loading="lazy"
                                    alt=""
                                    src={gplus}
                                />
                                <img
                                    className={styles.frameChild2}
                                    loading="lazy"
                                    alt=""
                                    src={ytube}
                                />
                                <img
                                    className={styles.frameChild3}
                                    loading="lazy"
                                    alt=""
                                    src={message}
                                />
                                <img
                                    className={styles.frameChild4}
                                    alt=""
                                    src={inbox}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.frameDiv}>
                        <div className={styles.ourServicesParent}>
                            <div className={styles.ourServices}>Our Services</div>
                            <div className={styles.workWithUs}>Work with Us</div>
                            <a className={styles.faq}>FAQ</a>
                            <div className={styles.contactUs}>Contact Us</div>
                        </div>
                        <div className={styles.addAListingParent}>
                            <div className={styles.addAListing}>Add a Listing</div>
                            <div className={styles.claimListing}>Claim Listing</div>
                            <div className={styles.postAQuery}>Post a Query</div>
                            <div className={styles.addABlog}>Add a Blog Post</div>
                            <div className={styles.otherQueries}>Other Queries</div>
                        </div>
                        <div className={styles.blogPostsParent}>
                            <div className={styles.blogPosts}>Blog Posts</div>
                            <div className={styles.shopStore}>Shop / Store</div>
                            <div className={styles.community}>Community</div>
                        </div>
                        <div className={styles.inviteContainer}>
                            <div className={styles.inviteFriendsParent}>
                                <b className={styles.inviteFriends}>Invite Friends</b>
                                <div className={styles.rectangleParent}>
                                    <div className={styles.rectangleDiv} />
                                    <div className={styles.emailField}>
                                        <div className={styles.emailId}>Email ID</div>
                                    </div>
                                    <div className={styles.rectangleGroup}>
                                        <div className={styles.frameChild5} />
                                        <b className={styles.invite}>Invite</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles.rectangleContainer}>
                <div className={styles.frameChild6} />
                <div className={styles.purpleCuesPrivate}>
                    © Purple Cues Private Limited
                </div>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;