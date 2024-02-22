import React, {useState} from 'react'

const PacientForm = (props) => {
    
    const initialStateValues = {
        patientName: '',
        patientLastName: '',
        age: '',
        description: '',
        appointmentDate: ''
    }
    
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addPacient(values);
        setValues({...initialStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className='input-group-text bg-secondary'>
                <span className="material-symbols-outlined">badge</span>
                </div>
                <input type="text" className="form-control" placeholder="Nombre de Paciente" name='patientName' onChange={handleInputChange} value={values.patientName}/>    
            </div>
            <br/>
            <div className="form-group input-group">
                <div className='input-group-text bg-secondary'>
                <span className="material-symbols-outlined">badge</span>
                </div>
                <input type="text" className="form-control" placeholder="Apellido de Paciente" name="patientLastName" onChange={handleInputChange} value={values.patientLastName}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className='input-group-text bg-secondary'>
                <span className="material-symbols-outlined">numbers</span>
                </div>
                <input type="number" className="form-control" placeholder="Edad de Paciente" name="age" onChange={handleInputChange} value={values.age}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className='input-group-text bg-secondary'>
                <span className="material-symbols-outlined">create</span>
                </div>
                <textarea className="form-control" placeholder="Descripción de Sintomas" name="description" onChange={handleInputChange} value={values.description}/>
            </div>
            <br/>
            <p>Fecha de Cita:</p>
            <div className="form-group input-group">
                <input type="date" className="form-control" name="appointmentDate" onChange={handleInputChange} value={values.appointmentDate}/>
            </div>
            <br/>
            <button className="btn btn-primary btn-block">
                Agendar Cita
            </button>
        </form>
    )
};

export default PacientForm;