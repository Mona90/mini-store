import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Products from '../../Components/Products/Products'
import Slider from '../../Components/Slider/Slider'


const Home = () => {
   const [showMenu, setShowMenu] = useState(false)
    
    // console.log(showMenu)
  return (
    <div style={{...styles.mainStyle,paddingLeft:showMenu? '200px':'0'}}>
        <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
        <div className='side-menu' style={{...styles.menuStyle,left:showMenu? '0':'-200px'}}></div>
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}
const styles = {
  mainStyle:{
    position:'relative',
    overflowX: 'hidden',
    transition:'all 0.3s ease-in-out'
  },
  menuStyle:{
    position:'absolute', top:0, height:'100%', width:'200px',
    transition:'all 0.3s ease-in-out'
  }
}
export default Home