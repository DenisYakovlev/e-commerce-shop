import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import * as formik from "formik"
import { itemSchema } from "./schemas"


export default function ItemForm({item, onSubmit}){
    const {Formik} = formik

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={itemSchema}
            initialValues={{
                name: '',
                price: '',
                description: ''
            }}
        >
            {({ handleSubmit, handleChange, values, isValid, isSubmitting, errors }) => (      
                <Form className="p-3 d-flex flex-column gap-2" onSubmit={handleSubmit}>

                <Form.Group controlId="formItemName">
                    <Form.Label className="fw-semibold">
                        Назва
                    </Form.Label>
                    
                    <Form.Control 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formItemPrice">
                    <Form.Label className="fw-semibold">
                        Ціна
                    </Form.Label>
                    
                    <Form.Control 
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formItemDescription">
                    <Form.Label className="fw-semibold">
                        Опис
                    </Form.Label>
                    
                    <Form.Control 
                        type="text"
                        as="textarea"
                        name="description"
                        rows={5}
                        value={values.description}
                        onChange={handleChange}
                        isInvalid={!!errors.description}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.description}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button 
                    variant="outline-dark" 
                    size="lg" 
                    type="submit" 
                    disabled={!isValid || isSubmitting} 
                    className="mt-3"
                >
                    Зберегти
                </Button>
            </Form>
            )}
        </Formik>
    )
}