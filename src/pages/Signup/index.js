import React, { useState } from 'react'
import './signup.css';
import Icon from '../../assets/images/icon.png'
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Signup() {
  
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [firstStep, setFirstStep] = useState(false);

  return (
    <div className="body-signup">
      <div className="formdata-signup">
        {firstStep == false && <>
          <img className='logo' src={Icon}/>
          <Input className="input-nome" placeholder="Nickname" id="nome" formater={setNome} value={nome} maxlength={"14"}/>
          <Input className="input-email" placeholder="Email" id="email" formater={setEmail} value={email} maxlength={"14"}/>
          <Input className="input-email" placeholder="Phone number" id="telefone" formater={setTelefone} value={telefone} maxlength={"14"}/>
          <Button/>
          </>
        }
      </div>
    </div>
  )
}
