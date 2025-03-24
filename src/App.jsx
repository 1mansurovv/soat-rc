import { useState } from "react";
import Modal from "./components/modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <p className="soat">Точной время в Узбекистане</p>
      <button className="btn" onClick={() => setShowModal(true)}>
        Смотреть
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
    </div>
  );
}
