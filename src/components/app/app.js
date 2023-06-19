import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'John N.', salary: 800, increase: false, rise: false },
        {
          id: 2,
          name: 'Joseph M.',
          salary: 3000,
          increase: false,
          rise: false,
        },
        {
          id: 3,
          name: 'Martis Q.',
          salary: 5000,
          increase: false,
          rise: false,
        },
      ],
      term: '',
      filter: 'all',
    };
  }
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  onUpdateSalary = (id, value) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((obj) => {
          if (id === obj.id) {
            obj.salary = value;
          }

          return obj;
        }),
      };
    });
  };
  filterEmp = (items, filter) => {
    if (filter === 'rise') {
      return items.filter((item) => item.rise);
    }
    if (filter === 'salaryFilter') {
      return items.filter((item) => item.salary > 1000);
    }

    return items;
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((obj) => obj.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newData = {
      id: uuid(),
      name,
      salary,
      increase: false,
    };

    this.setState(({ data }) => {
      return {
        data: [...this.state.data, newData],
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const numberOfEmployees = data.length;
    const listOfAwards = data.filter((item) => item.increase).length;
    const filtredData = this.filterEmp(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          numberOfEmployees={numberOfEmployees}
          listOfAwards={listOfAwards}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
        </div>
        <EmployeesList
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem}
          onUpdateSalary={this.onUpdateSalary}
          data={filtredData}
        />
        <EmployeesAddForm onAdd={this.addItem} data={data} />
      </div>
    );
  }
}

export default App;
