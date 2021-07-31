import headerStyles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}> 
                <span>News</span> Stores
            </h1>
            <p>We are your plug for any news around the wprld </p>
        </div>
    )
}

export default Header
