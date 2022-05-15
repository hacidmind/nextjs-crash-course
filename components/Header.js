import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className='title'><span>TechStudio</span>Academy</h1>
            <style jsx>
                {`
                 .title{
                     color: red
                 }
                `}
            </style>
            <h1 className={headerStyles.title}>Web Developement</h1>
            <p className={headerStyles.description}>Keep up to date with the latest news</p>
        </div>
    );
}

export default Header;
