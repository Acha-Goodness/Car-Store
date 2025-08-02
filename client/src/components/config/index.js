
    export const registerFormControls = [
        {
            name : "userName",
            label : "User Name",
            placeholder : "Enter your user name",
            componentType : "input",
            type : "text"
        },
        {
            name : "email",
            label : "Email",
            placeholder : "Enter your email",
            componentType : "input",
            type : "email"
        },
        {
            name : "password",
            label : "Password",
            placeholder : "Enter your password: 8 characters",
            componentType : "input",
            type : "password"
        },
        {
            name : "confirmPassword",
            label : "Confirm Password",
            placeholder : "Confirm Your password",
            componentType : "input",
            type : "password"
        }
    ]

    export const loginFormControls = [
        {
            name : "email",
            label : "Email",
            placeholder : "Enter your email",
            componentType : "input",
            type : "email"
        },
        {
            name : "password",
            label : "Password",
            placeholder : "Enter your password",
            componentType : "input",
            type : "password"
        }
    ]

    export const verifyOtpControls = [
        {
            name : 1,
            placeholder : "1",
            componentType : "input",
            type : "text"
        },
        {
            name : 2,
            placeholder : "2",
            componentType : "input",
            type : "text"
        },
        {
            name : 3,
            placeholder : "3",
            componentType : "input",
            type : "text"
        }, 
        {
            name : 4, 
            placeholder : "4",
            componentType : "input",
            type : "text"
        }
    ]

    export const forgotPasswordControls = [
        {
            name : "email",
            label : "Email",
            placeholder : "Enter your email",
            componentType : "input",
            type : "email"
        }
    ]

    export const resetPasswordControls = [
        {
            name : "otp",
            label : "OTP",
            placeholder : "Enter OTP Code",
            componentType : "input",
            type : "text"
        },
        {
            name : "password",
            label : "Password",
            placeholder : "Enter new password: 8 characters",
            componentType : "input",
            type : "password"
        },
        {
            name : "confirmPassword",
            label : "Confirm Password",
            placeholder : "Confirm new password",
            componentType : "input",
            type : "password"
        }
    ]

    export const addPoductFormElements = [
        {
            label: "Title",
            name: "title",
            componentType: "input",
            type: "text",
            placeholder: "Enter product title"
        },
        {
            label: "Description",
            name: "description",
            componentType: "textarea",
            placeholder: "Enter product description"
        },
        {
            label: "Category",
            name: "category",
            componentType: "select",
            options: [
                { id: "men", label: "Men"},
                { id: "women", label: "Women"},
                { id: "kids", label: "Kids"},
                { id: "accessories", label: "Accessories"},
                { id: "footwear", label: "Footwear"}
            ],
        },
        {
            label: "Brand",
            name: "brand",
            componentType: "select",
            options: [
                { id: "nike", label: "Nike"},
                { id: "addidas", label: "Addidas"},
                { id: "puma", label: "Puma"},
                { id: "levi", label: "Levi's"},
                { id: "zara", label: "Zara"},
                { id: "h&m", label: "H&M"}
            ],
        },
        {
            label: "Price",
            name: "price",
            componentType: "input",
            type: "number",
            placeholder: "Enter product price"
        },
        {
            label: "Sale Price",
            name: "salePrice",
            componentType: "input",
            type: "number",
            placeholder: "Enter sale price (optional)"
        },
        {
            label: "Total Stock",
            name: "totalStock",
            componentType: "input",
            type: "number",
            placeholder: "Enter total stock"
        }
    ];

    export const filterOptions = {
        category: [
            {id: "men", label: "Men" },
            {id: "women", label: "Women"},
            {id: "kids", label: "Kids"},
            {id: "accessories", label: "Accessories"},
            {id: "footwear", label: "Footwear"},
        ],
        brand: [
            {id: "nike", label: "Nike" },
            {id: "addidas", label: "Addidas"},
            {id: "puma", label: "Puma"},
            {id: "levi", label: "Levi's"},
            {id: "zara", label: "Zara"},
            {id: "h&m", label: "H&M"}
        ],
    }

