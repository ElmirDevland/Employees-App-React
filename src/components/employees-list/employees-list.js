import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete, onToggleProp, onUpdateSalary }) => {
  const employees = data.map((obj) => {
    const { id } = obj;
    return (
      <EmployeesListItem
        key={id}
        {...obj}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
        onUpdateSalary={onUpdateSalary}
      />
    );
  });

  return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
