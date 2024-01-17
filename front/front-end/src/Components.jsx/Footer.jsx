import React from "react";
import { Link } from "react-router-dom";

export default function MyFooter() {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-5">
            <div className="container">
                <p>&copy; 2024 ENS Rabat. All rights reserved.</p>
                <p>
                    <Link to="#">Terms of Service</Link>|
                    <Link to="#">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    );
}
