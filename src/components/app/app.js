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
        { id: 1, name: 'John N.', salary: 800, increase: false },
        { id: 2, name: 'Joseph M.', salary: 3000, increase: false },
        { id: 3, name: 'Martis Q.', salary: 5000, increase: false },
      ],
    };
  }

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

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList onDelete={this.deleteItem} data={data} />
        <EmployeesAddForm onAdd={this.addItem} data={data} />
      </div>
    );
  }
}

export default App;
