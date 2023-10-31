import "./styles.css";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    brand: "Apple",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    brand: "Apple",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 249,
    brand: "Samsung",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    brand: "OPPO",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    brand: "Huawei",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 749,
    brand: "Apple",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png"
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 499,
    brand: "Samsung",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 499,
    brand: "Microsoft Surface",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 199,
    brand: "Infinix",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 199,
    brand: "HP Pavilion",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
  }
];

const Card = ({ title, brandName, price, description, img }) => {
  return (
    <div className="card">
      <img className="cardImg" src={img} alt="product" />
      <div className="cardBody">
        <div className="brandName">{brandName}</div>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default function App() {
  //limit to 6
  // use data in wireframe
  // use loook and feel of wireframe
  // add ket using p.id
  //grab correct items for isecon row

  return (
    <div className="App">
      <div>
        <div className="list">
          {products.slice(0, 3).map((p, i) => {
            return (
              <div key={i}>
                <Card
                  title={p.title}
                  brandName={p.brand}
                  price={p.price}
                  description={p.description}
                  img={p.thumbnail}
                />
              </div>
            );
          })}
        </div>
        <div className="list">
          {products.slice(4, 7).map((p, i) => {
            return (
              <div key={i}>
                <Card
                  title={p.title}
                  brandName={p.brand}
                  price={p.price}
                  description={p.description}
                  img={p.thumbnail}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
