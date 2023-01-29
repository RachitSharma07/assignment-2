import Card from "./components/Card";

const App = () => {

  const CARDS = [
    {
      cardTitle: 'White Traditional long dress',
      price: 3.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      cardTitle: 'Long sleeve denim jacket',
      price: 3.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      cardTitle: 'Hush Puppies',
      price: 3.99,
      rating: 4.2,
      image: 'https://images.pexels.com/photos/112285/pexels-photo-112285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      cardTitle: 'Athens skirt',
      price: 3.99,
      rating: 3.8,
      image: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="card-container">
      <Card cards={CARDS} />
    </div>
  )
};

export default App;