import './FooterStyles.css';
function Footer() {
    return (
        <div className="footer">
            <div>
                <h2 className="footer_heading">MY REACT WEBSITE</h2>
            </div>
            <ul className="ul-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Our Blog</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>

        </div>
    )

}
export default Footer;