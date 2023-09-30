import React from 'react'

export default function Display({ inputarr }) {
    return (
        <div className='out-display' style={{ alignContent: 'space-around', flexDirection: 'column' }}>
            <div style={{ fontSize: 32, fontWeight: 600 }}>
                <p>Enrolled Students</p>
            </div>
            <div className='out-display' style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', backgroundColor: 'darkgray' }}>
                <h5>Decription</h5>
                <div style={{ backgroundColor: 'black', flex: 0.019 }}></div>
                <h5>Image</h5>
            </div>

            {
                inputarr.map(item =>
                    <div className='out-display' style={{ flex: 1, width: '100%', flexDirection: 'row', border: '1px solid black' }}>
                        <div className='out-display' style={{ flex: 0.55, width: '65%', flexDirection: 'column', padding:5}}>
                            {
                                <div>
                                    <h4>{item.name}</h4>
                                    <h4>{item.mail}</h4>
                                    <h4>{item.website}</h4>
                                    <h4>{item.gender}</h4>
                                    <h4>{item.skills.join(',')}</h4>
                                </div>
                            }
                        </div>
                        <div className='out-display' style={{ flex: 0.01, width: '1%', backgroundColor: 'black' }}>
                        </div>
                        <div className='out-display' style={{ flex: 0.44, width: '34%', flexDirection: 'column' }}>
                           <p style={{fontSize:16,fontWeight:700,padding:5}}>{item.link}</p>
                        </div>

                    </div>
                )

            }



        </div>
    )
}
