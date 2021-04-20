import React from 'react';
import TableWithTabHOC from 'hocs/TableWithTab.hoc';
import KitLevel from './receiverClientInventory.screen';
import ProductLevel from './receiverClientInventory2.screen';

const ExpenseEmployeeScreen = () => {
  const tabs = [
    {
      name: 'Product Level',
      key: 'productLevel',
      hasCustomModel: true,
      CustomModel: ProductLevel,
    },
    {
      name: 'Kit Level',
      key: 'kitLevel',
      hasCustomModel: true,
      CustomModel: KitLevel,
    },
  ];

  return <TableWithTabHOC tabs={tabs} hideRightButton={true} />;
};

// const mapStateToProps = (state) => {
//   return {currentPage: state.page.currentPage};
// };

export default ExpenseEmployeeScreen;
