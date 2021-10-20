import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: 'https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
        name: 'Dr.Jone Smith',
        expertize: '-Hair Expert-'
    },
    {
        img: 'https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg',
        name: 'Dr.Anderson',
        expertize: '-Skin Expert-'
    },
    {
        img: 'https://image.freepik.com/free-photo/portrait-doctor_144627-39390.jpg',
        name: 'Dr.Zakeona',
        expertize: '-Diet Expert-'
    },
    {
        img: 'https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
        name: 'Dr.Saimon Andrew',
        expertize: '-Skin Expert-'
    },
    {
        img:'https://image.freepik.com/free-photo/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor-nurse-blue-scrubs-pointing-fingers-left-show-patients-advertisement-important-info_1258-57267.jpg',
        name: 'Dr.Zarina Salma',
        expertize: '-Feminine Expert-'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-secondary mt-5">Our Experts</h2>
            <br />
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >
                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;