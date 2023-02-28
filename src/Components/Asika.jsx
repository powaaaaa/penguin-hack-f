const Asika = ({ status }) => {
  console.log(status);
  console.log(status === 0);
  return (
    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        className="scale-150 w-16 md:w-32 lg:w-48 z-100"
        style={{ display: status >= 0 && status < 3 ? "" : "none" }}
        src="../img/toto.png"
        alt="アシカデフォ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 3 && status < 7 ? "" : "none" }}
        src="../img/toto2.png"
        alt="アシカデフォ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 7 && status < 10 ? "" : "none" }}
        src="../img/toto3.png"
        alt="アシカデフォ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 10 && status < 15 ? "" : "none" }}
        src="../img/toto4.png"
        alt="アシカデフォ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status >= 15 && status < 20 ? "" : "none" }}
        src="../img/toto5.png"
        alt="アシカデフォ"
      />
      <img
        className="scale-150 w-16 md:w-32 lg:w-48"
        style={{ display: status > 20 ? "" : "none" }}
        src="../img/toto6.png"
        alt="アシカデフォ"
      />
    </div>
  );
};

export default Asika;
