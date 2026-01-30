import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    CONNECTING = 'CONNECTING',
    FINISHED = 'FINISHED'
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;

    const messages = [
       "whats your name?",
       "how are you doing today?",
       "what are your strengths and weaknesses?",
       "why do you want to work here?"
    ];
    const lastMessage = messages[messages.length - 1];

    return (<>
        <div className='call-view'>
            <div className='card-interviewer'>
                <div className='avatar'>
                    <Image src='/ai-avatar.png' alt='Vapi' width={65} height={54} className='object-cover' />
                    {isSpeaking && <span className='animate-speak' ></span>}
                </div>
                <h3>AI Interviewer</h3>
            </div>
            <div className="card-border">
                <div className="card-content">
                    <Image src='/user-avatar.png' alt='user avatar' width={450} height={450} className='object-cover rounded-full size-[120px]' />
                    <h3>{userName}</h3>
                </div>
            </div>
        </div>
        {messages.length > 0 && (
            <div className='transcript-border'>
               <div className="transcript">
                <p key={lastMessage} className={cn("transition-opacity duration-500 opacity-0 ", "animate-fadeIn opacity-100")}>{lastMessage}</p>
               </div>
            </div>
        )}
        <div className="w-full flex justify-center">
            {callStatus !== 'ACTIVE' ? (
            <button className='relative btn-call'><span className={cn(" absolute animate-pink rounded-full opacity-75", callStatus !== 'CONNECTING' && 'hidden')}/>
            <span>
                {callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . . "}
            </span></button>

            ) :
            (<button className='btn-disconnect'>END</button>
                )}
        </div>
    </>
    )
}

export default Agent