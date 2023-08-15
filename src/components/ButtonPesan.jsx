import React from "react";

const ButtonPesan = () => {
  return (
    <div className="container_btn_pesan">
      <a
        target="_blank"
        className="btn_pesan btn btn-success"
        href="https://wa.me/6289620550512?text=Assalamu%27alaikum%2C%20perkenalkan%20nama%20saya ..."
      >
        <i class="fa-solid fa-message me-2"></i>
        Pesan Sekarang
      </a>
    </div>
  );
};

export default ButtonPesan;
