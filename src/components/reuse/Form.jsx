function Form({ children, submitAction }) {
  return <form onSubmit={submitAction}>{children}</form>;
}

export default Form;
