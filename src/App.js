import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    img:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
  },
  {
    id: 2,
    name: "Doncasu",
    img:
      "http://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg",
  },
  {
    id: 3,
    name: "Kimbap",
    img: "https://craftlog.com/m/i/5805364=s1280=h960.webp",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.img} />
      ))}
    </div>
  );
}

export default App;
