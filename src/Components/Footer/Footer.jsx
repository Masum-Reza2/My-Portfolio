
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-orange-400 text-white">
            <aside>
                <p>Copyright © {currentYear} - All right reserved by Masum Reza</p>
            </aside>
        </footer>
    )
}

export default Footer