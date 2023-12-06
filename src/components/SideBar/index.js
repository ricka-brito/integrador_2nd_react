import React, {useState} from 'react';
import './sidebar.css';
import { IoMdClose } from "react-icons/io";
import Input from "../Input";
import QRcode from '../../assets/images/qrcode.png'
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../util/Context';
import { useContext } from 'react';

export default function SideBar({sidebaractive, setBar}) {
    const [cpf, setCpf] = useState()
    const navigate = useNavigate();
    const [sideBarState, setSideBarState] = useState();
    const theContext = useContext(GlobalContext);
    const { setState } = theContext;

    function formataCPF(cpf){
        //retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, "");
        
        //realizar a formatação...
          setCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));
      }
    return (
        <div className={sidebaractive ? 'sidebar-all' : ''} style={{width:sidebaractive ? '100%' : '0', height: sidebaractive ? "100%" : "0"}}>
            <div className={sidebaractive === true ? 'sidebar' : sidebaractive === false ? 'sidebarclose': ''}>
                <div className="sidebar-content">
                    <div className="close-div" onClick={() => setBar(false)}>
                        <p className="closetext">CLOSE&nbsp;&nbsp;</p>
                        <IoMdClose className="close" size={20}/>
                    </div>
                    <h1 className="title-sidebar">...Ready for it?</h1>
                    <h3 style={{fontWeight: 400, marginBottom: "3%", color: "#ddd"}}>Type your CPF</h3>
                    <Input placeholder="CPF" id="cpf" formater={formataCPF} value={cpf} maxlength={"14"}/>
                    <Button buttonText="continue"
                     onClick={() => {
                        setState({cpf: cpf})
                        navigate('/signup')
                        }}/>
                    
                    <div className="separator">
                        <div className="linea"/>
                        <p>OR</p>
                        <div className="linea"/>
                    </div>
                    <img className="otheroption" src={QRcode}/>
                    <h3 className="qrdesc">Scan the QR code to download the APP and create your account</h3>
                </div>
            </div>
        </div>
    )
}
