import React, {useEffect, useState} from 'react'
import PacientForm from './PacientForm'
import { firestore } from '../firebase'
import { collection, addDoc, onSnapshot   } from "firebase/firestore"; 

const Pacient = () => {
    const [pacients, setPacients] = useState([])

    const addPacient = async (linkObject) => {
        try {
          // Agrega pacientes a BDD de Firebase
          const docRef = await addDoc(collection(firestore, 'patient'), linkObject);
          console.log("Nuevo Paciente Agregado con ID: ", docRef.id);
        } catch (e) {
          console.error("Error al agregar el documento: ", e);
        }
    };

    const getPatients = () => {
        // Observa los cambios en tiempo real
        onSnapshot(collection(firestore, 'patient'), (querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            //Arreglo que contiene los pacientes
            docs.push({...doc.data(), id:doc.id});
          });
          // Imprimo el arreglo en consola
          console.log(docs);
          //Guardo los datos
          setPacients(docs);
        });
    };

    useEffect(() => {
        getPatients();
    }, []);
    
    return (
        <div>
            <h1>Formulario de Citas Médicas</h1>
            <PacientForm addPacient={addPacient}/>
            <div className="col-md-5">
              <br/>
              <h1>Citas Agendadas</h1>
              {pacients.map(paciente => (
                <div className='card text-white bg-primary mb-3 style="max-width: 20rem;'>
                  <div className="card-header">Datos de Paciente</div>
                  <div className="card-body">
                    <h4 className="card-title">{paciente.patientName} {paciente.patientLastName}</h4>
                    <p className="card-text">Edad: {paciente.age} años</p>
                    <p className="card-text">Sintomas: {paciente.description}</p>
                    <p className="card-text">Fecha de Cita: {paciente.appointmentDate}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    );
}

export default Pacient;