import { useState } from "react"
import Card from "react-bootstrap/Card"
import { UserTabs, AdminTabs } from "./TabsOptions"


const tabsOptions = {
    "user": <UserTabs />,
    "admin": <AdminTabs />
}

export default function OrderListCard({profile}){
    return (
        <Card
            bg="primary"
            text="dark"
            className="p-0 rounded border-0 shadow"
        >
            <Card.Body className="d-flex flex-column gap-2">
                <Card.Text className="fs-1 fw-bold text-dark border-bottom">
                    Меню {profile.role == "user" ? "Користувача" : "Адміна"}
                </Card.Text>

                {tabsOptions[profile.role]}
            </Card.Body>
        </Card>
    )
}