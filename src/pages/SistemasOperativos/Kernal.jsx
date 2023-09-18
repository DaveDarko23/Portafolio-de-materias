import SistemasOperativos from "../SistemasOperativos";

const Kernal = () => {
  return (
    <>
      <SistemasOperativos />
      <section className="ContainerInfo">
        <h2>Tema de Kernek</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestias asperiores error, quibusdam quasi rerum nobis, voluptatem
          consequatur sunt adipisci ad eveniet illo architecto quidem
          voluptatibus alias labore odit! Debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore
          sint ea, ab perspiciatis exercitationem at. Et eius officia excepturi.
          Nulla ipsa similique adipisci tenetur nihil. Reprehenderit ea totam
          quis!
        </p>

        <div className="img-example">
          <img src="src\assets\Network00.jpg" alt="Example" />
        </div>

        <div className="card-info-container-vertical">
          <div className="card-info">
            <h1>Sabias Que?</h1>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus tempora, aliquid saepe maxime ipsum, vero recusandae quia at harum laudantium doloremque et dolor veritatis. Mollitia maxime sunt libero quos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam fugiat incidunt mollitia tempore illo cupiditate vitae molestias quasi quam, amet odio, harum possimus ipsum animi temporibus, ea sit quisquam.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis nesciunt dolorem maxime? Laboriosam veniam quo nesciunt, reprehenderit fuga minus quae aut voluptate vel quidem eius amet autem in explicabo!
            </p>
          </div>
        </div>

        <div className="card-info-container-horizontal">
          <div className="card-info">
            <h1>Sabias Que?</h1>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus tempora, aliquid saepe maxime ipsum, vero recusandae quia at harum laudantium doloremque et dolor veritatis. Mollitia maxime sunt libero quos.
            </p>
          </div>
        </div>

        <div className="container-fifty">
          <div className="container-fifty-img">
            <img src="src\assets\software00.jpg" alt="" />
          </div>
          <div className="container-fifty-text">
            <h1>Title</h1>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, corporis laboriosam. Eligendi quas recusandae sapiente maiores nobis quo quae debitis reiciendis eius quasi ex harum ullam, dolore suscipit deserunt aut.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kernal;
