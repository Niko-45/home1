export default function Button({ bgColor, textBtn, col }) {
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          color: col,
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        {textBtn}
      </button>
    </>
  );
}
export function Card({ row, img, title, text1, text2 }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: row,
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <div
        style={{
          width: "35%",
          borderRadius: "10px",
          backgroundColor: "#EAF2F5",
        }}
      >
        <img src={img} alt="" />
      </div>
      <div
        style={{
          width: "60%",
          borderRadius: "10px",
          backgroundColor: "#EAF2F5",
          padding: "10px",
        }}
      >
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
export function Card2({ img, w, title, bg, text }) {
  return (
    <div
      style={{
        width: w,
        backgroundColor: bg,
        borderRadius: "10px",
        margin: "5px",
        padding: "10px",
      }}
    >
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
