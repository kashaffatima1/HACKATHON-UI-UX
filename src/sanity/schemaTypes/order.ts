export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "firstname",
            type: "string",
            title: "First Name",
        },
        {
            name: "lastname",
            type: "string",
            title: "Last Name",
        },
        {
            name: "email",
            type: "string",
            title: "Email",
        },
        {
            name: "phone",
            type: "string", 
            title: "Phone",
        },
        {
            name: "address",
            type: "string",
            title: "Address",
        },
        {
            name: "city",
            type: "string",
            title: "City",
        },
        {
            name: "zipcode",
            type: "string",
            title: "Zipcode",
        },
        {
            name: "discount",
            type: "number",
            title: "Discount",
        },
        {
            name: "cartItems",
            type: "array",
            title: "Cart Items",
            of: [{ type: "reference", to: { type: "product" } }],
        },
        {
            name: "subtotal", 
            title: "SubTotal",
            type: "number",
        },
        {
            name: "orderDate", 
            type: "datetime",
            title: "Order Date",
        },
        {
            name: "status",
            type: "string",
            title: "Order Status",
            options: {
                list: [
                    { value: "pending", title: "Pending" },
                    { value: "success", title: "Success" },
                    { value: "dispatch", title: "Dispatch" },
                ],
                layout: "radio",
            },
            initialValue: "pending",
        },
    ],
};
