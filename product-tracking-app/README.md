# Product Tracking App

This is a React-based product tracking application that allows users to manage products and categories efficiently. The application features a user-friendly interface for adding, listing, and categorizing products.

## Features

- **Product Listings**: View products displayed on cards with details such as name, description, and category.
- **Product Addition**: A dedicated page for adding new products with relevant details.
- **Category Management**: Add and delete product categories to organize products effectively.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure

```
product-tracking-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CategoryList.tsx
│   │   ├── CategoryForm.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   └── Navbar.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── ProductAddPage.tsx
│   │   └── ProductListPage.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd product-tracking-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- React
- TypeScript
- React Router
- CSS for styling

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.