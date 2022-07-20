export const TabSliderTab = ({ isItemSelected, setSelectedItem, item }) => {
  return (
    <li
      onClick={() => setSelectedItem(item)}
    >{`${item.icon} ${item.label}`}</li>
  );
};
