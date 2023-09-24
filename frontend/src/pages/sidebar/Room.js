// import React from 'react'
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
// import { useParams } from 'react-router-dom';



// function Room() {
//     const { roomID } = useParams();
//     let myMeeting = async (element) => {
//         const appID = 229155980;
//         const serverSecret = "8ecad24090fc919a7acc3cd17816cb26";
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Enter Name");
//         const zp = ZegoUIKitPrebuilt.create(kitToken)
//         zp.joinRoom({
//             container: element,
//             // sharedLinks: [
//             //     {
//             //         name: 'Personal link',
//             //         url:
//             //             window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
//             //     },
//             // ],
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.OneONoneCall,
//             }
//         })
//     }




//     return (
//         <div ref={myMeeting}>Room</div>
//     )
// }

// export default Room






import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useNavigate } from 'react-router-dom';

function Room() {
    const { roomID } = useParams();
    const navigate = useNavigate();

    let myMeeting = async (element) => {
        const appID = 229155980;
        const serverSecret = "8ecad24090fc919a7acc3cd17816cb26";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Enter Name");
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }

    const navigateToDashboard = () => {
        navigate('/dashboard');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div ref={myMeeting}>Room</div>
            <button
                onClick={navigateToDashboard}
                style={{
                    marginTop: 35,
                    backgroundColor: '#2c72ff',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: 'none', // Remove the button border
                }}
            >
                Go to Dashboard
            </button>
        </div>
    )
}

export default Room;

