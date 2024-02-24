import * as formik from "formik"
import { signInSchema } from "./schemas"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function SignInForm({onSubmit}){
    const {Formik} = formik
    
    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={signInSchema}
            initialValues={{
                email: "",
                password: ""
            }}
        >
            {({handleSubmit, handleChange, values, isValid, isSubmitting, errors}) => (
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

                    <h5 className="m-0 text-center text-danger fw-normal">{errors.submit}</h5>

                    <Button 
                        variant="outline-dark" 
                        size="lg" 
                        type="submit" 
                        disabled={!isValid} 
                        className="mt-3"
                    >
                        Увійти
                    </Button>
                </Form>
            )}
        </Formik>
        // <Form className="px-3 d-flex flex-column gap-3">
        //         <Form.Group controlId="formAuthEmail">
        //             <Form.Label>
        //                 Email
        //             </Form.Label>
                    
        //             <Form.Control 
        //                 type="email"
        //                 value={email}
        //                 onChange={e => setEmail(e.target.value)}
        //             />
        //         </Form.Group>

        //         <Form.Group controlId="formAuthPassword">
        //             <Form.Label>
        //                 Пароль
        //             </Form.Label>
                    
        //             <Form.Control 
        //                 type="password"
        //                 placeholder="Від 8 символів"
        //                 value={password}
        //                 onChange={e => setPassword(e.target.value)}
        //             />
        //         </Form.Group>
        //     </Form>

        //     {error && 
        //         <p className="fs-5 text-danger text-center">{error}</p>
        //     }

        //     <DarkButton className="mx-3 fs-5" onClick={handleSignIn}>
        //         Увійти
        //     </DarkButton>
    )
}