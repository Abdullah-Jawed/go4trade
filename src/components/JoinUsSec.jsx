import { DiscordIcon, WhatsAppIcon } from '../assets'
import AnimatedBorder from './common/AnimatedBorder'
import JoinBox from './common/JoinBox'

const JoinUsSec = () => {
    return (
        <section className='join-us py-[4rem]'>
            <div className="container">
                <div className='grid md:grid-cols-2 gap-6'>

                    <AnimatedBorder>
                        <JoinBox heading="Join us on Whatsapp Channel" para="Get insights from other users about Go4trades and our experience" img={WhatsAppIcon} link="#" />
                    </AnimatedBorder>
                    <AnimatedBorder>
                        <JoinBox heading="Join Discord Community" para="Get insights from other users about Go4trades and our experience" img={DiscordIcon} link="#" />
                    </AnimatedBorder>
                </div>
            </div>
        </section>
    )
}

export default JoinUsSec