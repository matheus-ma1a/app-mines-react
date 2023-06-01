function MinerGrid(props) {
  const sinal = props.sinal
  const sinal_embaralhado = sinal.map((Element, index) => {
    return (
      <img key={index} src={Element} />
    )
  })

  return (
    <>{sinal_embaralhado}</>
  );
}

export default MinerGrid;