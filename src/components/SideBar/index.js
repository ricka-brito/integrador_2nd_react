import React, {useState} from 'react';
import './sidebar.css';
import { IoMdClose } from "react-icons/io";
import Input from "../Input";
import QRcode from '../../assets/images/qrcode.png'
import Button from "../../components/Button";

export default function SideBar({sidebaractive, setBar}) {
    const [cpf, setCpf] = useState()


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
                    <h2 style={{fontWeight: 500, marginBottom: "3%"}}>Type your CPF</h2>
                    <Input placeholder="CPF" id="cpf" formater={formataCPF} value={cpf} maxlength={"14"}/>
                    <Button/>
                    
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
