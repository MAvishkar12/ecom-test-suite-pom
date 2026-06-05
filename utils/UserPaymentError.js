export const errorTestCases = [
    {
        description: 'No user FirstName error',
        firstName: '',
        lastName: '',
        postalCode: '',
        expectedError: 'Error: First Name is required'
    },
    {
        description: 'No user LastName error',
        firstName: 'abc',
        lastName: '',
        postalCode: '',
        expectedError: 'Error: Last Name is required'
    },
    {
        description: 'No user Postal code error',
        firstName: 'abc',
        lastName: 'xyz',
        postalCode: '',
        expectedError: 'Error: Postal Code is required'
    }
]