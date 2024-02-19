const Asika = ({ status }) => {
  console.log(status);
  console.log(status === 0);
  return (
    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        className="scale-150 w-16 md:w-32 lg:w-48 z-100"
        style={{ display: status >= 0 && status < 3 ? "" : "none" }}
        src="../img/zp1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 3 && status < 7 ? "" : "none" }}
        src="../img/kp1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 7 && status < 10 ? "" : "none" }}
        src="../img/km1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 10 && status < 15 ? "" : "none" }}
        src="../img/ap1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 15 && status < 20 ? "" : "none" }}
        src="../img/default.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status > 20 && status < 30 ? "" : "none" }}
        src="../img/am1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status > 30 && status < 100 ? "" : "none" }}
        src="../img/zm1.png"
        alt="アシカ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status > 100 ? "" : "none" }}
        src="../img/over.png"
        alt="アシカ"
      />
    </div>
  );
};

export default Asika;
