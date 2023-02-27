const Asika = ({ status }) => {
  console.log(status);
  console.log(status === 0);
  return (
    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        class="w-16 md:w-32 lg:w-48 z-100"
        style={{ display: status === 0 ? "" : "none" }}
        src="../img/toto.png"
        alt="アシカデフォ"
      />
      <img
        class="w-16 md:w-32 lg:w-48"
        style={{ display: status === 1 ? "" : "none" }}
        src="../img/toto2.png"
        alt="アシカデフォ"
      />
      <img
        class="w-16 md:w-32 lg:w-48"
        style={{ display: status === 2 ? "" : "none" }}
        src="../img/toto3.png"
        alt="アシカデフォ"
      />
      <img
        class="w-16 md:w-32 lg:w-48"
        style={{ display: status === 3 ? "" : "none" }}
        src="../img/toto4.png"
        alt="アシカデフォ"
      />
      <img
        class="w-16 md:w-32 lg:w-48"
        style={{ display: status === 4 ? "" : "none" }}
        src="../img/toto5.png"
        alt="アシカデフォ"
      />
      <img
        class="w-16 md:w-32 lg:w-48"
        style={{ display: status === 5 ? "" : "none" }}
        src="../img/toto6.png"
        alt="アシカデフォ"
      />
    </div>
  );
};

export default Asika;
