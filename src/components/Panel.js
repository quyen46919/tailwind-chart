import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DataTable from './DataTable';
import Pie2DChart from './Pie2DChart';
import InfoLine from './InfoLine';
import LineMixChart from './LineMixChart';

function Panel(props) {
    return (
        <div className='w-5/6 h-[100vh] py-4 px-10 overflow-y-scroll scrollbar'>
            {/* HEADER */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-gray-600 text-2xl">Welcome to&nbsp;
                        <span className="text-green-600 font-medium">Stockit Platform</span>
                    </p>    
                    <p className="text-md text-gray-400">Good morning, Trung</p>    
                </div>
                <div className="flex flex-row gap-6 items-center">
                    <FontAwesomeIcon icon={faBell} className="w-5 h-5 text-gray-300"/>
                    <img className="inline-block h-8 w-8 rounded-full ring-4 ring-white shadow-lg shadow-green-500/50" 
                        src="https://yt3.ggpht.com/KH-iLhMgRo7yin-x7tjRNSvYrzNGFsEcT8r7am-v9R5avgddZBZsfz0bmy4OSGX-G7KdnvpjBA=s88-c-k-c0x00ffffff-no-rj" 
                        alt="user avatar"
                    />
                </div>
            </div> 
            {/* END HEADER */}
            {/* CHART */}
            <div className="mt-8 flex-1 flex flex-row justify-between items-start gap-3">
                <div className="w-3/5 flex flex-col items-start justify-center">
                    <p className="text-md font-bold text-gray-700">Porfolio Summary</p>
                    <div className="w-full my-3 flex flex-row justify-start items-center gap-5">
                        <p className="w-fit text-gray-400">Chọn khu vực</p>
                        <select className="form-select appearance-none
                            block
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            aria-label="Default select example"
                            defaultValue="1"
                            >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <LineMixChart/>
                </div>
                <div className="w-2/5 h-full flex flex-col items-start">
                    <p className="font-medium text-md">Porfolio Summary</p>
                    <DataTable/>
                </div>
            </div>
            {/* END CHART */}
            {/* PORTFORLIO */}
            <div className="flex flex-row items-start justify-between mt-8 gap-10">
                <div className="flex flex-col justify-start items-start w-3/5">
                    <p className="text-gray-700 text-md text-lg font-bold">Your portfolio</p>
                    <div className="w-full flex flex-col gap-3 mt-3">
                        <InfoLine/>
                        <InfoLine/>
                        <InfoLine/>
                        <InfoLine/>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col">
                    <p className="text-gray-700 text-md text-lg font-bold">Your portfolio</p>
                    <div className="w-[400px] h-[300px]">
                        <Pie2DChart/>
                    </div>
                </div>
            </div>
            {/* END PORTFOLIO */}
        </div>
    );
}

export default Panel;