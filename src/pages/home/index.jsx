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
            {/* loading 動畫 */}
            {!showMainContent && <Loading />}
            {/* Home 一直都在，只是 loading 時隱藏 */}
            <div style={{
                opacity: showMainContent ? 1 : 0,
                transition: 'opacity 0.5s'
            }}>
                <Home />
            </div>
        </div>
    );
};

export default Index;

