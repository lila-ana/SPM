import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const MultiSelectDropdownWithAxios = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [clients, setClients] = useState([]);

  const loadOptions = async (inputValue, callback) => {
    try {
      const response = await axios.get(`${API_BASE_URL}client?query=${inputValue}`);
      const data = response.data.map((item) => ({
        value: item.value,
        label: item.label,
      }));
      setOptions(data);
      callback(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <Select
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      value={selectedOptions}
      onChange={handleSelectChange}

    />
  );
};

export default MultiSelectDropdownWithAxios;
