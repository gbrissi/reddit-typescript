import React, { useMemo } from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import Wrapper from "../components/Wrapper"
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useLoginMutation, useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/router';

const Login: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [, login]  = useLoginMutation()
    return (
        <Wrapper variant='small'>
            <Formik initialValues={{username: "", password: ""}} onSubmit={async (values, {setErrors}) => {
                const response = await login(values);
                if (response.data?.login.errors) {
                    console.log(response.data)
                    setErrors(toErrorMap(response.data.login.errors))
                } else if (response.data?.login.user) {
                    router.push('/')
                }
            }}>
                {({isSubmitting}) => (
                    <Form>
                        <InputField name='username' placeholder='username' label='Username'/>
                        <Box mt={4}>
                            <InputField name='password' placeholder='password' label='Password' type='password'/>
                        </Box>
                        <Button mt={4} type='submit' isLoading={isSubmitting} backgroundColor='teal'>login</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>

    );
}

export default Login;