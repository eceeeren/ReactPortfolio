import React, { useState } from 'react';
import { GridItem, Input, Grid } from '@chakra-ui/react';
import NavBar from './NavBar';


function Filter() {

    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
    
    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {

        if (event.target.value === "") {
          setFilterList(list);
          return;
        }
        const filteredValues = list.filter(
          (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };

    return (
        <>
        <NavBar />
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <br/>
        <GridItem colSpan={2} h='10'>
        <br/>
        <Input placeholder='Filter something' onChange={handleSearch} />
        <br/><br/>
        {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
        </GridItem>
        </Grid>
        </>
    );
}

export default Filter;