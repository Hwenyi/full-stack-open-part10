import React from 'react'
import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'

const initialValues = {
  username: '',
  password: '',
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 32,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
})

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      </View>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      setMessage('Signed in successfully')
      navigate('/', { replace: true })
    } catch (e) {
      setMessage(e.message)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <>
          <SignInForm onSubmit={handleSubmit} />
          {message && <Text>{message}</Text>}
        </>
      )}
    </Formik>
  )
}

export default SignIn
