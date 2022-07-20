export const Tab = ({ isItemSelected, setSelectedItem, item }) => {
  return (
    <div
      onClick={() => setSelectedItem(item)}
    >{`${item.icon} ${item.label}`}</div>
  );
};
