import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const FormContainer = styled.form`
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
`

const websiteReg = /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/gi;

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(3, "Your name must be at least 3 characters"),
    age: yup.number().required("Please enter your age").min(10, "Your age must be at least 10").max(20, "Your age must be at most 20"),
    website: yup.string().required("Please enter a website url").matches(websiteReg, "Please enter url in valid format"),
});

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} className="bg-light">
            <label htmlFor="name" className="mt-3">Name</label>
            <input {...register("name")} id="name"/>
            {errors.name && <span className="mb-3 text-danger">{errors.name.message}</span>}

            <label htmlFor="age" className="mt-3">Age</label>
            <input {...register("age")} id="age"/>
            {errors.age && <span className="mb-3 text-danger">{errors.age.message.includes('NaN') ? "Please enter a number" : errors.age.message}</span>}

            <label htmlFor="website" className="mt-3">Website url</label>
            <input {...register("website")} id="website"/>
            {errors.website && <span className="mb-3 text-danger">{errors.website.message}</span>}

            <button className="mt-3 bg-primary text-white">Send</button>
        </FormContainer>
    );
}

export default ContactForm;