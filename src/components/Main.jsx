import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

// --- LIKE BUTTON STYLES ---
const LIKE = styled.button`
background: none;
border: none;
color: ${props => props.$hasLiked ? '#ff4b4b' : (props.$click ? props.theme.body : props.theme.text)};
cursor: pointer;
z-index:1;
outline: none;
transition: transform 0.2s ease;
&:hover {
  transform: scale(1.1);
}
`

const rotate = keyframes`
from{ transform: rotate(0); }
to{ transform: rotate(360deg); }
`

const Center = styled.button`
position: absolute;
top: ${props => props.$click ? '85%' :'50%'  };
left: ${props => props.$click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.$click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // --- GLOBAL LIKES LOGIC ---
    const [likes, setLikes] = useState(0); // The global number
    const [hasLiked, setHasLiked] = useState(false); // Did THIS user click it?

    // 1. When the page loads, fetch the global number from the internet
    useEffect(() => {
        // Check if this specific device has liked it before
        const localLikeStatus = localStorage.getItem('abdulrhman_has_liked');
        if (localLikeStatus === 'true') setHasLiked(true);

        // Fetch the global count
        fetch('https://api.counterapi.dev/v1/abdulrhman-portfolio/likes')
            .then(res => res.json())
            .then(data => setLikes(data.count || 0))
            .catch(err => console.log('Error fetching likes:', err));
    }, []);

    // 2. When the user clicks the button
    const handleLikePress = () => {
        if (!hasLiked) {
            // Instantly update UI for the user so it feels fast
            setLikes(likes + 1);
            setHasLiked(true);
            localStorage.setItem('abdulrhman_has_liked', 'true');
            
            // Tell the global internet database to go UP
            fetch('https://api.counterapi.dev/v1/abdulrhman-portfolio/likes/up')
                .then(res => res.json())
                .then(data => setLikes(data.count)); // sync exact global number
        } else {
            // They un-liked it
            setLikes(likes - 1);
            setHasLiked(false);
            localStorage.setItem('abdulrhman_has_liked', 'false');

            // Tell the global internet database to go DOWN
            fetch('https://api.counterapi.dev/v1/abdulrhman-portfolio/likes/down')
                .then(res => res.json())
                .then(data => setLikes(data.count)); // sync exact global number
        }
    };
    // --------------------------

    return (
        <MainContainer>
         <DarkDiv $click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />

            <Center $click={click}>
                <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>click here</span>
            </Center>

            <Contact target="_blank" href="mailto:abdulrhmanalrefaei@gmail.com">
                <motion.h2
                initial={{ y:-200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Say hi..
                </motion.h2>
            </Contact>

            <BLOG to="/blog">
                <motion.h2
                initial={{ y:-200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>

            <WORK to="/work" $click={click}>
                <motion.h2
                initial={{ y:-200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>

            <BottomBar>
            <ABOUT to="/about" $click={click}>
                <motion.h2
                initial={{ y:200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>

            {/* LIVE GLOBAL LIKE BUTTON */}
            <LIKE onClick={handleLikePress} $hasLiked={hasLiked}$click={click}>
                <motion.h2
                initial={{ y:200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                whileTap={{scale: 0.9}}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                    {hasLiked ? '♥' : '♡'} {likes}
                </motion.h2>
            </LIKE>

            <SKILLS to="/skills">
                <motion.h2
                initial={{ y:200, transition: { type:'spring', duration: 1.5, delay:1} }}
                animate={{ y:0, transition: { type:'spring', duration: 1.5, delay:1} }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>
            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
