import '../../styles/ClockPage.css'

export const ClockNumbers = () => {
    
    const n = 12; 

    return (
        <>
            {
                [...Array(n)].map((e,i)=>(
                    <div key={i} className={`number number${i+1}`}>{i+1}</div>
                ))
            }
        </>
    )
}
