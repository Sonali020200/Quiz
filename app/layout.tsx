import '../app/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Quiz App</title>
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
};

export default Layout;
