import { useState, useEffect } from "react";
import Home from './home'
import Loading from './loading'

const Index = () => {
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMainContent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Loading />
            <Home showMainContent={showMainContent} />
        </div>
    );
};

export default Index;

