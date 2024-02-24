import * as formik from 'formik'
import { profileSchema } from './schemas'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function ProfileUpdateForm({profile, onSubmit}){
    const { Formik } = formik

    return(
        <Formik
            onSubmit={onSubmit}
            validationSchema={profileSchema}
            initialValues={{
                first_name: profile?.first_name || "",
                last_name: profile?.last_name || "",
                role: profile?.role || ""
            }}
        >
            {({handleSubmit, handleChange, values, isValid, isSubmitting, errors }) => (
                <Form className="p-3 d-flex flex-column gap-2" onSubmit={handleSubmit}>
                    <Form.Group controlId="formProfileFirstName">
                        <Form.Label className="fw-semibold">
                            Ім'я
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

                    <Form.Group controlId="formProfileLastName">
                        <Form.Label className="fw-semibold">
                            Прізвище
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

                    <Form.Group controlId="formProfileRole">
                        <Form.Label className="fw-semibold">
                            Роль
                        </Form.Label>
                        
                        <Form.Check className="d-flex flex-row gap-1">
                            <Form.Check.Input
                                value="user"
                                name="role"
                                checked={values.role == "user"}
                                onChange={handleChange}
                                type="radio"
                                id="form-profile-role-user" 
                            />
                            
                            <Form.Check.Label
                                htmlFor="form-profile-role-user"
                            >
                                user
                            </Form.Check.Label>
                        </Form.Check>

                        <Form.Check className="d-flex flex-row gap-1">
                            <Form.Check.Input
                                value="admin"
                                name="role"
                                checked={values.role =="admin"}
                                onChange={handleChange}
                                type="radio"
                                id="form-profile-role-admin" 
                            />
                            
                            <Form.Check.Label
                                htmlFor="form-profile-role-admin"
                            >
                                admin
                            </Form.Check.Label>
                        </Form.Check>
                    </Form.Group>

                    <Button variant="outline-dark" size="lg" type="submit" className="mt-3" disabled={!isValid || isSubmitting}>
                        Зберегти
                    </Button>
                </Form>
            )}
        </Formik>
    )
}