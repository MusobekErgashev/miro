import React from 'react'
import styles from "./header.module.css"
import logo from "../../assets/icons/logo.png"
import langIcon from "../../assets/icons/lang-header.png"

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.headerLinks}>
                <a href="#">
                    <li>
                        <img src={logo} alt="" />
                    </li>
                </a>

                <a href="#">
                    <li>Product</li>
                </a>

                <a href="#">
                    <li>Solutions</li>
                </a>

                <a href="#">
                    <li>Resources</li>
                </a>

                <a href="#">
                    <li>Enterprise</li>
                </a>

                <a href="#">
                    <li>Pricing</li>
                </a>
            </ul>

            <ul className={styles.loginPanel}>
                <li>
                    <img src={langIcon} alt="" />
                    EN
                </li>

                <a href="#">
                    <li>Contact Sales</li>
                </a>

                <a href="#">
                    <li>Login</li>
                </a>

                <a href="">
                    <button>Sign up free →</button>
                </a>
            </ul>
        </div>
    )
}

export default Header