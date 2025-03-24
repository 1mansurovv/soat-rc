import { useState } from "react";

export default function Modal({ setShowModal }) {

  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [sec, setSec] = useState()
  const [milisec, setMilisec] = useState()

  setInterval(() => {
    const data = new Date();
    setHour(data.getHours())
    setMinute(data.getMinutes())
    setSec(data.getSeconds())
    setMilisec(data.getMilliseconds())
  }, 10);

  return (
    <div className="modal">
      <main className="main">
        <h2 className="hour time">{hour < 10 ? '0' + hour : hour}</h2>
        <p className="dot">:</p>
        <h2 className="min time">{minute < 10 ? '0' + minute : minute}</h2>
        <p className="dot">:</p>
        <h2 className="sec time">{sec < 10 ? '0' + sec : sec}</h2>
        <p className="dot">:</p>
        <h2 className="milisec time">{Math.floor(milisec / 10) < 10 ? '0' + Math.floor(milisec / 10) : Math.floor(milisec / 10)}</h2>
      </main>
      <button onClick={() => setShowModal(false)}>Выход</button>
    </div>
  );
}
