function MinesPreload(props) {
  const sinal = props.sinal
  const sinal_embaralhado = sinal.map((Element, index) => {
    return (
      <img key={index} src={props.sinalFixo[0]} />
    )
  })

  return (
    <>{sinal_embaralhado}</>
  );

}

export default MinesPreload;