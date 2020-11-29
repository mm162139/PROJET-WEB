import React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let differenceDate=new Date(this.props.date-this.state.date);
        console.log(this.props.date);
        console.log(this.state.date);
        console.log(differenceDate);
        const monthsLeft=differenceDate.getMonth();

        const daysLeft=differenceDate.getDate();

        const hoursLeft=differenceDate.getHours();

        const minutesLeft=differenceDate.getMinutes();

        const secondsLeft=differenceDate.getSeconds();

        return (
            <div>
                <h3>Prochain Stock dans {monthsLeft} mois, {daysLeft} jours, {hoursLeft} heures, {minutesLeft} minutes et {secondsLeft} secondes .</h3>
            </div>
        );
    }
}
