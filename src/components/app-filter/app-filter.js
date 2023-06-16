import './app-filter.css';

const AppFilter = ({ onFilterSelect, filter }) => {
  const buttonData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'salaryFilter', label: 'З/П больше 1000$' },
  ];

  const buttons = buttonData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz}`}
        onClick={() => onFilterSelect(name)}
        key={name}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
