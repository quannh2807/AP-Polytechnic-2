import React from 'react';
import DetailEmptyTemplate from '_templates/DetailEmptyTemplate';
import GoBackHeader from '_molecules/GoBackHeader';

const DetailNewsScene = ({ ...props }) => (
    <>
        <GoBackHeader
            route="News"
            titleContent="Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 202"
        />
        <DetailEmptyTemplate {...props} />
    </>
);

export default DetailNewsScene;
