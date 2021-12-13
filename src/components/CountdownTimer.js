import Countdown from 'react-countdown';

export function CountdownTimer() {
  const launchTime = new Date("2021-12-15T00:00:00.000+06:00")

  if (launchTime > Date.now()) {

    return (
      <div className='countdown text-center bg-light p-5 bg-opacity-25 border rounded w-75'>
        <p>Launch Countdown</p>
        <Countdown date={launchTime} />
      </div>
    )

  } else {

    return (<></>)

  }
}