import React, { useState, useEffect } from "react";

export default function Container() {
  const [userSelect, setUserSelect] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const choices = ["tas", "kagit", "makas"];
  const compSelect = choices[Math.floor(Math.random() * 3)];

  useEffect(() => {
    if (userSelect !== "") {
      determineWinner();
    }
  }, [userSelect]);

  function determineWinner() {
    if (userSelect === compSelect) {
      setUserSelect("");
      return <p>Berabere, tekrar dene</p>;
    } else if (
      (userSelect === "tas" && compSelect === "makas") ||
      (userSelect === "kagit" && compSelect === "tas") ||
      (userSelect === "makas" && compSelect === "kagit")
    ) {
      // Kullanıcı kazanır durumu
      setUserScore(userScore + 1);
      setUserSelect("");
    } else {
      // Bilgisayar kazanır durumu
      setCompScore(compScore + 1);
      setUserSelect("");
    }
  }

  function restartGame() {
    setUserSelect("");
    setUserScore(0);
    setCompScore(0);
  }

  return (
    <div>
      <h1>taş kağıt makas oyunu</h1>
      {compScore === 0 && userScore === 0 ? (
        <></>
      ) : (
        <button onClick={restartGame}>Yeniden Başla</button>
      )}
      <h1>skor</h1>
      <h2>
        oyuncu: {userScore} | bilgisayar: {compScore}
      </h2>
      <div>
        <p>
          <i>merak etme bilgisayar senin tahminini bilemeyecek :) </i>
        </p>
        <h2>seçimini yap</h2>
        <button onClick={() => setUserSelect("tas")}>Taş</button>
        <p></p>
        <button onClick={() => setUserSelect("kagit")}>Kağıt</button>
        <p></p>
        <button onClick={() => setUserSelect("makas")}>Makas</button>
        {userSelect && <p>senin seçimin = {userSelect}</p>}
        {compSelect && <p>bilgisayarın seçimi buydu = {compSelect}</p>}
      </div>
    </div>
  );
}
