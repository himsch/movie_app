import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt="음식사진" />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    img:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
  },
  {
    name: "Doncasu",
    img:
      "http://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg",
  },
  {
    name: "Kimbap",
    img: "https://craftlog.com/m/i/5805364=s1280=h960.webp",
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.img} />
      ))}
    </div>
  );
}

export default App;
