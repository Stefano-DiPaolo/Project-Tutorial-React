import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { CourseElement } from "../components/CourseElement";

export const Courses = () => {

    const[courses, setCourses] = useState();
    const [searchString, setSearchString] = useState('')
    const [selected, setSelected] = useState()

//prende due parametri, una funzione callback e un Array
    useEffect(()=>{
        //Funzione di callback --> chiamata al servizio
        //risposta
        //set della lista di corsi = risposta
        fetch('http://localhost:8080/api/tutorials',{
            method:'GET',
            headers:{'Content-Type' : 'application/json'}
        }
        ).then(response => response.json())
        .then(res => (
            setCourses(res)
        ))

    //     let response = [
    //         {
    //         title:'Corso React',
    //         argument:'React'
    //     },
    //     {
    //         title:'Corso Angular',
    //         argument:'Angular'
    //     }
    // ]
        //set della lista di corsi = risposta
        // setCourses(response)
        //parentesi quadre vuote -->WillMount
        //senza parentesi --> viene rilanciato useEffect ogni volta che viene aggiornato lo Stato
        //parentesi quadre con variabile di stato [courses] --> rilancia lo useEffect solo se quella 
        //variabile viene aggiornata
    },[]);

    /*
    courses.filter((el) =>

    
    )
    
    */
    return(
        <div>
            <SearchBar  searchString = {searchString} setSearchString = {setSearchString}/>
            <div style={{display:'flex',flexDirection:'row'}}>
                {courses ? //operatore ternario
                courses.filter((el) => el.name.toUpperCase().includes(searchString.toUpperCase()))
                .map((el)=>
            <CourseElement 
            setSelected={setSelected}
            selected={selected} 
            id={el.id} 
            title={el.name} 
            argument={el.argument} /> 
          
            )
            : <h5>Loading</h5>
        }
                
                
            
            </div>
        </div>
    )
}