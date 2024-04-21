import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from "uuid";

function Add(){
    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();

        const ids =uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id: uniqueId, Name: a, Age: b});

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onchange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="number" placeholder="Enter Age" required onchange={(e)=> setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onclick={(e)=>handleSubmit(e)} type="submit">Submit</Button>       
        </Form>
    </div>
}
 export default Add;