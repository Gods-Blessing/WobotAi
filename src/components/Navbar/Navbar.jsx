import './Navbar.css';


export default function Navbar(){
    return(
        <nav className='nav-container'>
            <div>
                <h1>Ur Meal</h1>
            </div>

            <div className='nav-profile-div'>
                <img src="" alt="" />
                <div>
                    <h2>Username...</h2>
                </div>
            </div>
        </nav>
    )
}