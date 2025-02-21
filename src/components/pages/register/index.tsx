import React, { useState } from 'react';
import HomeInput from '../../common/homeInput';
import SelectInput from '../../common/selectInput';
import { individualSchema } from '../../utils/validation';
import { z } from 'zod';
import HomeButton from '../../common/homeButton';

type FormData = z.infer<typeof individualSchema>;
const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    maritalStatus: '',
    landlord: '',
    numberInHousehold: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // setApiError(null);
    // setLoading(true); // Start loading

    const result = individualSchema.safeParse(formData);
    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors({
        firstName: validationErrors.firstName?._errors[0] || '',
        lastName: validationErrors.lastName?._errors[0] || '',
        phoneNumber: validationErrors.phoneNumber?._errors[0] || '',
        gender: validationErrors.gender?._errors[0] || '',
        landlord: validationErrors.landlord?._errors[0] || '',
        maritalStatus: validationErrors.maritalStatus?._errors[0] || '',
        numberInHousehold: validationErrors.numberInHousehold?._errors[0] || '',
      });
      // setLoading(false); // Stop loading if validation fails
      return;
    }
  };
  return (
    <div className='h-screen flex flex-col justify-center m-auto'>
      <div className='m-auto  w-[95%] md:w-[555px] bg-white p-3 md:p-12 rounded-md text-[#1E1E1E] '>
        <h1 className='text-xl font-bold text-center text-green-700 mb-3'>
          Welcome to Treasure Valley DataBase
        </h1>
        <form onSubmit={handleRegister}>
          <div className='grid md:grid-cols-2 grid-cols-1 items-center my-6 gap-2 w-full'>
            <div className='w-full '>
              <HomeInput
                type={'text'}
                placeholder={'Enter First Name'}
                label='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                border={
                  errors.firstName ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
              />
            </div>
            <div className='w-full'>
              <HomeInput
                type={'text'}
                placeholder={'Enter Last Name'}
                label='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                border={
                  errors.lastName ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 items-center mb-6 gap-2 w-full'>
            <div className='w-full'>
              <SelectInput
                option={[
                  { value: '', label: 'Select' },
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                ]}
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                border={errors.gender ? 'border-[#EF4444]' : 'border-[#E8ECEF]'}
                label='Select Gender'
              />
            </div>
            <div className='w-full'>
              <HomeInput
                type={'text'}
                placeholder={'Enter your Phone Number'}
                label='Phone Number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                border={
                  errors.phoneNumber ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
                onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (!/[0-9 +]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <div className='flex items-center mb-6 gap-2 w-full'>
            <div className='w-full'>
              <SelectInput
                option={[
                  { value: '', label: 'Select' },
                  { value: 'landlord', label: 'Landlord' },
                  { value: 'tenant', label: 'Tenant' },
                ]}
                name='landlord'
                value={formData.landlord}
                onChange={handleChange}
                border={
                  errors.landlord ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
                label=' LandLord/Tenant'
              />
            </div>
            <div className='w-full'>
              <SelectInput
                option={[
                  { value: '', label: 'Select' },
                  { value: 'married', label: 'Married' },
                  { value: 'single', label: 'Single' },
                ]}
                name='maritalStatus'
                value={formData.maritalStatus}
                onChange={handleChange}
                border={
                  errors.maritalStatus ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
                label=' Marital Status'
              />
            </div>
          </div>
          {formData.maritalStatus === 'married' && (
            <div className='flex items-center mb-6 gap-2 w-full'>
              <div className='w-full'>
                <HomeInput
                  type='text'
                  placeholder='Just number'
                  label='How many are you?'
                  name='numberInHousehold' // if needed, add to formData
                  value={formData.numberInHousehold || ''} // ensure default value if not set
                  onChange={handleChange}
                  onKeyPress={(
                    event: React.KeyboardEvent<HTMLInputElement>
                  ) => {
                    if (!/[0-9 +]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  border={
                    errors.numberInHousehold
                      ? 'border-[#EF4444]'
                      : 'border-[#E8ECEF]'
                  }
                />
              </div>
            </div>
          )}
          <HomeButton
            title={'Register'}
            bg={'green'}
            color={'#ffffff'}
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
