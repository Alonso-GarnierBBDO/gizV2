
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



function ContactoFormComponent(){

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return(
        <>
            <section className="contacto_seccion" id='contacto'>
                <section className='box'>
                    <h2>Contacto</h2>
                    <Box className='form_item'>
                        <section>
                            <label htmlFor="nombre">Nombre completo</label>
                            <TextField id="nombre" variant="outlined" />
                        </section>
                        <section>
                            <label htmlFor="email">Correo electrónico</label>
                            <TextField id="email" variant="outlined" />
                        </section>
                        <section>
                            <label htmlFor="phone">Teléfono</label>
                            <TextField id="phone" variant="outlined" />
                        </section>
                    
                        <section>
                            <label htmlFor="type">Seleccione</label>
                            <FormControl fullWidth>
                                <Select
                                    id="type"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Soy apicultor</MenuItem>
                                    <MenuItem value={20}>Quiero ser apicultor</MenuItem>
                                    <MenuItem value={30}>Institución Educativa</MenuItem>
                                    <MenuItem value={40}>Otro</MenuItem>
                                </Select>
                            </FormControl>
                        </section>
                        <button>Enviar</button>
                    </Box>
                </section>               
            </section>
        </>
    )

}

export default ContactoFormComponent;