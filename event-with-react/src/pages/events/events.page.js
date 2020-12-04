import React from 'react';
import './events.styles.scss';
import Event from '../../components/event/event.component';
import events from "../../data/event.json"

function EventPage(props) {

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="event_title">
                        <h2>Events</h2>
                    </div>
                </div>
                <div className="row event_container">
                {
                    events.map(({id, ...data}) => (
                        <Event key={id} {...data}/>
                    ))
                }
               </div>
            </div>
        </div>
    )
}

EventPage.propTypes = {

}

export default EventPage

