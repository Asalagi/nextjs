import './styling.css';

function Castle() {

    return (
        <div className="container">
            <div className="top">
                This is the top.
            </div>
            <div className="lower-container">
                <div className="side-container">
                    this is a side container
                </div>
                <div className="main-content">
                    This is the main box
                </div>
            </div>
        </div>
    );
}

export default Castle;