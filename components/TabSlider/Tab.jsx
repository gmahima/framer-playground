import { TabSliderLayout } from "./TabSlider.styles";

export const Tab = ({ isItemSelected, setSelectedItem, item }) => {
  return (
    <>
      <TabSliderLayout.TabContainer onClick={() => setSelectedItem(item)}>
        <TabSliderLayout.Tab>
          <span>{item.icon} </span>
          <span>{item.label}</span>
        </TabSliderLayout.Tab>
        {isItemSelected && (
          <TabSliderLayout.TabUnderline
            layoutId={"underline"}
          ></TabSliderLayout.TabUnderline>
        )}
      </TabSliderLayout.TabContainer>
    </>
  );
};
