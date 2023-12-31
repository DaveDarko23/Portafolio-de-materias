import CardHorizontal from "../../Components/CardHorizontal";
import FiftyFiftyCard from "../../Components/FiftyFiftyCard";
import FiftyFiftyImg from "../../Components/FiftyFiftyImg";

const Kernal = () => {
  return (
    <>
      <h2>Tema de Kernek</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias
        asperiores error, quibusdam quasi rerum nobis, voluptatem consequatur
        sunt adipisci ad eveniet illo architecto quidem voluptatibus alias
        labore odit! Debitis.
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
      <FiftyFiftyCard
      title-text="Que es un sistema operativo"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestias asperiores error, quibusdam quasi rerum nobis, voluptatem
          consequatur sunt adipisci ad eveniet illo architecto quidem
          voluptatibus alias labore odit! Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut culpa 
          suscipit! In, ab deleniti labore quis tempore voluptas repellendus quos quo
           iusto assumenda perspiciatis ullam sit beatae laudantium doloremque.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestias asperiores error, quibusdam quasi rerum nobis, voluptatem
          consequatur sunt adipisci ad eveniet illo architecto quidem
          voluptatibus alias labore odit! Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut culpa 
          suscipit! In, ab deleniti labore quis tempore voluptas repellendus quos quo
           iusto assumenda perspiciatis ullam sit beatae laudantium doloremque."
        title="Sabias Que?"
        textCard="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
               necessitatibus tempora, aliquid saepe maxime ipsum, vero
               recusandae quia at harum laudantium doloremque et dolor veritatis.
               Mollitia maxime sunt libero quos. Lorem ipsum dolor sit amet
               consectetur adipisicing elit. At aperiam fugiat incidunt mollitia
               tempore illo cupiditate vitae molestias quasi quam, amet odio,
               harum possimus ipsum animi temporibus, ea sit quisquam. Lorem,
               ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis
               nesciunt dolorem maxime? Laboriosam veniam quo nesciunt,
               reprehenderit fuga minus quae aut voluptate vel quidem eius amet
               autem in explicabo!"
      />

      <CardHorizontal
        title="Sabias Que?"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              necessitatibus tempora, aliquid saepe maxime ipsum, vero
              recusandae quia at harum laudantium doloremque et dolor veritatis.
              Mollitia maxime sunt libero quos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At aperiam fugiat incidunt mollitia
              tempore illo cupiditate vitae molestias quasi quam, amet odio,
              harum possimus ipsum animi temporibus, ea sit quisquam. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis
              nesciunt dolorem maxime? Laboriosam veniam quo nesciunt,
              reprehenderit fuga minus quae aut voluptate vel quidem eius amet
              autem in explicabo!"
      />

      <FiftyFiftyImg
        url="src\assets\software00.jpg"
        title="Importancia del SO"
        text="Los sistemas operativos son una parte fundamental de cualquier dispositivo informático, ya sea una computadora personal, un servidor, un teléfono móvil o incluso un electrodoméstico inteligente. Su importancia radica en una serie de funciones clave que desempeñan en la administración y el funcionamiento de hardware y software. A continuación, se detallan algunas de las razones por las cuales los sistemas operativos son tan importantes"
      />

<FiftyFiftyImg
        url="src\assets\colors.jpg"
        title="Importancia del SO"
        text="Los sistemas operativos son una parte fundamental de cualquier dispositivo informático, ya sea una computadora personal, un servidor, un teléfono móvil o incluso un electrodoméstico inteligente. Su importancia radica en una serie de funciones clave que desempeñan en la administración y el funcionamiento de hardware y software. A continuación, se detallan algunas de las razones por las cuales los sistemas operativos son tan importantes"
      />
    </>
  );
};

export default Kernal;
