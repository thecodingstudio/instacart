import React, { useState } from "react";

import './best-stores-list.styles.scss';

import Store from '../../../store/store.component';

import BEST_STORES_DATA from '../best-data';

const BestStoresList = () => {
    const [stores] = useState(BEST_STORES_DATA);
    return (
        <div className="best-storeslist">
         <h2>Best stores for bargains in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default BestStoresList;