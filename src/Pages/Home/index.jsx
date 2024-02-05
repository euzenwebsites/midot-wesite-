import React from 'react'
import { Navbar } from '../../Components'
import '../../App.css'

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
            <Navbar />
            <div className='mt-20'>
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

                            <div className='my-3'>
                                <h2 className='font-semibold '>Goal:</h2>
                                <p>To recognize level headed future and current employees and to reduce accidents.</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Available in:</h2>
                                <p>English, Portuguese and Latin American Spanish</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Factors:</h2>
                                <p>Compliance with Rules, Self-control, Prudence - Risk Aversion and Concentration.</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Application format:</h2>
                                <p>Online</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Used in:</h2>
                                <p>Engineers, mechanics, contractors, mining, logistics, aviation and any area or position with a high accident risk.</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Test duration:</h2>
                                <p>12 minutes</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Number of questions:</h2>
                                <p> 77</p>
                            </div>

                            <div className='my-3'>
                                <h2 className='font-semibold '>Based on:</h2>
                                <p className='sm:w-[400px]'>Multiple validation researches.</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='font-semibold '>Reliability:</h2>
                                <p className='sm:w-[400px]'>0.93</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='font-semibold '>Reports:</h2>
                                <p className='sm:w-[400px]'>Available immediately online</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='font-semibold '>Available tests:</h2>
                                <p className='sm:w-[400px]'>
                                    <ul>
                                        <li>Safe Behavioral DNA</li>
                                        <li>Safe Behavioral DNA R</li>
                                        <li>Safe Behavioral DNA Driver</li>
                                    </ul>
                                </p>
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
                        <h2 className='mt-2'>Behavioral dimensions:</h2>
                        <div className='w-full flex lg:flex-row flex-col my-8 text-[#72B7BE] text-2xl'>
                            <div className='addborder py-2 px-20 flex flex-col justify-center items-center '>
                                <h1>Security knowledge</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                            <div className='addborder py-2 px-20 flex flex-col justify-center items-center '>
                                <h1>Previous experiences</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                            <div className='addborder py-2 px-20 flex flex-col justify-center items-center '>
                                <h1>Safety performance</h1>
                                <div className='w-[80px] h-[5px] bg-[#BA2025] my-4'></div>
                            </div>
                        </div>
                    </div>

                </div>
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