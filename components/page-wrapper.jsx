const PageWrapper = ({ children }) => {
  return (
    <main className="container min-h-[calc(100svh-84.5px)] mx-auto md:p-4 sm:p-2 p-1">
      {children}
    </main>
  );
};

export default PageWrapper;
