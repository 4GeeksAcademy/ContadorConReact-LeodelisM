
export default function SecondsCounter(props) {
    let intSeconds = parseInt(props.seconds);

    let seconds = 0;

    if (Number.isInteger(intSeconds)) {
        seconds = intSeconds > 999999 ? 999999 : intSeconds;
    }

    let cientomiles = Math.floor(seconds / 100000);
    let diezmiles = Math.floor((seconds - cientomiles * 100000) / 10000);
    let miles = Math.floor((seconds - (diezmiles * 10000) - (cientomiles * 100000)) / 1000); 
    let centenas = Math.floor((seconds - (miles * 1000) - (diezmiles * 10000) - (cientomiles * 100000)) / 100);
    let decenas = Math.floor((seconds - (centenas * 100) - (miles * 1000) - (diezmiles * 10000) - (cientomiles * 100000)) / 10);
    let unidades = seconds % 10;

    return (
        <div className="d-flex flex-row justify-content-center bg-danger-subtle gap-1 p-2 mt-5 seconds-counter" style={{minHeight: "100px"}}>
            <div className="seconds-counter-item seconds-counter-icon">
                O
            </div>
            <div className="seconds-counter-item">{cientomiles}</div>
            <div className="seconds-counter-item">{diezmiles}</div>
            <div className="seconds-counter-item">{miles}</div>
            <div className="seconds-counter-item">{centenas}</div>
            <div className="seconds-counter-item">{decenas}</div>
            <div className="seconds-counter-item">{unidades}</div>
        </div>
    );


}