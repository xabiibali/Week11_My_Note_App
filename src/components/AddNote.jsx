import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const AddNote = (props) => {
   
  const initialValues = {
    title: '',
    content: '',
  }
     const handleSubmit = (values) =>{
     props.createNote({
        title: values.title,
        content: values.content
      })
  console.log(values);
     }
     
     const validationSchema = Yup.object({
      title: Yup.string().required('Required'),
      content: Yup.string().required('Required')
     })
  // add form logic here

  return (
    <div className ='mx-auto rounded-lg bg-white p-10 shadow md:w-3/4 lg:w-1/2'>
      { /* Add here your form and style it with Tailwind */ }
      
     <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
     >
      <Form className='flex flex-col '>
      <div className='mb-5'>
        <Field
        className='w-full rounded border border-blue-400 p-3 shadow'  
         type='text'
         name= 'title'
         id='title'
         placeholder='title'
        
        />
        <ErrorMessage
          name='title'
          component='div'
          className='text-red-400'
        />
      </div>

        <div className=' mb-5'>
             <Field 
        className='w-full rounded border border-blue-400 p-3 shadow'  

               type='text'
               id= 'content'
               name= 'content'
               placeholder='Body'
             />
             <ErrorMessage
              name='content'
              component='div'
          className='text-red-400'
             
             />
        </div>
            <button type='submit' className='bg-yellow-500 p-3 rounded-2xl text-black font-bold hover:bg-black hover:text-white'>Add Note</button>
      </Form>

      </Formik>       


    </div>
  );
};

export default AddNote;
