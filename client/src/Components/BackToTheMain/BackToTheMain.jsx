import './BackToTheMain.scss'

import iconSrc from './img/img.svg';

const BackToTheMain = () => {
    return (
        <div className="wrapper">
            <div className="icon">
                <img src={iconSrc} alt="icon" />
            </div>
            <p>Back to the <br /> main</p>
        </div>
    );
}

export default BackToTheMain;