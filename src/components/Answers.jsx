import stylesAnswers from "../styles/Answers.module.css";
import LayoutLoading from "../layout/LayoutLoading";
import Answer from "./Answer";

function Answers({ answers, loadingAnswers }) {
  if (loadingAnswers) {
    return (
      <LayoutLoading>
        <h3>Cargando..</h3>
      </LayoutLoading>
    );
  }

  if (answers) {
    return (
      <div className={stylesAnswers.cont}>
        {answers &&
          answers.map((answer) => {
            return <p key={answer.idDoc || answer.id}>{answer.content}</p>;
          })}
      </div>
    );
  }
}

export default Answers;
