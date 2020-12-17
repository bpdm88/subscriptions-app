import logoIcon from '../assets/icons/logo.svg';

const Header = () => (
    <header>
        <div>
        <img className="logo-svg" src={ logoIcon } alt="My Subscriptions Logo"/>
        </div>
        <ul>
            <li>API Documents</li>
        </ul>
    </header>
);

export default Header;
