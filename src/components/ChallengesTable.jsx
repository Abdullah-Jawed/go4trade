import React, { useState } from 'react'
import { ChallengeTable } from '../utils/statics'
import Infosvg from './common/Infosvg'

const ChallengesTable = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="flex justify-center gap-3.5 items-center mb-8">
                <p className='text-[#FFFFFF] text-[16px] font-extralight'>Select Preference</p>
                {ChallengeTable.map((item, index) => (
                    <div key={index} className="form-group flex items-center gap-2 custom-radio" onClick={() => setActiveIndex(index)}>
                        <input type="radio" name="step" id={item.ButtonName} value={item.ButtonName} checked={activeIndex === index} />
                        <label htmlFor={item.ButtonName} className='text-[#FFFFFF] text-[18px] font-extralight cursor-pointer'>{item.ButtonName}</label>
                    </div>
                ))}
            </div>

            {ChallengeTable.map((item, index) =>
                activeIndex === index ? (
                    <div key={index} className="table-parent p-[2px] rounded-[12px] overflow-x-auto overflow-y-visible relative mb-10">
                        <table class="table w-full border bg-(--base-color) rounded-[12px] overflow-hidden min-w-[1140px]">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    {item.TableHeadContent.map((item, index) => (
                                        <th key={index} scope="col">
                                            <h4>{item}</h4>
                                            <a href="#" className='table-btn'>Buy Challenge</a>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.TableContent.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.main} <Infosvg /></th>
                                        {item.data.map((dataItem, dataIndex) => (
                                            <td key={dataIndex}>{dataItem}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : null
            )}


            <p className='text-[#FCFCFC] text-[17px] md:text-[22px] font-extralight mb-6'>Each challenge tests your ability to manage risk, stay disciplined, and hit realistic targets. </p>
            <ul className='flex items-center flex-wrap gap-x-10 gap-y-5 p-0'>
                <li>No real money risk </li>
                <li>Affordable entry</li>
                <li>Instant feedback</li>
            </ul>
        </>
    )
}

export default ChallengesTable