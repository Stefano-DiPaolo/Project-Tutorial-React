import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import './course-element.css'
import { orange } from "@mui/material/colors";

export const CourseElement = ({id, title, argument, setSelected,selected}) =>{
    return (
        <Card 
        className="course-card"
        onClick={() => setSelected(id)}
        style={{
            maxWidth:250, 
            marginRight:30, 
            marginTop:30, 
            marginLeft:10 ,
            cursor:'pointer',
            backgroundColor: id=== selected ? 'blue' : 'white',
            color: id=== selected ? 'white' : 'black',
            }}>
            <CardContent>
                <Typography style={{fontSize:30, fontWeight:'bold',}}>{title}</Typography>
                <Typography style={{fontSize:20}}>{argument}</Typography>
                
            </CardContent>
            
            
        </Card>


    )

}