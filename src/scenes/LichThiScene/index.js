import React from 'react';
import ScheduleTemplate from '_templates/ScheduleTemplate';

const LichThiScene = () => {
    const data = [
        {
            id: 1,
            ngay: 'Thứ Hai 07/12/2020',
            phong: 'P307',
            giangDuong: 'TVB',
            maMon: 'WEB207',
            monHoc: 'Front-end Framework',
            lop: 'PT15202-UD',
            giangVien: 'datlt',
            ca: '4',
            thoiGian: '14:10:00 - 16:10:00',
            noiDung: 'Lab 6, Quiz 6',
        },
        {
            id: 2,
            ngay: 'Thứ Hai 07/12/2020',
            phong: 'P307',
            giangDuong: 'TVB',
            maMon: 'WEB207',
            monHoc: 'Front-end Framework',
            lop: 'PT15202-UD',
            giangVien: 'datlt',
            ca: '1',
            thoiGian: '14:10:00 - 16:10:00',
            noiDung: 'Lab 4, Quiz4',
        },
    ];

    return <ScheduleTemplate data={data} />;
};

export default LichThiScene;
