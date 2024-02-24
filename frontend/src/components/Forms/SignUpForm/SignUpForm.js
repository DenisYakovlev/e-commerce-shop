import * as formik from "formik"
import { signUpSchema } from "./schemas"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function SignUpForm({onSubmit}){
    const {Formik} = formik

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={signUpSchema}
            initialValues={{
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                password_confirm: ""
            }}
        >
            {({handleSubmit, handleChange, values, isValid, errors}) => (
                <Form className="px-3 d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <Form.Group controlId="formAuthEmail">
                        <Form.Label>
                            Email
                        </Form.Label>
                    
                        <Form.Control 
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRegFirstName">
                        <Form.Label>
                            Ваше ім'я
                        </Form.Label>
                        
                        <Form.Control 
                            type="text"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            isInvalid={!!errors.first_name}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.first_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRegLastName">
                        <Form.Label>
                            Ваше прізвище
                        </Form.Label>
                        
                        <Form.Control 
                            type="text"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            isInvalid={!!errors.last_name}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.last_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formAuthPassword">
                        <Form.Label>
                            Пароль
                        </Form.Label>
                
                        <Form.Control 
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formAuthPasswordConfirm">
                        <Form.Label>
                            Підтвердіть пароль
                        </Form.Label>
                        
                        <Form.Control 
                            type="password"
                            name="password_confirm"
                            value={values.password_confirm}
                            onChange={handleChange}
                            isInvalid={!!errors.password_confirm}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.password_confirm}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <h5 className="m-0 text-center text-danger fw-normal">{errors.submit}</h5>

                    <Button 
                        variant="outline-dark" 
                        size="lg" 
                        type="submit" 
                        disabled={!isValid} 
                        className="mt-3"
                    >
                        Зареєструватись
                    </Button>
                </Form>
            )}
        </Formik>
    )
}