import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/241228578_1293979857687416_2071019018762386576_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH14gociBj_FEBnoLbiMnIj-am4wH8Rl7z5qbjAfxGXvM3GKudFeE8P4bieDAxiHb6Bg-AK9fLb23o4fTDLyggo&_nc_ohc=0Bn0rIo5MycAX-oeaL3&_nc_ht=scontent.fdac7-1.fna&oh=7e1d21c271dd60d0830ae7c1c4694fc4&oe=61741C0F',
        name: 'Saira Rahman',
        expertize: '-Rheumatologist specialised-'
    },
    {
        img:'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/242726397_1574807992851596_64687952258358738_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXylGYgfXpMqK5avbnMmfQFSoc8CjGcMkVKhzwKMZwyZjaXYrKYE1lTybUalisv8kknqLGb545kA8eNNPM5BLC&_nc_ohc=KLeXgNT66N4AX_uegFb&_nc_ht=scontent.fdac7-1.fna&oh=1b209601302e9c9b995a6ec9820ef828&oe=61931F37',
        name: 'Sumaya Binte',
        expertize: '-Cardiologist specialised-'
    },
    {
        img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/134955870_117677420178261_6273648378711394677_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHQHFpXroacxojToyEf52AWJHyaEMUuz7YkfJoQxS7PtvCgyVmh7riNpI1pf0nJFx8KALrbBlkitukBYiu8b0Pk&_nc_ohc=4686n0xl9nAAX918vln&_nc_ht=scontent.fdac7-1.fna&oh=27d106c8b088f8c74c461f8b85dff940&oe=61924F1B',
        name: 'samsat jahan najmoon',
        expertize: '-Brain And Mind Specialised-'
    },
    {
        img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/244378321_1538245339848323_6898067300602255123_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFtdG-ZmXwo9QXqynfKo2IUNfqTgA0CdW81-pOADQJ1by-wZVJy9UF9qIGvU5Q8dfstu36LkmpL6PDSRsakm1Sq&_nc_ohc=rm66bD5UmHcAX8sP-85&_nc_ht=scontent.fdac7-1.fna&oh=cc5fcedafb7d74b838800c7de6bfac7a&oe=61927CF2',
        name: 'Ashpriya Talukdar',
        expertize: '- Arthopedic specialist-'
    },
  ]

const Experts = () => {
    return (
<div className='container' id='Experts' >
            <h2 className='text-primary fw-bold'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert=><Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;