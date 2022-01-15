import React,{useContext} from 'react'
import Context from '../Context';
import Cards from './Cards';
import Products from './Products';
import Slider from './Slider';
export default function Content() {
    
    const {sOpen,setSOpen} = useContext(Context);

    return (
        <div className={`content g-20 flex flex-col ${sOpen ? 'sidebar-active' :""}`}>
          <Cards/>
          <Slider/>
          <Products/>
        </div>
    )
}
