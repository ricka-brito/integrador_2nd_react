import React, { useEffect, useState } from 'react'
import './signup.css';
import Icon from '../../assets/images/icon.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import FilesDragAndDrop from '../../components/DragAndDrop';
import { GlobalContext } from '../../util/Context';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import QRcode from "../../assets/images/qrcode.png";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import API_URL from '../../util/Constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [forthStep, setForthStep] = useState(false);
  const [profit, setProfit] = useState();
  const [file, setFile] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [endStep, setEndStep] = useState(false);
  const theContext = useContext(GlobalContext);
  const [cpf, setCpf] = useState();
  const [cep, setCep] = useState();
  const [street, setStreet] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [city, setCity] = useState();
  const [number, setNumber] = useState();
  const [state, setState] = useState();
  const [sucessefulMessage, setSucessefulMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(theContext.contextState.cpf){
      setCpf(theContext.contextState.cpf)
    }
    else{
      navigate('/')
    }
  }, [])

  const handlePhoneNumberChange = (phone) => {
    let formattedNumber = phone.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (formattedNumber.length <= 2) {
      formattedNumber = formattedNumber.replace(/(\d{1})/, "($1")
    }
    if (formattedNumber.length >= 2 && formattedNumber.length < 7){
      formattedNumber = formattedNumber.replace(/(\d{2})(\d)/, "($1) $2")
    }
    if (formattedNumber.length == 7){
      formattedNumber = formattedNumber.replace(/(\d{2})(\d{4})/, "($1) $2-")
    }
    if (formattedNumber.length > 6 && formattedNumber.length < 10){
      formattedNumber = formattedNumber.replace(/(\d{2})(\d{4})(\d)/, "($1) $2-$3")
    }  
    if (formattedNumber.length >= 11){
      console.log("teste")
      formattedNumber = formattedNumber.replace(/(\d{2})(\d{5})(\d)/, "($1) $2-$3")
    }

    if (formattedNumber.length == 10){
      formattedNumber = formattedNumber.replace(/(\d{2})(\d{4})(\d)/, "($1) $2-$3")

    }


    setTelefone(formattedNumber)
  }

  const formatCep = (cep) => {
    let formattedCep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
    setCep(formattedCep)
  }

  const formatCur = (num) => {
    let value = num
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
    setProfit("R$"+value)
  }

  return (
    <div className="body-signup">
      <Link to="/"><IoMdClose size={50} className='close-sign'/></Link>
      <div className="formdata-signup">
        {firstStep == true && <>
          <img className='logo' src={Icon}/>
          <h3 className='title-sign'>Finish your signup</h3>
          <Input className="input-nome" placeholder="Nickname" id="nome" formater={setNome} value={nome}/>
          <Input type='email'className="input-email" placeholder="Email" id="email" formater={setEmail} value={email}/>
          <Input className="input-email" placeholder="Phone number" id="telefone" formater={handlePhoneNumberChange} value={telefone} maxlength={"15"}/>
          <Button buttonText="continue" className="botao" onClick={() => {
            if(telefone.replace(/\D/g, '').length >= 10){
              setFirstStep(false)
              setSecondStep(true)
            }
            else{
              toast.error('Invalid PHONE', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
          }}/>
          <ToastContainer theme="dark" />
          </>
        }

        {
          secondStep == true && <>
         <img className='logo' src={Icon}/>
         <h3 className='title-sign'>Now we need data of your adress</h3>
         <Input className="input-cep" placeholder="CEP" id="cep" formater={formatCep} value={cep} maxlength={"8"} autofocus={true} onBlur={() => {

          fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json()).then(data => {
            setStreet(data.logradouro)
            setNeighborhood(data.bairro)
            setCity(data.localidade)
            setState(data.uf)
          }
          
          )
         }} />
         <Input className="input-disabled" placeholder="Street" id="street" formater={setStreet} value={street} readonly={true}/>
         <Input className="input-disabled" placeholder="Neighborhood" id="neighborhood" formater={setNeighborhood} value={neighborhood} readonly={true}/>
         <Input className="input-cep" placeholder="House number" id="number" formater={setNumber} value={number}/>      
         <Input className="input-disabled" placeholder="City" id="city" formater={setCity} value={city} readonly={true}/>      
         <Input className="input-disabled" placeholder="State" id="state" formater={setState} value={state} readonly={true}/>      
         <Button buttonText="continue" className="botao"
          onClick={() => {
            if(number){
              setSecondStep(false)
              setThirdStep(true)
            }
            else{
              toast.error('Missing house number', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }

          }}
          />
          <ToastContainer theme="dark" />
          </>

        }
        {
          thirdStep == true && <>
          <img className='logo' src={Icon}/>
          <h3 className='title-sign'>Could you tell us more about your profit</h3>
          <Input className="input-salario" placeholder="What is your monthly profit?" id="profit" formater={formatCur} value={profit} maxlength={"14"}/>
          <p className='letrinhas'>We will not share this data and, and it´s will be used to make a deep credit analylis</p>
          <Button buttonText="continue" className="botao"
          onClick={() => {
            if (Number(profit.replaceAll(".", "").replaceAll(",", ".").replaceAll("R$", "")) > 0.01){
              setThirdStep(false)
              setForthStep(true)
            }
            else {
              toast.error('The declared profit must be greater than R$0,01', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
          }}
          />
          <ToastContainer theme="dark" />
          </>
        }
          
        {
          forthStep == true && <>
          <img className='logo' src={Icon}/>
          <h3 className='title-sign'>Now send us a profile picture:</h3>
          <FilesDragAndDrop className="input-files" fileState={setFile}/>
          <Button buttonText="continue" className="botao"
          onClick={() => {
            if (file){
            setForthStep(false)
            setEndStep(true)
            }
            else {
              toast.error('You must attach a picture', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
          }}
          />
          <ToastContainer theme="dark" />

          </>
        }

        {
          endStep == true && <>
          <img className='logo' src={Icon}/>
          <h3 className='title-sign'>It's time to define your password</h3>

          <Input type="password" className="input-password" placeholder="Set up your password (6 digits)" id="password" formater={setPassword} value={password} maxlength={"6"}/>
          <Input type="password" className="input-password" placeholder="Confirm your password (6 digits)" id="confirmPassword" formater={setConfirmPassword} value={confirmPassword} maxlength={"6"}/>
         <Button buttonText="submit" className="botao"
         onClick={() => {
          if (password == confirmPassword){
            setEndStep(false)
            setSucessefulMessage(true)
  
            const bodya = {
              "email": email,
              "password": password,
              "first_name": nome,
              "cpf": cpf.replaceAll(".", "").replaceAll("-", ""),
              "phone_number": telefone,
              "declared_salary": Number(profit.replaceAll(".", "").replaceAll(",", ".").replaceAll("R$", "")),
              "addresses": [
                {
                  "street": street,
                  "neighborhood": neighborhood,
                  "house_number": number,
                  "city": city,
                  "cep": cep.replaceAll('-', ''),
                  "uf": state
                }
              ]
            }
            
  
            fetch(`${API_URL}/api/v1/user/create/`, {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(bodya),
      })
      .then((response) => response.json())
      .then((data) => {
        fetch(`${API_URL}/api/token/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"cpf": cpf.replaceAll(".", "").replaceAll("-", ""), "password": password})
        })
        .then(response => response.json()).then(async data => {
          const formData = new FormData();
          formData.append('image', file[0], 'image.jpg'); // Append the file directly
  
          // Upload the image
          fetch(`${API_URL}/api/v1/user/me/`, {
            'method': 'PATCH', 
            'headers': {
              'Authorization': `Bearer ${data.access}`,
            },
            'body': formData,
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              // Additional handling of the response if needed
            })
            .catch((error) => {
              console.error('Error uploading image:', error.message);
            });
  
          
          // } catch (error) {
          //   console.error('Error converting URI to Blob:', error);
          //   return null;
          // }
          
        })
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
          }
          else {
            toast.error('Passwords must be equal', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
   

         }}/>
          </>

          
        }
        {
            sucessefulMessage && <>
            <img className='logo' src={Icon}/>
            <h3 className='title-sign'>Sucesseful! Welcome to SWIFT! <br/> Download the app to continue.</h3>
            <img className="qrcode-sucessuful" src={QRcode}/>
            </>
          }
      </div>
    </div>
  )
}
