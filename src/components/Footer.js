import Logo from  '../images/logoonly.png';

const Footer = () => {
    return (
        <>
        <div class="footerlogo">
            <img src={Logo} alt="Logo" name="logofooter" id="logofooter"/>
        </div>

        <div class="copyright">
            Copyright © 2024
        </div>
        </>
    );

};

export default Footer;