const getAttackTypes = ({ special }) => {
  const attackTypes = [...special];

  return attackTypes.map((el) => {
    const { id, icon, description = 'Описание недоступно' } = el;
    return { id, icon, description };
  });
};

export default getAttackTypes;
