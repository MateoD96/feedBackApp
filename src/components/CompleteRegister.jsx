import { useState } from "react";
import { existsUsername } from "../firebase";
import styles from "../styles/Auth.module.css";
import { registerNewUser } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CompleteRegister({ userAuth }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(null);
  const [messageExistUsername, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setUsername(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== "") {
      setLoading(true);
      const usernameExist = await existsUsername(username);
      if (!usernameExist) {
        await registerNewUser(userAuth.uid, { username: username });
        setLoading(false);
        navigate("/feedback/all");
      } else {
        setLoading(false);
        setMessage(true);
      }
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.contForm}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.contInp}>
              <input
                onChange={handleChange}
                type="text"
                placeholder="@username"
                value={username}
                name="username"
                required
              />
            </div>
            <input type="submit" value="Completar Registro" />
          </form>
          {loading && <h3>Cargando...</h3>}
          {messageExistUsername && <h3>El nombre de usuario ya existe</h3>}
        </div>
      </div>
    </div>
  );
}
