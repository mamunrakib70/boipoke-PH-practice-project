import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utilities/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  const [sort,setSort]=useState('');



  useEffect(() => {
    const storedBookData = getStoredBook();
    const converterdStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      converterdStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);


  const handleSort=(type)=>{
    setSort(type)
    if(type === 'pages'){
      const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
      setReadList(sortedByPage)

    } 
   if(type=== 'ratings'){
    const sortedByRatings = [...readList].sort((a,b)=> a.rating - b.rating);
    setReadList(sortedByRatings)
   }
  }


  return (
    <div>
      <Navbar></Navbar>
      <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort ? sort : ''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort('pages')}>pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort('ratings')}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
      <Footer></Footer>
    </div>
  );
};

export default ReadList;
