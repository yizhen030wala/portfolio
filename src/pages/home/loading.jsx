import { useState, useEffect } from "react";
import "./loading.scss";

const LoadingComponent = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loadingAnimation ${showLoading ? "show" : ""}`}>
            <p>Jenny Chen</p>
        </div>
    );
};

export default LoadingComponent;
