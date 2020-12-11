import React from 'react';
import { View } from 'react-native';

import TableOrganism from '_organisms/TableOrganism';
import GoBackHeader from '_molecules/GoBackHeader';

const TableScene = ({ ...props }) => (
    <View style={{ flex: 1 }}>
        <GoBackHeader route="Home" titleContent="Khởi sự doanh nghiệp" />
        <TableOrganism {...props} />
    </View>
);

export default TableScene;
