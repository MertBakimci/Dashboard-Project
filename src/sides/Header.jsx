import React, { useContext } from 'react'
import { BiMenuAltLeft,BiX } from 'react-icons/bi'
import Context from '../Context'

export default function Header() {

    const {sOpen,setSOpen} = useContext(Context);

    return (
        <div className="header w-100">
            <button onClick={() => setSOpen(!sOpen)}>
                {sOpen ? <BiX/>:<BiMenuAltLeft/>}
            </button>
        </div>
    )
}
