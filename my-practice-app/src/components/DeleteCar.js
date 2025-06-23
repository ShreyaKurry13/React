import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router'; // Make sure this is correct

export default function DeleteCar() {
    const ref1 = useRef();
    let navigate = useNavigate();

    function myFunc() {
        const carId = ref1.current.value;
        console.log("Deleting car with ID:", carId);

        try {
            const response = axios.delete(`http://localhost:8989/cars-api/${carId}`);
            console.log(response.data);
            alert('Car deleted Successfully');
            navigate("/show-cars");
        } catch (error) {
            console.error("Delete failed:", error);
            alert('Error deleting car. Please try again.');
        }
    }

    return (
        <div className='container'>
            <h1>DeleteCar</h1><br />
            <input ref={ref1} type="text" placeholder='Car Id' /><br /><br />
            <button className='btn btn-success' onClick={myFunc}>Delete</button>
        </div>
    );
}
