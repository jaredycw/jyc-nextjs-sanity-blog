"use client"
import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email'


export type FormData = {
    userName: string;
    email: string;
    message: string;
  };
  
export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

 

      function onSubmit(data: FormData) {
 
        sendEmail(data);
 
      }
      useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(onSubmit)();
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleSubmit]);
      

    return(
        
        <div className="self-center">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          
            <h1>Message Me 🖖</h1>

            <label className="text-black mt-4">Username<span className="text-red-500 dark:text-gray-50"> *</span></label>
            <input type="text" {...register('userName', { required: true }) }
            className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]" 
            placeholder="e.g. Jared Yeung / jaredycw"
            />
            {errors.userName && <p className='mt-3 mb-0 text-sm text-red-600'>* Username is required.</p>}

            <label className="text-black mt-4">E-mail<span className="text-red-500"> *</span></label>
            <input type="email" {...register('email', { required: true })} 
            className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]" 
            placeholder="e.g. jaredycw@gmail.com"
            />
            {errors.email && <p className='mt-3 mb-0 text-sm text-red-600'>* Email is required.</p>}
            

            <label  className="text-black mt-4">Message<span className="text-red-500"> *</span></label>
            <textarea {...register('message', { required: true })} 
            className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]"
            placeholder="e.g. how are you"
            ></textarea>

            {errors.message && <p className='mt-3 mb-0 text-sm text-red-600'>* Message is required.</p>}
            <div className="flex flex-row items-center justify-center md:justify-start  mt-10">
 
                <input type="submit" className="form-button" />
            </div>
        </form>

        </div>
    )
  }