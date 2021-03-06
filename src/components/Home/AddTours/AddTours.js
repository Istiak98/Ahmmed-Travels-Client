import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';
const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://dreadful-eyeballs-21271.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-tour">
        <h2 className='text-center'>Please Add a Tour</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("image")} placeholder="image url" />
            <input className='btn btn-warning' type="submit" />
        </form>
    </div>
);
};

export default AddTours;


