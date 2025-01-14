import React, { useState } from 'react';
import gridSvg_1 from '../assets/grid-svg-1.svg';
import gridSvg_2 from '../assets/grid-svg-2.svg';
import gridSvg_3 from '../assets/grid-svg-3.svg';
import gridSvg_4 from '../assets/grid-svg-4.svg';
import gridSvg_5 from '../assets/grid-svg-5.svg';
import gridSvg_6 from '../assets/grid-svg-6.svg';
import button_left from '../assets/button-left.svg';
import button_right from '../assets/button-right.svg';

const Services = () => {
    const [visibleSections, setVisibleSections] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const toggleVisibility = (sectionId) => {
        setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    return (
        <div className='w-full bg-offwhite font-GTWalsheimPro lg:px-16 lg:py-32'>
            <div className='flex items-start justify-between'>
                <h1 className='text-6xl lg:w-1/12'>
                    Our<span className='lg:inline-block bg-text bg-h text-slate-1'>services</span>
                </h1>
                <p className='text-white-3'>
                    Assemble a fully capable design and development team <br /> overnight so you can scale fast 🙌
                </p>
            </div>
            <div className='py-10 grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-5'>
                <div onClick={() => toggleVisibility(1)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>Branding</h2>
                        <img src={gridSvg_1} alt="Branding" />
                    </div>
                    {visibleSections[1] && (
                        <div className='grid grid-cols-2 grid-rows-3 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Graphic Design</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Print Design</div>
                            <div className='bg-3d-yellow custom-service-btn'>Packaging Design</div>
                            <div className='bg-black-2 text-white custom-service-btn'>Illustrations & Icons</div>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Brand Assets</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleVisibility(2)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>Web Design</h2>
                        <img src={gridSvg_2} alt="Web Design" />
                    </div>
                    {visibleSections[2] && (
                        <div className='grid grid-cols-2 grid-rows-3 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Website UI/UX</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Web Apps</div>
                            <div className='bg-3d-yellow custom-service-btn'>SaaS Design</div>
                            <div className='bg-black-2 text-white custom-service-btn'>Webflow Websites</div>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Ecommerce Websites</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleVisibility(3)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>Decks</h2>
                        <img src={gridSvg_3} alt="Decks" />
                    </div>
                    {visibleSections[3] && (
                        <div className='grid grid-cols-2 grid-rows-2 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Pitch Decks</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Corporate Profiles</div>
                            <div className='bg-3d-yellow custom-service-btn'>Slide Decks</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleVisibility(4)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>Marketing Design</h2>
                        <img src={gridSvg_4} alt="Marketing Design" />
                    </div>
                    {visibleSections[4] && (
                        <div className='grid grid-cols-2 grid-rows-3 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Social Media Creatives</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Blog Graphics</div>
                            <div className='bg-3d-yellow custom-service-btn'>Newsletter Design</div>
                            <div className='bg-black-2 text-white custom-service-btn'>Infographics</div>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Marketing Collateral Design</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleVisibility(5)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>3D & Motion</h2>
                        <img src={gridSvg_5} alt="3D & Motion" />
                    </div>
                    {visibleSections[5] && (
                        <div className='grid grid-cols-2 grid-rows-3 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Animations</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Digital Interactions</div>
                            <div className='bg-3d-yellow custom-service-btn'>Video Editing</div>
                            <div className='bg-black-2 text-white custom-service-btn'>2D Videos</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleVisibility(6)}>
                    <div className='relative custom-grid-class'>
                        <h2 className='text-3xl'>Mobile Design</h2>
                        <img src={gridSvg_6} alt="Mobile Design" />
                    </div>
                    {visibleSections[6] && (
                        <div className='grid grid-cols-2 grid-rows-3 gap-7 py-4'>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Mobile App UI</div>
                            <div className='bg-3d-pink text-white custom-service-btn'>Mobile App UX</div>
                            <div className='bg-3d-yellow custom-service-btn'>iOS App Design</div>
                            <div className='bg-black-2 text-white custom-service-btn'>Android App Design</div>
                            <div className='bg-3d-dblue text-white custom-service-btn'>Hybrid App Design</div>
                            <div className='bg-neon flex rounded-xl items-center justify-between'>
                                <img src={button_left} alt="" /> MORE <img src={button_right} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
