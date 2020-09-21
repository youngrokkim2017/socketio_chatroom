import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <div className="header">Chatroom</div>
            <div>
                <div>
                    <label htmlFor="chatroomName">Chatroom Name</label>
                    <input 
                        type="text"
                        name="chatroomName"
                        id="chatroomName"
                        placeholder="messages"
                    />
                </div>
            </div>
            <button>Create Chatroom</button>
            <div>
                <div>
                    <div className="join">Join</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;