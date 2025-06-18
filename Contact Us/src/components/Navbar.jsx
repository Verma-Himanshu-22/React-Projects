
import styles from './Navbar.module.css'
function Navbar() {
  return (
     <nav className={`${styles.nav} container`}>
         <div>
           <img src="/images/Frame.png" alt="Frame img" />
         </div>

         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
     </nav>
  )
}

export default Navbar