import React from 'react'
import SectionTitle from '../layout/SectionTitle.component'
import PricingElement from './PricingElement.component';

const Pricing = () => {
    const pricings = [
        {
            title: "FlexPass",
            subtitle: "Get 2 days/month",
            price: 159,
            description: "Not sure how much you drive? Get a magic button anytime you need a car.",
            isRecommanded: false,
        },
        {
            title: "Getaway",
            subtitle: "Get 4 days/month",
            price: 219,
            description: "Get away up to once a week. Your car is delivered and disappers - like magic.",
            isRecommanded: true,
        },
        {
            title: "Freedom",
            subtitle: "Get 8 days/month",
            price: 389,
            description: "Get a car up to twice a week. It's freedom whenever you want it (and no additional fees when you don't).",
            isRecommanded: false,
        },
    ];
    return(
        <div className="container section pricing">
            <SectionTitle sectionNumber="04" title="Pricing" />
            <h2 className="title">Monthly plans for less than a parking space.</h2>
            <p className="caption">Plans include concierge delivery and pickup, cleaning and refueling service, full coverage insurance and maintenance-everything but gas and tolls. Join instantly with $0 down and get your car right now.</p>
            <div className="columns is-vcentered section">
                {
                    pricings.map((plan, idx) => (<PricingElement element={plan} key={idx} />))
                }
            </div>
        </div>
    );
}
export default Pricing;