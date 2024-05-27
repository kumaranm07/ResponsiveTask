import styles from "./HomeScreen.module.css";
import PropTypes from "prop-types";
import google from '../images/google.svg';
import lock from '../images/lock.svg'
import facebook from '../images/facebook.svg';
import eye from '../images/eye.svg';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';

const HomeScreen = ({ className = "" }) => {
    return (
        <section className={[styles.homeScreen, className].join(" ")}>
            <div className={styles.homeScreen1}>
                <div className={styles.homeScreenChild} />
                <div className={styles.frameParent}>
                    <div className={styles.exploreYourHobbyOrPassionParent}>
                        <h1 className={styles.exploreYourHobbyContainer}>
                            <span>Explore your</span>
                            <span className={styles.hobby}> hobby</span>
                            <span>{` or `}</span>
                            <span className={styles.passion}>passion</span>
                        </h1>
                        <div className={styles.signInToInteractWithAComParent}>
                            <p className={styles.signInToInteract}>
                                Sign-in to interact with a community of fellow hobbyists and an
                                eco-system of experts, teachers, suppliers, classes, workshops,
                                and places to practice, participate or perform. Your hobby may
                                be about visual or performing arts, sports, games, gardening,
                                model making, cooking, indoor or outdoor activities…
                            </p>
                            <div className={styles.ifYouAreAnExpertOrASellWrapper}>
                                <p className={styles.ifYouAre}>
                                    If you are an expert or a seller, you can Add your Listing and
                                    promote yourself, your students, products, services or events.
                                    Hop on your hobbyhorse and enjoy the ride.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeImage}>
                        <img
                            className={styles.iconManipulator}
                            loading="lazy"
                            alt=""
                            src={img2}
                        />
                        <img
                            className={styles.iconManipulator1}
                            loading="lazy"
                            alt=""
                            src={img1}
                        />
                    </div>
                </div>
                <div className={styles.homeScreenInner}>
                    <div className={styles.signinjoininParent}>
                        <div className={styles.signinjoinin}>
                            <div className={styles.signInParent}>
                                <b className={styles.signIn}>Sign In</b>
                                <div className={styles.dataAggregator} />
                            </div>
                            <div className={styles.joinInParent}>
                                <b className={styles.joinIn}>Join In</b>
                                <div className={styles.frameChild} />
                            </div>
                        </div>
                        <form className={styles.frameGroup}>
                            <div className={styles.loginWithOtherAccountsParent}>
                                <div className={styles.loginWithOtherAccounts}>
                                    <img className={styles.googleIcon} alt="" src={google} />
                                    <div className={styles.continueWithGoogle}>
                                        Continue with Google
                                    </div>
                                </div>
                                <div className={styles.loginWithOtherAccounts1}>
                                    <img
                                        className={styles.facebookIcon}
                                        alt=""
                                        src={facebook}
                                    />
                                    <div className={styles.continueWithFacebook}>
                                        Continue with Facebook
                                    </div>
                                </div>
                            </div>
                            <div className={styles.connectWithSeparator}>
                                <div className={styles.starFabricatorWrapper}>
                                    <div className={styles.starFabricator} />
                                </div>
                                <div className={styles.orConnectWith}>Or connect with</div>
                                <div className={styles.connectWithSeparatorInner}>
                                    <div className={styles.frameItem} />
                                </div>
                            </div>
                            <div className={styles.inputFieldsParent}>
                                <div className={styles.inputFields}>
                                    <div className={styles.email}>Email</div>
                                </div>
                                <div className={styles.component7}>
                                    <div className={styles.password}>Password</div>
                                    <img
                                        className={styles.passwordIcon}
                                        alt=""
                                        src={eye}
                                    />
                                </div>
                            </div>
                            <div className={styles.options}>
                                <div className={styles.remember}>
                                    <div className={styles.checkbox}>
                                        <div className={styles.borderDesigner} />
                                    </div>
                                    <div className={styles.rememberMe}>Remember me</div>
                                </div>
                                <div className={styles.forgotPassword}>
                                    <img
                                        className={styles.lockBlack24dp1Icon}
                                        alt=""
                                        src={lock}
                                    />
                                    <div className={styles.forgotPassword1}>Forgot password?</div>
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <b className={styles.continue}>Continue</b>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

HomeScreen.propTypes = {
    className: PropTypes.string,
};

export default HomeScreen;