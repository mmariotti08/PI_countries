const validation = (input, error, setError)=>{
    if(!input.name)
    setError({...error, name:'Completar este campo'})
    else if (!/^[a-zA-Z\s]+$/.test(input.name))
    setError({...error, name:'No se permiten caracteres especiales o numeros en este campo'})
    else if(input.name.length < 4 || input.name.length > 25)
    setError({...error, name: 'La actividad debe tener entre 4 y 25 caracteres'})
    else
    setError({...error, name:''})
};

export default validation