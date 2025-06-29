export default function card () {
const cardStyle = {
  backgroundColor: "rgb(8, 9, 51)",
  color: "#f5f5f5",
  width: "30%",
  height: "50vh",
  borderRadius: "15px",
  padding: "15px"
}

const cardh2 = {
  fontSize: "2rem"
}

const ul = {
  color: "#f5f5f5",
  alignText: "start",
  fontSize: "2rem"
}
const img = {
  width: "80%",
  borderRadius: "15px"
}

return(
  <div style={cardStyle}>
    <h2 style = {cardh2}>Ernesto González</h2>
    <img style={img} src="src/assets/yo.jpeg" alt="mi foto" />
    <ul style={ul}>
      <li><a href="https://github.com/ErnestoGR98" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/ernesto-gonz%C3%A1lez-b665001a8/">LinkedIn</a></li>
    </ul>
  </div>
)
}