function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pag = i + 1;
      resultado.push(
        <a
          onClick={() => props.onChange(pag)}
          className={props.pagina === pag ? "active" : ""}
        >
          {pag}
        </a>
      );
    }
    return resultado;
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Página {props.pagina} de {props.total}:
        </span>
        {getPaginas()}
        <a href="#">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
}
export default Paginacion;
