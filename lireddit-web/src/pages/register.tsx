import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { toErrorMap } from '../utils/toErrorMap';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter();
    const [, register]  = useRegisterMutation()
    return (
        <Wrapper variant='small'>
            <Formik initialValues={{username: "", password: ""}} onSubmit={async (values, {setErrors}) => {
                const response = await register(values);
                if (response.data?.register.errors) {
                    console.log(response.data)
                    setErrors(toErrorMap(response.data.register.errors))
                } else if (response.data?.register.user) {
                    router.push('/')
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

export default withUrqlClient(createUrqlClient)(Register);