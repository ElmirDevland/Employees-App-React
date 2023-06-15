import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete }) => {
  const employees = data.map((obj) => (
    <EmployeesListItem
      key={obj.id}
      {...obj}
      onDelete={() => onDelete(obj.id)}
    />
  ));

  return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
