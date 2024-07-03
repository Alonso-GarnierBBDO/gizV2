

const sendForm = async (form : any) => {

    let status = 0;

    await fetch('https://polinizandocr.com/email/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // o 'application/json' según tu caso
        },
        body: form,
      }).then( res => {

        status = res.status;

      });

      return status;
    
}

export default sendForm;