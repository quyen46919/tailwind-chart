import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

function InfoLine(props) {
    return (
        <div className="w-full border border-gray-300 rounded py-5 px-8 box-border overflow-hidden">
            <div className="flex flex-row justify-start items-center">
                <div className="flex flex-row justify-between items-center max-w-[240px] gap-3">
                    <FontAwesomeIcon icon={faBell} className="w-5 h-5 p-3 rounded text-green-400 ring-2 ring-green-400"/>
                    <div className="w-full flex flex-col items-between justify-center">
                        <p className="font-medium text-lg text-gray-600 truncate">this is title, Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi illo autem ex! Itaque architecto dolorum fuga ab inventore eum! Odit esse voluptas earum deserunt placeat rem at autem eos!</p>
                        <p className="text-gray-400 text-sm truncate">this is subtitle, text is here very long, text is here very longhere very long, text is here very long</p>
                    </div>
                </div>
                <div className="grow"></div>
                <div className="flex flex-row justify-between items-center gap-4">
                    <div className="w-full flex flex-col items-between justify-center text-center">
                        <p className="font-medium text-lg text-gray-600 truncate">
                            { formatCurrency(325000000) } vnđ
                        </p>
                        <p className="text-gray-400 text-sm truncate">
                            this is subtitle
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-between justify-center text-center">
                        <p className="text-lg text-green-500 font-bold truncate">
                            + 15%
                        </p>
                        <p className="text-gray-400 text-sm truncate">
                            lợi nhuận thêm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoLine;