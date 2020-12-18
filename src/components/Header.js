import logoIcon from '../assets/icons/logo.svg';

const Header = () => (
    <header>
        <div>
        <img className="logo-svg" src={ logoIcon } alt="My Subscriptions Logo"/>
        </div>
        <ul>
            <li><a href="https://github.com/ammersive/subscription-tracker-bk/blob/main/README.md" target="_blank" rel="noreferrer">About</a></li>
        </ul>
    </header>
);

export default Header;
