import { Link } from 'react'
import './Header.css'
export function Header() {
    return (
        <div className="header-bar">
            <div className="app-name">TO DO LIST</div>
            <div className="authentication">
                <a href="index.html" className="login-button">
                    Login
                </a>
                <a href="index.html" className="signup-button">
                    SignUp
                </a>
                
            </div>
        </div>
    );
}