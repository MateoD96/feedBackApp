function LayoutLoading({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      {children}
    </div>
  );
}

export default LayoutLoading;
