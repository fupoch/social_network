import { Box, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const UsersFilter = ({filter, setFilter}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            {/* <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            /> */}
            <Input style={{margin: '10px 10px'}} placeholder="Поиск..." value={filter.query} onChange={e =>  setFilter({...filter, query: e.target.value})} />
            <Box sx={{ width: 520 }} style={{margin: '10px 10px'}}>
            <FormControl style={{width: '400px'}}>
              <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter.sort}
                label="Сортировка"
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
              > 
                <MenuItem value={10}>По логину</MenuItem>
                <MenuItem value={20}>По описани</MenuItem>
        </Select>
      </FormControl>
    </Box>
            {/* <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            /> */}
        </div>
    );
};

export default UsersFilter;
