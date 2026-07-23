import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? styles.active
                            : styles.link
                    }
                >
                    Мои рецепты
                </NavLink>


                <NavLink
                    to="/public-recipes"
                    className={({ isActive }) =>
                        isActive
                            ? styles.active
                            : styles.link
                    }
                >
                    Рецепты из API
                </NavLink>


                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive
                            ? styles.active
                            : styles.link
                    }
                >
                    Продукты
                </NavLink>

            </nav>
        </header>
    );
}

export default Header;