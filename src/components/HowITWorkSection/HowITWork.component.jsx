import React from 'react'
import SectionTitle from '../layout/SectionTitle.component'
import Widget from '../layout/Widget'

const HowITWork = () => {
    return (
        <div className="how-it-work container">
            <div className="columns">
                <div className="column">
                    <SectionTitle title="HOW IT WORK" sectionNumber="2" />
                    <h2>Simple and handy rental process</h2>
                </div>
                <div className="column">
                    <Widget p1="Snow chains, surf board rack, key lock box, or dog car seat hammock available upon request"
                        image="/images/user2.png" title="Check the available accessories" />
                </div>
                <div className="column">
                    <Widget p1="Still got questions? We've probably covered them all in the Help Center."
                        image="/images/user2.png" title="Read our FAQ" />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <figure className="image is-128x128">
                        <img
                            src="/images/user2.png"
                            alt="Placeholderimage"
                            className="is-rounded"
                        />
                    </figure>
                    <Widget header="Text us" p1="Text when you want your car. No app needed, just an online account. Real human operators" />
                </div>
                <div className="column">
                    <figure className="image is-128x128">
                        <img
                            src="/images/user2.png"
                            alt="Placeholderimage"
                            className="is-rounded"
                        />
                    </figure>
                    <Widget header="We deliver" p1="Your car will arrive at your door - clean and fully fueled." />
                </div>
                <div className="column">
                    <figure className="image is-128x128">
                        <img
                            src="/images/user2.png"
                            alt="Placeholderimage"
                            className="is-rounded"
                        />
                    </figure>
                    <Widget header="You drive" p1="Hop in and go with full coverage insurance, FasTrack, phone accessories, and unlimited mileage." />

                </div>
                <div className="column">
                    <figure className="image is-128x128">
                        <img
                            src="/images/user2.png"
                            alt="Placeholderimage"
                            className="is-rounded"
                        />
                    </figure>
                    <Widget header="We pick it up" p1="It's yours for few hours or few days. Return on your own time, anywhere in our zone. We'll gas and clean it." />
                </div>
            </div>
        </div>
    );
}
export default HowITWork;