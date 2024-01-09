import './styling.css';

function Castle() {

    return (
        <div className="outer-container">
            <div className="title">Game Title Here</div>
            <div className="container-main">
                <div className="card">
                    Name, Class, Weapon, Life Bar, Money, Stats
                </div>
                <div className="display">Display messages here</div>
                <div className="inner-display">special messages here</div>
                <div className="btn-container">
                    <button>button</button>
                    <button>button</button>
                    <button>button</button>
                    <button>button</button>
                    <button>button</button>
                    <button>button</button></div>
            </div>
        </div>
    );
}

export default Castle;