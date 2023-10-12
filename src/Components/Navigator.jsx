const Navigator = ({ controller, children }) => {
  return (
    <section className={controller ? "navigator" : "navigator-close"}>
      {children}
    </section>
  );
};

export default Navigator;
