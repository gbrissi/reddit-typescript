import React, { useMemo } from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import Wrapper from "../components/Wrapper"
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const [, register]  = useRegisterMutation()
    return (
        <Wrapper variant='small'>
            <Formik initialValues={{username: "", password: ""}} onSubmit={async (values, {setErrors}) => {
                const response = await register(values);
                if (response.data?.register.errors) {
                    [{field: 'username', message:'something wrong'}]
                    setErrors(
                        toErrorMap(response.data.register.errors)
                    )
                }
            }}>
                {({isSubmitting}) => (
                    <Form>
                        <InputField name='username' placeholder='username' label='Username'/>
                        <Box mt={4}>
                            <InputField name='password' placeholder='password' label='Password' type='password'/>
                        </Box>
                        <Button mt={4} type='submit' isLoading={isSubmitting} backgroundColor='teal'>register</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>

    );
}

export default Register;