function BtnDeleteComments({ children, actionDelete }) {
  return <button onClick={actionDelete}>{children}</button>;
}

export default BtnDeleteComments;
