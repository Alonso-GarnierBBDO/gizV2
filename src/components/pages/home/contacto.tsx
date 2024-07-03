
'use client';

import { 
    Box, 
    TextField, 
    FormControl, 
    MenuItem, 
    Select, 
    SelectChangeEvent  
} from '@mui/material';
import { useState } from 'react';
import sendEmail from '@/hooks/form';



function ContactoFormComponent(){

    const [name, setName] = useState('');
    const [nameString, setNameString] = useState('');
    const [email, setEmail] = useState('');
    const [emailString, setEmailString] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneString, setPhoneString] = useState('');
    const [type, setType] = useState('');
    const [typeString, setTypeString] = useState('');
    const [send, setSend] = useState(false);
    const [sendString, setSendString] = useState('Enviar');
    const [message, setMessage] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setType(event.target.value as string);
    };

    const sendContacto = () => {


      let send = true;

      if(!name){
        setNameString('Nombre requerido');
        send = false;
      }else {
        setNameString('');
      }

      if(!email){

        setEmailString('Correo electrónico requerido');
        send = false;

      }else {

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regexCorreo.test(email)) {

          setEmailString('');

        } else {

          setEmailString('Correo electrónico no valido');
          send = false;

        }

      }

      if(!phone){
        setPhoneString('Teléfono requerido');
        send = false;
      }else{
        setPhoneString('');
      }

      if(!type){
        setTypeString('Opción requerida')
        send = false;
      }else{
        setTypeString('')
      }

      if(send){
        sendForm()
      }

    }


    const sendForm = async () => {

      setSend(true);
      setSendString('Enviando...')


      const form = new FormData();
      form.append('name', name);
      form.append('phone', phone);
      form.append('email', email);
      form.append('type', type);

      const formItem = await sendEmail(form);


      if(formItem == 202){
        setMessage('La información se envió con éxito.')
      }else{
        setMessage('Ocurrió un problema al enviar la información, inténtelo más tarde.')
      }

      setSend(false);
      setSendString('Enviar');

    }

    return(
        <>
            <section className="contacto_seccion" id='contacto'>
                <section className='box'>
                    <h2>Contacto</h2>
                    <FormControl fullWidth>
                      <Box className='form_item'>
                          <section>
                              <label htmlFor="nombre">Nombre completo</label>
                              <TextField error id="nombre" variant="outlined" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                              }}/>
                              <span>{nameString}</span>
                          </section>
                          <section>
                              <label htmlFor="email">Correo electrónico</label>
                              <TextField id="email" variant="outlined" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(event.target.value);
                              }}/>
                              <span>{emailString}</span>
                          </section>
                          <section>
                              <label htmlFor="phone">Teléfono</label>
                              <TextField id="phone" variant="outlined" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPhone(event.target.value);
                              }}/>
                              <span>{ phoneString }</span>
                          </section>
                      
                          <section>
                              <label htmlFor="type">Seleccione</label>
                                  <Select
                                      id="type"
                                      value={type}
                                      onChange={handleChange}
                                  >
                                      <MenuItem value='Soy apicultor'>Soy apicultor</MenuItem>
                                      <MenuItem value='Quiero ser apicultor'>Quiero ser apicultor</MenuItem>
                                      <MenuItem value='Institución Educativa'>Institución Educativa</MenuItem>
                                      <MenuItem value='Otro'>Otro</MenuItem>
                                  </Select>
                            <span>{ typeString }</span>
                          </section>
                          <button disabled={send ? true : false} onClick={sendContacto}>{sendString}</button>
                          <strong>{message}</strong>
                      </Box>
                    </FormControl>
                </section>               
            </section>
        </>
    )

}

export default ContactoFormComponent;