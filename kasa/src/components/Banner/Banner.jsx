function Banner({ title, image }) {
  return (
    <div className="banner">
      <img src={image} alt={title} />

      <h1>{title}</h1>
    </div>
  )
}

export default Banner