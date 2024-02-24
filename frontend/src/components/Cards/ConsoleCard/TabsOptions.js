import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import TabTitle from "./TabTitle"
import OrdersTab from "./OrdersTab"
import UsersTab from "./UsersTab"
import ItemsTab from "./ItemsTab"
import { useState } from "react"


export const UserTabs = () => {
    const [tab, setTab] = useState(1)

    return (
        <Tabs
            activeKey={tab}
            onSelect={_tab => setTab(_tab)}
            variant="pills"
            className="gap-3"
        > 
            <Tab eventKey="1" title={<TabTitle icon="rectangle-list" text="Замовлення"/>}>
                <OrdersTab />
            </Tab>
        </Tabs>
    )
}

export const AdminTabs = () => {
    const [tab, setTab] = useState(1)

    return (
        <Tabs
            activeKey={tab}
            onSelect={_tab => setTab(_tab)}
            variant="pills"
            className="gap-3"
        > 
            <Tab eventKey="1" title={<TabTitle icon="rectangle-list" text="Замовлення"/>}>
                <OrdersTab />
            </Tab>

            <Tab eventKey="2" title={<TabTitle icon="user" text="Користувачі"/>}>
                <UsersTab />   
            </Tab>

            <Tab eventKey="3" title={<TabTitle icon="cart-shopping" text="Товари"/>}>
                <ItemsTab />
            </Tab>
        </Tabs>
    )
}