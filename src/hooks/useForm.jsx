import { useState } from "react";

function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);
  const [objValidate, setObjValidate] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    if (e.target.type === "email") {
      const reEmail =
        /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
      fnValidate(e, "email", reEmail);
    }

    if (e.target.type === "password") {
      const rePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
      fnValidate(e, "password", rePassword);
    }
  };

  const fnValidate = (e, field, regExp) => {
    if (regExp.test(form[field])) {
      setObjValidate({ ...objValidate, [field]: true });
      e.target.style.borderColor = "greenyellow";
    } else {
      setObjValidate({ ...objValidate, [field]: false });
      e.target.style.borderColor = "red";
    }
  };

  return {
    handleChange,
    handleBlur,
    form,
    objValidate,
  };
}

export default useForm;
