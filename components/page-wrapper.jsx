const PageWrapper = ({ children }) => {
  return (
    <main className="container min-h-[calc(100svh-84.5px)] mx-auto md:p-4 p-2">
      {children}
    </main>
  );
};

export default PageWrapper;
