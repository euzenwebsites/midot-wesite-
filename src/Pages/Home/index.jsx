import React from 'react'
import '../../App.css'
import { FooterWithSitemap } from '../../Components'

const Home = () => {
    const datas = [
        {
            src: "/product-icon-1.png",
            h3: "Reduce costs and improve the social environment and prestige of your company",
            li1: "Prevent accidents and avoid direct financial losses.",
            li2: "Increase the motivation of your staff and make yourself known as a safe and responsible company.",
            li3: "SafetyTEST guides your organization towards individual and collective well-being and has a profound impact.",
            li4: "The return on investment when using SafetyTEST can be accurately measured with Midot's ROI calculator."
        },
        {
            src: "/product-icon-2.png",
            h3: "Podium, a highly efficient platform to manage evaluations",
            li1: "Manage your entire recruitment process from one place.",
            li2: "Easily customize Podium for your organizational needs.",
            li3: "View all your usage and evaluation analytics data in easy-to-understand dashboards.",
            li4: "Cloud-based service, without the need for installation or additional hardware."
        },
    ]
    return (
        <div className=''>
            <div className='mt-28'>
                <img src="/safetytest1.jpg" className='w-screen h-[450px] sm:object-fill object-cover' alt="safety Banner" />
                <div className=''>
                    <div className='lg:justify-between flex lg:flex-row flex-col mt-7 max-w-[1500px] px-[10px] sm:px-[7%] '>

                        <div className='lg:w-[60%] w-full'>
                            <h1 className='text-black text-4xl'>Safety TEST </h1>

                            <h3 className='mt-6 w-[80%] text-[#72B7BD] text-3xl'>Safety testing to reduce risks of accidents in the workplace</h3>
                            <p className='mt-6 text-base'>Measures the potential risk of workplace accidents for candidates and current employees</p>
                            <p className='mt-6 text-base'>The Safe Behavioral DNA psychometric test is an exclusive and comprehensive evaluation tool, developed after extensive studies on safe work behavior in various countries, allowing the identification of candidates and employees with high risk of engaging in dangerous and reckless behavior being more prone to work related accidents.</p>

                            <h3 className='my-7 font-semibold text-[#72B7BD] text-3xl'>It is based on four factors associated with job security: Compliance with Rules, Self-control, Prudence - Risk Aversion and Concentration.</h3>
                            <p className='my-5'>Every applicant or current employee answers the questionnaire online in an average time of 12 minutes, and companies receive a complete psychometric report of the evaluated person attitude towards safety.</p>
                            <p className='my-5'>The human factor  explains as much as 80% of work related accidents, associated with unsafe or reckless behavior. In this way, it is essential to have psychometric tests for the employee selection process that can identify more level headed people, who are not likely to misbehave at work and just be safer.</p>
                            <p className="my-5">The human factor  explains as much as 80% of work related accidents, associated with unsafe or reckless behavior. In this way, it is essential to have psychometric tests for the employee selection process that can identify more level headed people, who are not likely to misbehave at work and just be safer.</p>
                            <p className="my-5">The Safe Behavioral DNA work safety test report, provides a general risk indicator of the person examined and give you scores on the four factors associated with safe work behavior: Compliance with Rules, Self-control, Prudence - Risk Aversion and Concentration.</p>
                        </div>

                        <div className='max-w-[430px]'>
                            <h1 className='text-3xl font-semibold w-full'>Technical specifications</h1>
                            <div className='w-[80px] h-[10px] bg-[#BA2025] my-4'></div>
                            <Specifications h2="Goal:" p={'To recognize level headed future and current employees and to reduce accidents.'} />
                            <Specifications h2="Available in:" p={'English, Portuguese and Latin American Spanish'} />
                            <Specifications h2="Factors:" p={'Compliance with Rules, Self-control, Prudence - Risk Aversion and Concentration.'} />
                            <Specifications h2="Application format:" p={'Online'} />
                            <Specifications h2="Used in:" p={'Engineers, mechanics, contractors, mining, logistics, aviation and any area or position with a high accident risk.'} />
                            <Specifications h2="Test duration:" p={'12 minutes'} />
                            <Specifications h2="Number of questions:" p={77} />
                            <Specifications h2="Based on:" p={'Multiple validation researches.'} />
                            <Specifications h2="Reliability:" p={'0.93'} />
                            <Specifications h2="Reports:" p={'Available immediately online'} />

                            <div className='my-3'>
                                <h2 className='font-semibold '>Available tests:</h2>
                                <div className='sm:w-[400px]'>
                                    <ul>
                                        <li>Safe Behavioral DNA</li>
                                        <li>Safe Behavioral DNA R</li>
                                        <li>Safe Behavioral DNA Driver</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h1 className='text-gray-500 text-4xl my-14 max-w-[1500px] px-[10px] sm:px-[7%] '>
                        “Get recommendations from our experts to aid you in planning implementation strategies for workplace safety programs.....”
                    </h1>
                    <div className='flex md:justify-between gap-8 md:flex-row flex-col max-w-[1500px] px-[10px] sm:px-[7%] '>
                        {datas.map((data, i) => {
                            return <Company key={i} data={data} />
                        })}
                    </div>
                    <div className='my-8 max-w-[1500px] px-[10px] sm:px-[7%] '>
                        <img src={'/product-icon-3.png'} alt="product 1" />
                        <h3 className='text-lg font-semibold my-4 w-[80%]'>
                            Tools to predict, measure and compare
                        </h3>
                        <ul className='list-disc text-lg max-w-[550px]'>
                            <li className='my-4'>Identify exactly which employees should participate in training and in which areas. Save training costs, get better results, and get motivated supervisors and employees.</li>
                            <li className='my-4'>Use SafetyTEST's job risk level catalog to compare employee safety profiles to appropriate positions.</li>
                            <li className='my-4'>Once an employee's risks are designated, the organization can build more balanced work teams. For example, some new employees can be placed with more experienced ones, and some employees with higher risk levels can be assigned to the same team as safer employees, etc.</li>
                            <li className='my-4'>Use our analysis module to identify organizational weaknesses – by plant, business unit, or any population segment – ​​and plan your security training programs more efficiently.</li>
                            <li className='my-4'>Receive professional recommendations for short- and long-term planning and implementation strategies for workplace safety programs.</li>
                        </ul>
                    </div>
                    <div className='bgImg flex lg:flex-row flex-col lg:items-center lg:justify-between max-w-[1500px] px-[10px] sm:px-[7%] py-[50px] my-8'>
                        <div className=''>
                            <h2 className='text-4xl text-white font-semibold'>Test it</h2>
                            <p className='text-white max-w-[500px] my-4 text-lg font-normal'>"From day one and throughout the whole cycle, in-person or online training is available to all test administrators. Supported with exclusive audiovisual training material"</p>
                            <ul className='list-disc max-w-[500px] text-white'>
                                <li className='my-4'>We have created and validated SafetyTEST together with our clients and strategic partners, making it an accurate and highly relevant tool to measure, predict and correct behaviors that could cause accidents in the workplace.</li>
                                <li>Companies that use SafetyTEST as part of their safety standards report fewer workplace accidents and better placed employees in positions more appropriate for their levels of risk behavior</li>
                            </ul>

                            <button className='bg-[#72B7BE] p-3 mt-7 rounded-lg hover:bg-[#2a95a1]'>Request a Demo Version</button>
                        </div>
                        <div>
                            <img src="/general.jpg" alt="" className='lg:mt-0 mt-16 h-full lg:h-[400px] object-contain flex justify-start' />
                        </div>
                    </div>

                    <div className='max-w-[1500px] px-[10px] sm:px-[7%]'>
                        <h1 className='text-4xl font-normal'>Scales</h1>
                        <h2 className='mt-2'>Behavioral Dimensions:</h2>
                        <div className='w-full flex lg:flex-row flex-col my-8 text-[#0992CA] text-2xl'>
                            <Dimensions h1={'Security Knowledge'} />
                            <Dimensions h1={'Previous Experiences'} />
                            <Dimensions h1={'Safety Performance'} />
                        </div>

                        <h2 className='mt-2'>Dimensions of Personality Traits:</h2>
                        <div className='w-full flex lg:flex-row flex-col my-8 text-[#0992CA] text-2xl'>
                            <div className='addborder py-3 lg:px-[88px] flex flex-col justify-center items-center '>
                                <h1>Stress Tolerance</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                            <div className='addborder py-3 lg:px-[88px] flex flex-col justify-center items-center '>
                                <h1>Ability to Avoid Risks</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                            <div className='addborder py-3 lg:px-[88px] flex flex-col justify-center items-center '>
                                <h1>Commitment Level</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                        </div>
                        <div className='mt-20 flex sm:ga-8 justify-center items-center'>
                            <img src="/customversion.jpg" alt="" />
                            <div>
                                <p className='text-xl'>Custom versions are available for specific hazards and work environments.</p>
                                <div className='sm:w-[300px] w-40 h-[5px] bg-[#BA2025] mt-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#102236] py-14'>
                        <div className='max-w-[1500px] px-[10px] sm:px-[7%]'>
                            <h1 className='text-3xl text-white font-semibold '>Customer Benefits Package</h1>
                            <div className='border border-[#0992CA] border-solid max-w-[800px] mt-4  p-6 leading-7 text-[#B0F9FF] text-base'>
                                As a Midot customer, you will receive access to your chosen assessments, process management tools and a wide range of additional services, including training, customer support, professional advice, ROI analysis, local validation studies, standards optimization and scoring and scoring customization. We are at your disposal to support you through a comprehensive and professional approach.
                            </div>
                            <div className='flex md:flex-row md:gap-2 flex-col md:justify-between mt-14'>
                                <div className='w-full md:max-w-[250px]'>
                                    <h1 className='text-white text-lg font-semibold'>TRAINING</h1>
                                    <div className='w-[150px] h-[5px] bg-[#B0F9FF] my-2'></div>
                                    <p className='text-white font-medium'>From day one and throughout the service cycle, unlimited in-person or online training is available to all test administrators.</p>
                                </div>

                                <div className='w-full md:max-w-[250px] mt-8 md:mt-0'>
                                    <h1 className='text-white text-lg font-semibold'>SUPPORT</h1>
                                    <div className='w-[150px] h-[5px] bg-[#B0F9FF] my-2'></div>
                                    <p className='text-white font-medium'>The Midot team is always available to answer user questions, usually with almost immediate response times.</p>
                                </div>

                                <div className='w-full md:max-w-[250px] mt-8 md:mt-0'>
                                    <h1 className='text-white text-lg font-semibold'>INVESTIGATION</h1>
                                    <div className='w-[150px] h-[5px] bg-[#B0F9FF] my-2'></div>
                                    <p className='text-white font-medium'>Unparalleled research and scientific publications in dozens of academic studies worldwide provide solid support for evaluation decisions and enable accurate ROI calculations.</p>
                                </div>

                                <div className='w-full md:max-w-[250px] mt-8 md:mt-0'>
                                    <h1 className='text-white text-lg font-semibold'>ADVICE</h1>
                                    <div className='w-[150px] h-[5px] bg-[#B0F9FF] my-2'></div>
                                    <p className='text-white font-medium'>Midot is led by an interdisciplinary team of mainly researchers, developers and managers with extensive training and experience in the fields of psychology, psychometrics and personnel evaluation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#0992C9] py-14'>
                        <div className='max-w-[1500px] px-[10px] sm:px-[7%] flex lg:flex-row flex-col lg:justify-between lg:items-center'>
                            <img src="/safetyMeter.png" alt="safetyMeter" />
                            <div className='lg:w-[350px] w-full mt-8 sm:mt0'>
                                <h1 className='text-white text-4xl font-semibold'>Reporting: Make informed decisions immediately</h1>
                                <p className='mt-3 text-white '>The results of the people tested are available online immediately after the completion of the test. Results can be easily shortlisted based on score and can also be viewed individually, with detailed information for in-depth analysis. All data can be easily exported to Excel for statistical analysis and management decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='databg py-14'>
                        <div className='max-w-[1500px] px-[10px] sm:px-[7%]'>

                            <h3 className='text-xl text-white'>LEARN MORE ABOUT</h3>
                            <h1 className='text-5xl font-semibold my-6 text-white'>Safety TEST</h1>
                            <div className='w-44 h-4 bg-[#0992CA] my-8'></div>
                            <p className='text-white text-3xl font-semibold max-w-[500px]'>An assessment designed to predict potential risks of workplace accidents in the work environment for candidates and collaborators</p>
                            <button className='py-4 px-8 text-white border-2 border-white rounded my-8'>
                                More Information
                            </button>
                        </div>
                    </div>

                </div>
                <FooterWithSitemap />
            </div>
        </div>
    )
}

export default Home


const Company = ({ data }) => (
    <div className=''>
        <img src={data?.src} alt="product 1" />
        <h3 className='text-lg font-semibold my-4 w-[80%]'>
            {data?.h3}
        </h3>
        <ul className='list-disc text-lg max-w-[550px]'>
            <li className='my-4'>{data?.li1}</li>
            <li className='my-4'>{data?.li2}</li>
            <li className='my-4'>{data?.li3}</li>
            <li className='my-4'>{data?.li4}</li>
        </ul>
    </div>
)

const Specifications = ({ h2, p }) => (
    <div className='my-3'>
        <h2 className='font-semibold '>{h2}</h2>
        <p className='sm:w-[400px]'>{p}</p>
    </div>
)

const Dimensions = ({ h1 }) => (
    <div className='addborder py-2 px-20 flex flex-col justify-center items-center '>
        <h1>{h1}</h1>
        <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
    </div>
)