import { ITarefa } from "../../../types/tarefa";
import style from "./Items.module.scss";

interface Props extends ITarefa {
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionarTarefa,
}: Props) {

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
        selecionarTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
