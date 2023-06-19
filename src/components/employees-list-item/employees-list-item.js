import './employees-list-item.css';

const EmployeesListItem = ({
  increase,
  rise,
  name,
  salary,
  onDelete,
  onToggleProp,
  onUpdateSalary,
  id,
}) => {
  return (
    <div>
      <li
        className={`${increase ? 'increase' : ''} ${
          rise ? 'like' : ''
        } list-group-item d-flex justify-content-between`}
      >
        <span
          data-toggle="rise"
          onClick={onToggleProp}
          className="list-group-item-label"
        >
          {name}
        </span>
        <input
          onChange={(e) => {
            const value = e.target.value.replace(/\D/gi, '');
            onUpdateSalary(id, value);
          }}
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            data-toggle="increase"
            onClick={onToggleProp}
            type="button"
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    </div>
  );
};

export default EmployeesListItem;
