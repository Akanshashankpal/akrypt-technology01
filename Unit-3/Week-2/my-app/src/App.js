import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import UserDiv from './componet/userDiv';

const getData = async (limit, page) => {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    let data = await res.json();
    let dataLength = Number(res.headers.get("x-total-count")) / limit;

    return {
      data: data,
      dataLength: dataLength
    };

  } catch (error) {
    console.log(error)
  }
}
function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0);

  const fetchData = (limit, page) => {
    getData(limit, page).then(({ data, dataLength }) => {
      console.log(data)
      setData(data);
      setPageCount(dataLength)
    })
  }

  useEffect(() => {
    fetchData(limit, page);
    console.log(`page change to ${page}`)
  }, [page, limit]);

  const handlePageChange = (value) => {
    setPage(value)
  }
  return (
    <div className="App">
      <h1 > counter : {count}</h1>

      <button className='border-1 ml-5 w-1/8 mt-2' onClick={() => setCount(count + 1)}>Counter</button>

      <br />
      <br />
      <h1> Pages : {pageCount}</h1>

      {new Array(pageCount).fill(0).map((el, ind) => (
        <button className='border-1 ml-5 w-8 mt-2' key={ind} onClick={() => handlePageChange(ind + 1)}>
          {ind + 1}
        </button>
      ))}
      <br />
      <br />
      <button  className='border-1 ml-5 w-1/9' disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>prev</button>

      <button className=' border-1 ml-5 w-1/9' disabled>{page}</button>

      <button className='border-1 ml-5 w-1/9' onClick={() => handlePageChange(page + 1)}>next</button>
      <div> 
        {
          data.map((el) => (
           <UserDiv {...el}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
