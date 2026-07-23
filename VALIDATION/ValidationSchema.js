export const createUserValidationSchema = {

    user_name:{

        notEmpty:{
            errorMessage:"User Name must not be empty"
        },

        isLength:{
            options:{
                min:3,
                max:12
            },
            errorMessage:"User Name length must be between 3 and 12"
        },

        isString:{
            errorMessage:"User Name must be a string"
        }

    },

    age:{
        notEmpty:{
            errorMessage:"Age should be not empty"
        }
    }

}