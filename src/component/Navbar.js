import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import { useNavigate, useLocation} from 'react-router-dom'

const Navbar = () => {
    const[search , setSearch]=useState('')
    const sendata =()=>{
        if(!search){
            window.alert('plzz fill the fields properly')
        }
        else{
            navigate(`/search/${search}`)
            window.location.reload()
        }

    }
    const style1={
        backgroundColor: '#db79c5',
        color: 'white',
        height: '2rem',
        width: '4.5rem',
        textAlign:'center',
        borderRadius: '0.4rem',
        fontWeight: '600',
        fontSize: '1.2rem'

    }
    const style2={
        backgroundColor: 'rgb(171 194 229 / 28%)',
        color: 'black',
        height: '2rem',
        width: '4.5rem',
        textAlign:'center',
        borderRadius: '0.4rem',
        fontWeight: '600',
        fontSize: '1.2rem'
    }
    const [dis, setDis] = useState({})
    const [dis1, setDis1] = useState({})
    const [dis2, setDis2] = useState([])
    const location = useLocation()
    const route = location.pathname
    const navigate = useNavigate()
    useEffect(()=>{
       if(route==='/sports'){
           setDis(style1)
           setDis1(style2)
           setDis2(style2)
       }
       else if(route==='/finance'){
        setDis2(style1)
        setDis1(style2)
        setDis(style2)
       }
       else if(route==='/health'){
        setDis1(style1)
        setDis2(style2)
        setDis(style2)
       }
       else{
        setDis(style2)
        setDis1(style2)
        setDis2(style2)
       }
    console.log(route);
    },[route])
    return (
        <div className='mainconnav'>
            <div className="header">
                <div className='firstcon'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Newshub_logo.svg/1200px-Newshub_logo.svg.png" alt="" onClick={()=>navigate('/')} />
                </div>
                <div className="secondcon">
                    <div onClick={()=>navigate('/sports')} style={dis}>Sports</div>
                    <div onClick={()=>navigate('/health')}  style={dis1}>Health</div>
                    <div onClick={()=>navigate('/finance')} style={dis2}>Finance</div>
                </div>
                <div className='thirdcon'>
                    <div className="searchbox">
                        <div>
                            <input type="text" placeholder='Eg. sports , finance' onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={sendata}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
