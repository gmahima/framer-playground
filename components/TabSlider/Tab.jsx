import { TabSliderLayout } from "./TabSlider.styles";

export const Tab = ({ isItemSelected, setSelectedItem, item }) => {
  console.log(isItemSelected)
  return (
    <>
      <TabSliderLayout.TabContainer onClick={() => setSelectedItem(item)}>
        <TabSliderLayout.Tab>
          <span>{item.icon} </span>
          <span>{item.label}</span>
        </TabSliderLayout.Tab>
        <TabSliderLayout.TabUnderline isItemSelected={isItemSelected}></TabSliderLayout.TabUnderline>
      </TabSliderLayout.TabContainer>
    </>
  );
};
