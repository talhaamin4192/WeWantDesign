import React, { useState } from 'react';
import plus from '../assets/plus.svg';  // Path to the plus icon
import cross from '../assets/close.svg';  // Path to the cross icon


const Queries = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const [rotatedIndex, setRotatedIndex] = useState(null); // State to track the rotation

    const toggleDiv = (index) => {
        // Toggle the visibility and rotation of the FAQ answer
        setVisibleIndex(visibleIndex === index ? null : index);
        setRotatedIndex(rotatedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Why wouldn't I just hire a full-time designer?",
            answer: (
                <>
                    Hiring a full-time senior designer is costly, with an annual expense of over $100,000, plus additional costs like benefits and insurance. Finding and hiring a new designer is stressful, and dealing with terminations and turnovers can be challenging.
                    <br />
                    Our monthly plan offers flexibility, allowing you to pause and resume your subscription as needed. This way, you only pay for the designer's services when you have work available for them. For a detailed comparison between our services and other options, please visit this page.
                </>
            ),
        },
        {
            question: "Why wouldn't I just hire another agency or freelancer?",
            answer: (
                <>
                    When it comes to hiring a freelancer or agency, there are various challenges to consider, including limited scope, unreliable resources, and limited scalability.
                    <br />
                    However, with We Want Design, we offer a superior alternative. Enjoy the benefits of unlimited design requests, straightforward pricing, and agency-quality designs. Plus flexibility to switch design experts as required, ensuring that your specific needs are always met.
                    <br />
                    For a detailed comparison between our services and other options, please visit this page.
                </>
            ),
        },
        {
            question: "What types of designs can you create, and what is included in the scope of your work?",
            answer: (
                <>
                    Our design capabilities are limitless. Whether it's UI design, intricate animations, custom logo design, social media designs, or any other design requirement, we can handle it with ease.
                    <br />
                    Our aim is to provide you with a stress-free experience, allowing you to focus on your core tasks and responsibilities. For a comprehensive list of our capabilities, please visit this page.
                </>
            ),
        },
        {
            question: "What is “unlimited design” and “unlimited revisions”, and is there any limit on design requests?",
            answer: (
                <>
                    With our subscription, you have the freedom to add an unlimited number of design requests to your queue. Our team will diligently work on each request, ensuring they are delivered to you one by one with unlimited revisions until you are satisfied, allowing for a streamlined and efficient workflow.
                </>
            ),
        },
        {
            question: "How do I request designs?",
            answer: (
                <>
                    We provide extensive flexibility in requesting designs through our integration with Trello. Clients have various options to submit their design requests, including direct requests via Trello, sharing Google Docs or wireframes, or even recording a brief Loom video for those who prefer a more visual approach.
                    <br />
                    Furthermore, you have the ability to add your brand assets directly to the Trello board, allowing for easy access and seamless collaboration. Additionally, Trello can be integrated with other workflows, such as Slack, to further streamline communication and enhance efficiency in managing your design projects.
                </>
            ),
        },
        {
            question: "How fast will I receive my designs?",
            answer: (
                <>
                    The delivery time of your designs varies based on the task and its complexity. On average, we strive to deliver within 24-48 hours. For instance, social media designs are typically delivered within hours, while UI designs may take a day or two to ensure meticulous attention to detail.
                </>
            ),
        },
        {
            question: "Who are the designers?",
            answer: (
                <>
                    Our team comprises specialized designers with expertise in various areas such as motion design, UI design, logo design, and more. This ensures that you have access to a diverse skill set, allowing us to match your specific project requirements with the most suitable designer. We carefully hand-select and recruit top talent from a global pool of top design talent. We have implemented rigorous in-house training programs and a competitive vetting process to ensure that we recruit only the top 10% of designers in the industry.
                </>
            ),
        },
        {
            question: "How does the pause feature work?",
            answer: (
                <>
                    We recognize that your design needs may vary from month to month, and you may not require a continuous stream of design or development work.
                    <br />
                    That's where our subscription pause feature becomes valuable. Our billing cycles are based on a 22 working-day period. For instance, if you sign up and utilize the service for 11 working days but then decide to pause your subscription, the billing cycle will be temporarily halted. This means that you will have 10 remaining working days of service that can be utilized at any time in the future (utilized within 2 years).
                </>
            ),
        },
        {
            question: "What if I don't like the design?",
            answer: (
                <>
                    No worries! We'll continue to revise the design until you're 100% satisfied 💯
                </>
            ),
        },
        {
            question: "Are there any refunds if I don't like the service?",
            answer: (
                <>
                    We take pride in delivering high-quality work, and as a result, we do not provide refunds. However, with our unlimited revision feature, we guarantee that we will make the necessary adjustments and revisions until the final deliverables meet your exact requirements and expectations.
                </>
            ),
        },
    ];

    return (
        <div className="w-full px-16 py-20 bg-black font-GTWalsheimPro">
            <h1 className="text-6xl font-semibold text-slate-1">
                Our <span className="text-white lg:inline-block bg-text bg-h">FAQs</span>
            </h1>
            <div className="max-w-5xl mx-auto grid gap-10 px-4 py-20 text-white">
                {faqs.map((faq, index) => (
                    <div className="flex gap-10" key={index}>
                        <div>
                            <button
                                className={`custom-query-circle ${
                                    visibleIndex === index ? 'bg-neon' : ''
                                }`}
                                onClick={() => toggleDiv(index)}
                            >
                                <img
                                    src={rotatedIndex === index ? cross : plus} // Toggle between plus and cross
                                    alt="Toggle Answer"
                                    className={`transition-transform duration-300 ${
                                        rotatedIndex === index ? 'rotate-45' : ''
                                    }`} // Rotate the image when clicked
                                />
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="text-xl font-semibold">{faq.question}</p>
                            </div>
                            {visibleIndex === index && (
                                <div className="bg-white rounded-2xl text-black p-5">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Queries;
