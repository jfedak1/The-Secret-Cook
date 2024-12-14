import { useForm } from '@mantine/form';
import { useState } from 'react';
import {signUpNewUser} from '../services/auth';
import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Login.module.css';
import { IconChefHat } from '@tabler/icons-react';

export default function Login() {
  // Sign In or Create Account Form Toggle
  const [showSignIn, setShowSignIn] = useState(true);

  // Sign In Form Controls 
  const signInForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {

      email: (value) => 
        (/^\S+@\S+$/.test(value) 
      ? null 
      : 'Invalid email'),

      password: (value) =>
        (value?.length ?? 0) >= 8
          ? null
          : 'Password must be at least 8 characters long',

    },
  });

  // Create Account Form Controls
  // Sign In Form Controls 
  const createAccountForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    },

    validate: {

      email: (value) => 
        (/^\S+@\S+$/.test(value) 
      ? null 
      : 'Invalid email'),

      password: (value) =>
        (value?.length ?? 0) >= 8
          ? null
          : 'Password must be at least 8 characters long',
      
      firstName: (value) =>
        (value?.length ?? 0) >= 2
          ? null
          : 'Field not long enough',
      
      lastName: (value) =>
        (value?.length ?? 0) >= 2
          ? null
          : 'Field not long enough',
    
      username: (value) =>
        (value?.length ?? 0) >= 5
          ? null
          : 'username must be at least 5 characters long',

    },
  });

  // Create Account Form Submit Handler
  const createAccountFormSubmitHandler = (values: any) => {
    console.log(values);
  };
  

  return (
    <Container size={420} my={40} mt={50}>
      <div className="flex items-center justify-center w-24 h-24 bg-primary rounded-full m-auto mb-3">
        <IconChefHat size={60} color="black" className="transform rotate-[30deg]" />
      </div>

      <Title ta="center" className={classes.title}>
        Share recipes with friends!
      </Title>
  
      {/* Sign In Form */}
      {showSignIn && (
        <form onSubmit={signInForm.onSubmit((values) => console.log(values))}>
          <Paper p={20} pb={30} pt={20} mt={0} radius="md">
            <TextInput  size='md' label="Email" placeholder="billybob@recipe.net" required withAsterisk={false} key={signInForm.key('email')}
        {...signInForm.getInputProps('email')}
        />
            <PasswordInput
              withAsterisk={false}
              required
              size="md"
              label="Password"
              placeholder="Your password"
              mt="md"
              key={signInForm.key('password')}
              {...signInForm.getInputProps('password')}
            />
            <Text c="dimmed" size='md' mt={10}>
              Don't have an account yet?{' '}
              <Anchor type="button" size="md" component="button" onClick={() => setShowSignIn(false)}>
                Create account
              </Anchor>
            </Text>
            <Button type='submit' size='md' fullWidth mt="lg">Sign in</Button>
          </Paper>
        </form>
      )}

      {/* Create Account Form */}
      {!showSignIn && (
        <form onSubmit={createAccountForm.onSubmit(createAccountFormSubmitHandler)}>
          <Paper p={20} pb={30} pt={10} mt={0} radius="md">
            <div className="flex items-center justify-between gap-2">
              <TextInput size='md' mt="md" label="First Name" placeholder="Billy" required withAsterisk={false} {...createAccountForm.getInputProps('firstName')}/>
              <TextInput size='md' mt="md" label="Last Name" placeholder="Bob" required withAsterisk={false} {...createAccountForm.getInputProps('lastName')} />
            </div>
            <TextInput size='md' mt="md" label="Username" placeholder="@username" required withAsterisk={false} {...createAccountForm.getInputProps('username')} />
            <TextInput size='md' mt="md" label="Email" placeholder="billybob@recipe.net" required withAsterisk={false} {...createAccountForm.getInputProps('email')} />
            <PasswordInput size='md' label="Password" placeholder="Your password"  mt="md" required withAsterisk={false} {...createAccountForm.getInputProps('password')} />
            <Text c="dimmed" size='md' mt={10}>
              Already have an account?{' '}
              <Anchor type="button" size='md' component="button" onClick={() => setShowSignIn(true)}>
                Sign in
              </Anchor>
            </Text>
            <Button type='submit' size='md' fullWidth mt="lg">Create Account</Button>
          </Paper>
        </form>
        
      )}
    </Container>
  );
}
