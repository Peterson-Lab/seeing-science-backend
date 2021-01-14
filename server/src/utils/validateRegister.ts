import { FieldError, RegisterInput } from '../resolvers/user'

export const validateRegister = (
  options: RegisterInput
): FieldError[] | null => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid Email',
      },
    ]
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'Username must be longer than 2 characters',
      },
    ]
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Username cannot include @',
      },
    ]
  }

  if (options.password.length <= 4) {
    return [
      {
        field: 'password',
        message: 'Password must be longer than 4 characters',
      },
    ]
  }

  return null
}
