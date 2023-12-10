import './loading-page.css';
import BounceLoader from "react-spinners/BounceLoader";
function loadingPage(props) {
    const handleAnimationEnd = () => {
        if (props.handleAnimationEnd) {
            props.handleAnimationEnd();
        }
    };
    return (

        <div className="loading-page" onAnimationEnd={handleAnimationEnd}>
            <div style={{ margin: '15px' }}>
                <BounceLoader color="#36D7B7" size={65} speedMultiplier={1.3} />
            </div>
            <h2>InnovaTech Solutions</h2>

        </div>
    );
}

export default loadingPage;