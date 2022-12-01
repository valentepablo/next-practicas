import axios from 'axios';

const CoinList = ({ coinData }) => {
  console.log(coinData);

  return <div>Hello</div>;
};

export const getStaticProps = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    props: {
      coinData: response.data,
    },
  };
};

export default CoinList;
