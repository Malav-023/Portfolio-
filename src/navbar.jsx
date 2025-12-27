import { useEffect, useRef } from "react";

function MainHeading() {
    return (
        <h1 className="MainHeading">Malav R Naik</h1>
    );
}

function NavBor() {

    const toggleRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const togglee = toggleRef.current;
        const menu = menuRef.current;

        const handleClick = () => {
            togglee.classList.toggle("active");
            menu.classList.toggle("active");
        };

        togglee.addEventListener("click", handleClick);
        return () => togglee.removeEventListener("click", handleClick);
    }, []);


    return (
        <nav className="nv">
            <button ref={toggleRef} className="navbar-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul ref={menuRef} className="mainnavbar">
                <li><a href="#About">About</a></li>
                <li><a href="#Work">Work</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default function NavBar() {
    return (
        <section className="Navbar">
            <MainHeading />
            <NavBor />
        </section>
    );
}